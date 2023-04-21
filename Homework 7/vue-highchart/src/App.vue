<template>
    <div id="app">
      <chart />
    </div>
  </template>
  
  <script>
  
  import chart from "./components/StockChart.vue"
  
  export default {
    name: 'App',
    components: {
      chart
    }
  }
  </script>