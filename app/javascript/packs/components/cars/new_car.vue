// html
<template>
  <div class="section">
    <div class="container">
      <h1 class="title">メーカーと車種を選択してください</h1>
      <div class="box">
        <div class="field">
          <label class="label">メーカー: {{ car.maker.name }} </label>
          <div class="control">
            <div class="select is-medium">
              <select v-model="car.maker" class="CarModelSelectList" @change="fetchModels">
                <option v-for="maker in makers" v-bind:value="maker">
                    {{ maker.name }}
                </option>
              </select>
            </div>
          </div>
        </div>
        <div class="field">
          <label class="label">車種: {{ car.model ? car.model.name : "" }}</label>
          <div class="control">
            <div class="select is-medium">
              <select v-model="car.model" class="CarModelSelectList" >
                <option v-for="model in models" v-bind:value="model">
                    {{ model.name }}
                </option>
              </select>
            </div>
          </div>
        </div>
        <button class="button is-link is-outlined" v-on:click="nextPage()">次へ</button>
      </div>
    </div>
  </div>
  
</template>

// javascript
<script>
  import axios from 'axios';
  export default {
    data: function () {
      return {
        car: {
          maker: { name: "", id: null },
          model: { name: "", id: null },
        },
        makers: [],
        models: [],
      }
    },
    mounted: function () {
      this.fetchMakers();
    },
    methods: {
      fetchMakers: function () {
        axios.get(`../api/makers`)
          .then(res => {
            this.makers = res.data.makers;
            console.log(this.makers)
          });
      },
      fetchModels: function () {
        axios.get(`../api/car_models/${this.car.maker.id}`)
          .then(res => {
            this.models = res.data.car_models;
            console.log(this.models)
          });
      },
      nextPage: function() {
        // this.$store.commit('setMaker', this.car);
        this.$router.push('/cars/new_price');
      },
    },
  }
</script>