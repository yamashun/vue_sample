<template>
  <div class="container">
    <h1 class="title">メーカーと車種を選択してください</h1>
    <div class="box">
      <div class="field">
        <label class="label">メーカー: {{ car.maker.name }} </label>
        <div class="control">
          <div class="select is-medium">
            <select v-model="car.maker" class="CarModelSelectList" name="car_model_list">
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
  import * as types from "../../store/types"

  export default {
    data: function () {
      return {
        car: {
          maker: { name: "", id: null },
          model: { name: "", id: null },
        },
        makers: [{id: 1, name: "トヨタ"}],
        models: [
          {id: 1, name: "カローラ"},
          {id: 2, name: "クラウン"},
          {id: 3, name: "86"},
        ],
      }
    },
    methods: {
      nexPage: function(){
        this.$store.dispatch('setCar', this.car)
      },
    },
    
  }
</script>