<template>
  <div class="container">
    <h1 class="title">メーカーと車種を選択してください</h1>
    <div class="box">
      <div class="field">
        <label class="label">メーカー</label>
        <div class="control">
          <div class="select is-medium">
            <select v-model="car.maker.id" class="CarModelSelectList" name="car_model_list" @change="fetchModels">
              <option v-for="maker in makers" v-bind:key="maker.id" v-bind:value="maker.id">
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
            <select v-model="car.model" class="CarModelSelectList" name="maker_list" >
              <option v-for="model in models" v-bind:value="model">
                  {{ model.name }}
              </option>
            </select>
          </div>
        </div>
      </div>
      <button class="button is-info is-outlined" v-on:click="nexPage()">次へ</button>
    </div>
  </div>
  
</template>

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
    mounted: function() {
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
      async fetchModels () {
        console.log("start getchModels !!!!")
        const res = await axios.get(`../api/car_models/${this.car.maker.id}`)
        this.models = res.data.car_models;
      },
      nexPage: function(){
        this.$store.dispatch('setCar', this.car)
      },
    },
    
  }
</script>