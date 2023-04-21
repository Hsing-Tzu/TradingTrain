<template>
    <div>
      <canvas ref="chart"></canvas>
    </div>
  </template>
  
  <script>
  import { Line } from 'vue-chartjs'
  import { ref, onMounted } from 'vue'
  
  export default {
    extends: Line,
    setup() {
      const chartRef = ref(null)
  
      onMounted(() => {
        renderChart(chartRef.value, {
          labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
          datasets: [
            {
              label: 'Data One',
              backgroundColor: '#f87979',
              data: [40, 39, 10, 40, 39, 80, 40]
            }
          ]
        }, { responsive: true, maintainAspectRatio: false })
      })
  
      return { chartRef }
    }
  }
  </script>
  
  