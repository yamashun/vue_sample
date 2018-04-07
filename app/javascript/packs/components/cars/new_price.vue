<template>
  <div class="container">
    <h1 class="title">価格を入力してください</h1>
    <div class="box">
      <div class="field">
        <label class="label">価格: {{ price }} </label>
        <div class="control">
          <input type="number" class="input is-primary" v-model="price" id="car_price">
        </div>
      </div>
      <button class="button is-warning is-outlined" v-on:click="previousPage()">戻る</button>
      <button class="button is-info is-outlined" v-on:click="inputConfirm()">確認</button>
    </div>
  </div>
</template>

<script>
  export default {
    data: function () {
      return {
        price: "",
      }
    },
    mounted: function () {
      this.price = this.$store.getters.price;
    },
    methods: {
      inputConfirm: function() {
        this.$store.commit('setPrice', this.price);
        this.$router.push('/cars/confirm');
      },
      previousPage: function() {
        this.$store.commit('setPrice', this.price);
        this.$router.push('/cars/new');
      }
    },
  }
</script>