<template>
  <div id="app">
    <h1>地震快報</h1>
    <p class="result">{{ result }}</p>
  </div>
</template>

<script>

export default {
  name: 'App',
  data() {
    return {
      result: null,
      time: 0
    }
  },
  created() {
    let self = this;
    let api = 'https://opendata.cwb.gov.tw/api/v1/rest/datastore/E-A0015-001?Authorization=rdec-key-123-45678-011121314'
    self.time = setInterval(() => {
      self.result = ''
      self.$http.get(api).then(function (response) {
        self.result = response.data.records.earthquake[0].reportContent;
      });
    }, 10000)
  },
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.result {
  font-size: 30px;
  color: red;
}
</style>
