<template>
  <div class="container">
    <h1>{{ name.test }}</h1>
    <button @click="send">Отправить данные</button>
    <hr />
    <p>{{ responseServer.data }}</p>
  </div>
</template>
<script>
export default {
  data() {
    return {
      name: "Alex",
      test: "Тестовые данные",
      responseServer: "Данные на сервер не отправлены",
      TestVar: {
        name: "Ivan"
      }
    };
  },
  async mounted() {
    this.name = await this.$axios.$get("/api/test");
  },
  methods: {
    send() {
      this.$axios
        .post("/api/", { data: this.test })
        .then(response => {
          console.log("Ок", response);
          this.responseServer = response;
        })
        .catch(function(error) {
          console.log("error", error);
        });

      //если функция async то данные можно получить так
      // const response = await this.$axios.post("/api/", { data: this.test });
      // console.log(response);
      // this.responseServer = response.data;
    }
  }
};
</script>
<style>
.container {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
}
</style>
