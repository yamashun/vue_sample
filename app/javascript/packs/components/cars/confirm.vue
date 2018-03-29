<template>
  <div class="container">
    <h1 class="title">入力内容を確認してください</h1>
    <table class="table is-striped is-fullwidth">
      <thead>
        <tr>
          <th>項目</th>
          <th>入力内容</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>メーカー</td>
          <td>{{ this.$store.state.maker }}</td>
        </tr>
        <tr>
          <td>車種</td>
          <td>{{ this.$store.state.model }}</td>
        </tr>
        <tr>
          <td>価格</td>
          <td>{{ this.$store.state.price }}</td>
        </tr>
      </tbody>
    </table>
    <button class="button is-warning is-outlined" v-on:click="previousPage()">戻る</button>
    <button class="button is-info is-outlined" v-on:click="exhibitCar()">登録</button>
  </div>
</template>

<script>
  import axios from 'axios';
  export default {
    methods: {
      exhibitCar: function() {
        console.log(this.$store.getters.car)
        axios.post(`../api/cars`, this.$store.getters.car)
          .then(res => {
            if (res.data.status == 200) {
              this.$router.push('/cars/complete');
            } else {
              alert("登録に失敗しました。")
            }
          });
      },
      previousPage: function() {
        this.$router.push('/cars/new_price');
      }
    },
  }
</script>

