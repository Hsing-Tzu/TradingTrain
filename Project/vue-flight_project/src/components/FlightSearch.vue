<template>
  <div class="searchsection">
    <h1>Flight Search</h1>
    <div class="flextop">
      <el-form-item label="From:" class="flex-content from">
        <el-cascader v-model="from" :options="airports" @change="handleChange" style="width: 100%;" />
      </el-form-item>
      <el-form-item label="To:" class="flex-content to">
        <el-cascader v-model="to" :options="airports" @change="handleChange" style="width: 100%;" />
      </el-form-item>
      <el-form-item label="Depart:" class="flex-content depart">
        <el-date-picker v-model="departDate" type="date"></el-date-picker>
      </el-form-item>
      <!-- <el-form-item label="Return:">
        <el-date-picker v-model="returnDate" type="date"></el-date-picker>
      </el-form-item> -->
      <el-form-item label="Passengers:" class="flex-content passengers">
        <el-select v-model="passengers" placeholder="Select number of passengers">
          <el-option v-for="num in 10" :key="num" :label="num" :value="num"></el-option>
        </el-select>
      </el-form-item>
    </div>
    <el-form class="flexbottom">
      <el-form-item>
        <el-button type="primary" @click="searchFlights">Search Flights</el-button>
      </el-form-item>
    </el-form>
  </div>
  <div class="resultsection">
    <ul v-show="flights.length > 0">
      <li v-for="(flight, index) in flights" :key="flight.index">
        <div class="flight-info">
          <div class="airline-flight">
            <h3>{{ flight.airlineName }}</h3>
            <p>Flight No: {{ flight.flightNo.join(', ') }}</p>
          </div>
          <div class="flightdata">
            <div class="departure">
              <p>{{ flight.departureCityName }}</p>
              <p>{{ flight.departureAirportName }}</p>
              <p>Depart: {{ flight.departureDate }} {{ flight.departureTime }}</p> <!-- 移動到這裡 -->
            </div>
            <div class="arrow">➡️</div>
            <div class="arrival">
              <p>{{ flight.arrivalCityName }}</p>
              <p>{{ flight.arrivalAirportName }}</p>
              <p>Arrive: {{ flight.arrivalDate }} {{ flight.arrivalTime }}</p> <!-- 移動到這裡 -->
            </div>
          </div>
          <div class="price">
            <p>Price: {{ flight.price[0] }} NTD</p>
          </div>
        </div>
      </li>
    </ul>
    <!-- <p v-else>No flights available.</p> -->
  </div>
  <div class="flightlist" v-show="flights.length === 0">
    <div class="flight first">
      <h1>台北 - 東京票價走勢圖</h1>
      <div class="button-container">
        <button class="price-chart-button" @click="toggleFlightPriceChart('TPE', 'NRT', '06')">JUN.</button>
        <button class="price-chart-button" @click="toggleFlightPriceChart('TPE', 'NRT', '07')">JUL.</button>
        <button class="price-chart-button" @click="toggleFlightPriceChart('TPE', 'NRT', '08')">AUG.</button>
      </div>
    </div>
    <div class="price-chart" v-if="selectedFlight === 'TPE-NRT' && chartOptions">
      <highcharts class="trend_image" :options="chartOptions"></highcharts>
    </div>
    <div class="flight second">
      <h1>台北 - 大阪票價走勢圖</h1>
      <div class="button-container">
        <button class="price-chart-button" @click="toggleFlightPriceChart('TPE', 'KIX', '06')">JUN.</button>
        <button class="price-chart-button" @click="toggleFlightPriceChart('TPE', 'KIX', '07')">JUL.</button>
        <button class="price-chart-button" @click="toggleFlightPriceChart('TPE', 'KIX', '08')">AUG.</button>
      </div>
    </div>
    <div class="price-chart" v-if="selectedFlight === 'TPE-KIX' && chartOptions">
      <highcharts class="trend_image" :options="chartOptions"></highcharts>
    </div>
    <div class="flight third">
      <h1>台北 - 沖繩票價走勢圖</h1>
      <div class="button-container">
        <button class="price-chart-button" @click="toggleFlightPriceChart('TPE', 'OKA', '06')">JUN.</button>
        <button class="price-chart-button" @click="toggleFlightPriceChart('TPE', 'OKA', '07')">JUL.</button>
        <button class="price-chart-button" @click="toggleFlightPriceChart('TPE', 'OKA', '08')">AUG.</button>
      </div>
    </div>
    <div class="price-chart" v-if="selectedFlight === 'TPE-OKA' && chartOptions">
      <highcharts class="trend_image" :options="chartOptions"></highcharts>
    </div>
    <div class="flight forth">
      <h1>台北 - 北海道票價走勢圖</h1>
      <div class="button-container">
        <button class="price-chart-button" @click="toggleFlightPriceChart('TPE', 'CTS', '06')">JUN.</button>
        <button class="price-chart-button" @click="toggleFlightPriceChart('TPE', 'CTS', '07')">JUL.</button>
        <button class="price-chart-button" @click="toggleFlightPriceChart('TPE', 'CTS', '08')">AUG.</button>
      </div>
    </div>
    <div class="price-chart" v-if="selectedFlight === 'TPE-CTS' && chartOptions">
      <highcharts class="trend_image" :options="chartOptions"></highcharts>
    </div>
    <div class="flight fifth">
      <h1>台北 - 名古屋票價走勢圖</h1>
      <div class="button-container">
        <button class="price-chart-button" @click="toggleFlightPriceChart('TPE', 'NGO', '06')">JUN.</button>
        <button class="price-chart-button" @click="toggleFlightPriceChart('TPE', 'NGO', '07')">JUL.</button>
        <button class="price-chart-button" @click="toggleFlightPriceChart('TPE', 'NGO', '08')">AUG.</button>
      </div>
    </div>
    <div class="price-chart" v-if="selectedFlight === 'TPE-NGO' && chartOptions">
      <highcharts class="trend_image" :options="chartOptions"></highcharts>
    </div>
    <div class="flight sixth">
      <h1>台北 - 福岡票價走勢圖</h1>
      <div class="button-container">
        <button class="price-chart-button" @click="toggleFlightPriceChart('TPE', 'FUK', '06')">JUN.</button>
        <button class="price-chart-button" @click="toggleFlightPriceChart('TPE', 'FUK', '07')">JUL.</button>
        <button class="price-chart-button" @click="toggleFlightPriceChart('TPE', 'FUK', '08')">AUG.</button>
      </div>
    </div>
    <div class="price-chart" v-if="selectedFlight === 'TPE-FUK' && chartOptions">
      <highcharts class="trend_image" :options="chartOptions"></highcharts>
    </div>
    <div class="flight seventh">
      <h1>台北 - 濟州島票價走勢圖</h1>
      <div class="button-container">
        <button class="price-chart-button" @click="toggleFlightPriceChart('TPE', 'CJU', '06')">JUN.</button>
        <button class="price-chart-button" @click="toggleFlightPriceChart('TPE', 'CJU', '07')">JUL.</button>
        <button class="price-chart-button" @click="toggleFlightPriceChart('TPE', 'CJU', '08')">AUG.</button>
      </div>
    </div>
    <div class="price-chart" v-if="selectedFlight === 'TPE-CJU' && chartOptions">
      <highcharts class="trend_image" :options="chartOptions"></highcharts>
    </div>
    <div class="flight eighth">
      <h1>台北 - 首爾票價走勢圖</h1>
      <div class="button-container">
        <button class="price-chart-button" @click="toggleFlightPriceChart('TPE', 'ICN', '06')">JUN.</button>
        <button class="price-chart-button" @click="toggleFlightPriceChart('TPE', 'ICN', '07')">JUL.</button>
        <button class="price-chart-button" @click="toggleFlightPriceChart('TPE', 'ICN', '08')">AUG.</button>
      </div>
    </div>
    <div class="price-chart" v-if="selectedFlight === 'TPE-ICN' && chartOptions">
      <highcharts class="trend_image" :options="chartOptions"></highcharts>
    </div>
  </div>
  <router-view></router-view>
</template>
  
<script>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import axios from 'axios'
//import { reactive } from 'vue';
import HighchartsVue from 'highcharts-vue';

const airports = [{
  value: 'JAPAN',
  label: '日本',
  children: [
    {
      value: 'Tokyo',
      label: '東京都',
      children: [
        {
          value: 'NRT',
          label: '成田機場',
        },
        {
          value: 'HND',
          label: '羽田機場',
        }
      ]
    },
    {
      value: 'Osaka',
      label: '大阪府',
      children: [
        {
          value: 'KIX',
          label: '關西機場',
        },
        {
          value: 'ITM',
          label: '伊丹機場',
        },
        {
          value: 'UKB',
          label: '神戶機場',
        }
      ]
    },
    {
      value: 'Hokkaido',
      label: '北海道',
    },
  ],
},
{
  value: 'Taiwan',
  label: '臺灣',
  children: [
    {
      value: 'Taipei',
      label: '台北',
      children: [
        {
          value: 'TPE',
          label: '桃園機場',
        },
        {
          value: 'TSA',
          label: '松山機場',
        }
      ]
    },
    {
      value: 'Kaohsiung',
      label: '高雄',
      children: [
        {
          value: 'KHH',
          label: '小港機場',
        },
      ]
    },
  ],
},
];

export default {
  components: {
    HighchartsVue,
  },
  setup() {
    const from = ref([])
    const to = ref([])
    const departDate = ref(new Date())
    const returnDate = ref(new Date())
    const passengers = ref(1)
    const flights = ref([])
    const selectedFlight = ref('');
    const router = useRouter()
    const formatDate = (date) => {
      const year = date.getFullYear().toString();
      const month = (date.getMonth() + 1).toString().padStart(2, '0');
      const day = date.getDate().toString().padStart(2, '0');
      return `${year}-${month}-${day}`;
    };




    const chartOptions = ref({
      title: {
        text: ''
      },
      xAxis: {
        categories: []
      },
      yAxis: {
        title: {
          text: 'Price'
        }
      },
      series: [
        {
          name: 'Price',
          data: [],
          connectNulls: true
        }
      ]
    });

    const fetchFlightPrices = async (origin, destination, month) => {
      try {
        const trendresponse = await axios.post('http://127.0.0.1:8000/chartData/', {
          mon: month,
          ori: origin,
          dest: destination
        });
        console.log(trendresponse.data)
        return trendresponse.data;
      } catch (error) {
        throw new Error('Failed to fetch flight trend prices');
      }
    };

    const toggleFlightPriceChart = async (origin, destination, month) => {
      if (selectedFlight.value === `${origin}-${destination}`) {
        selectedFlight.value = null;
        chartOptions.value = {
          title: {
            text: ''
          },
          xAxis: {
            categories: []
          },
          yAxis: {
            title: {
              text: 'Price'
            }
          },
          series: [
            {
              name: 'Price',
              data: [],
              connectNulls: true
            }
          ]
        };
      } else {
        selectedFlight.value = `${origin}-${destination}`;

        try {
          const trend = await fetchFlightPrices(origin, destination, month);
          const prices = Array.isArray(trend) ? trend : [];

          chartOptions.value = {
            title: {
              text: `${month}月${origin} - ${destination} Flight Price Trend`
            },
            xAxis: {
              categories: prices.map((_, index) => index + 1)
            },
            yAxis: {
              title: {
                text: 'Price'
              }
            },
            series: [
              {
                name: 'Price',
                data: prices,
                connectNulls: true
              }
            ]
          };
        } catch (error) {
          console.error('Error:', error.message);
        }
      }
    };

    const handleChange = (from) => {
      console.log(from);
    };

    const searchFlights = async () => {
      // Check if from and to airports are selected
      if (!from.value[2] || !to.value[2]) {
        alert('Please select both departure and destination airports.')
        return
      }
      // Check if return date is null
      // if (!returnDate.value || !departDate.value) {
      //   alert('Please select Return date & Depart date.')
      //   return
      // }
      // // Check if return date is after depart date
      // if (returnDate.value && returnDate.value < departDate.value) {
      //   alert('Return date must be equal or after depart date.')
      //   return
      // }
      // Check if number of passengers is valid
      if (passengers.value <= 0) {
        alert('Number of passengers must be greater than 0.')
        return
      }

      try {
        // Make an API request to the flight search endpoint
        const body = {
          a_AC: to.value[2],
          d_AC: from.value[2],
          //a_date: returnDate.value ? formatDate(returnDate.value) : '',
          d_date: departDate.value ? formatDate(departDate.value) : ''
        }
        console.log(body);

        const response = await axios.post('http://127.0.0.1:8000/flights/', body);
        // const response = await axios.post('http://127.0.0.1:8000/flights/', null, {
        //   params: {
        //     a_AC: to.value[2],
        //     d_AC: from.value[2],
        //     a_date: returnDate.value ? formatDate(returnDate.value) : '',
        //     d_date: departDate.value ? formatDate(departDate.value) : ''
        //   }
        // });

        // Assuming the API response contains an array of flights
        //flights.value = response.data
        console.log(response.data)
        flights.value = response.data.sort((a, b) => a.price[0] - b.price[0]);
        // Redirect to the flight search results page
        // console.log(flights, typeof flights);
        // console.log(response.data, typeof response.data);
        // return;
        // console.log(typeof response.data);
        // console.log([...response.data]);
        //router.push({ name: 'FlightSearchResults', params: { flights: [ ...response.data] } })
      } catch (error) {
        console.error('Failed to fetch flights:', error)
        alert('An error occurred while fetching flights. Please try again.')
      }
    }


    return {
      airports,
      handleChange,
      from,
      to,
      departDate,
      // returnDate,
      passengers,
      flights,
      searchFlights,
      toggleFlightPriceChart,
      selectedFlight,
      chartOptions
    }
  }
}
</script>
  
<style scoped>
.searchsection {
  margin: 0 30px;
  padding: 10px;
  border: 1px solid #ddd;
  background-color: aliceblue;
  border-radius: 10px;
}

.resultsection {
  margin: 0 30px;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  margin: 10px 0;
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 10px;
}

.flight-info {
  display: flex;
  justify-content: space-around;
  align-items: center;
}

.airline-flight {
  width: 20%;
}

/* .departure {
  flex-basis: 30%;
} */

.arrow {
  margin: 0 10px;
  display: flex;
  align-items: center;
}

/* .arrival {
  flex-basis: 30%;
} */

.flight-info h3 {
  margin: 0;
}

.flight-info p {
  margin: 5px 0;
}

.first {
  background-image: url(1.jpg);
  background-position: center;
}

.second {
  background-image: url(2.jpg);
  background-position: center;
}

.third {
  background-image: url(3.jpg);
  background-position: center;
}

.forth {
  background-image: url(4.jpg);
  background-position: center top 20%;
}

.fifth {
  background-image: url(5.jpg);
  background-position: center bottom 40%;
}

.sixth {
  background-position: center bottom 30%;
  background-image: url('6.jpg');
}

.seventh {
  background-position: center top 45%;
  background-image: url('7.jpg');
}

.eighth {
  background-position: center top 40%;
  background-image: url('8.jpg');
}

/* .login {
  display: flex;
  justify-content: flex-end;
  padding: 10px;
}

.login-button {
  padding: 5px 10px;
  background-color: #ddd;
  border: none;
  border-radius: 4px;
} */

.flex-content label {
  width: 30px;
  padding-right: 5px;
}

.flextop {
  display: flex;
  flex-direction: row;
}

.flexbottom {
  display: flex;
  flex-direction: row-reverse;
}

.flex-content {
  width: 30%;
  padding: 0 5px;
  border-radius: 4px;
  min-height: 36px;
}

.depart {
  width: 20%;
}

.flightlist {
  display: flex;
  flex-direction: column;
  position: relative;
  flex: 0 0 50%;
  margin: 0 30px;
}

.flight {
  height: 200px;
  margin: 10px;
  display: flex;
  justify-content: center;
  position: relative;
  border-radius: 10px;
  background-color: rgba(255, 255, 255, 0.5);
}

.flight h1 {
  display: flex;
  align-items: center;
  justify-content: center
}

.flightdata {
  display: flex;
  width: 50%;
  justify-content: space-around;
}

.price-chart-button {
  padding: 8px 12px;
  background-color: #13426b;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

.button-container {
  position: absolute;
  bottom: 10px;
  right: 10px;
  display: flex;
  gap: 10px;
  align-items: flex-end;
}

.price-chart-button:hover {
  background-color: #23527c;
}

.trend_image {
  width: 100%;
}

.price-chart {
  margin: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
}

@media screen and (max-width: 750px) {
  .searchsection {
    display: flex;
    flex-direction: column;
    margin: 0;
  }

  .resultsection {
    margin: 0;
  }

  .flextop {
    flex-wrap: wrap;
  }

  .from,
  .to {
    width: 100%;
  }

  .depart,
  .passengers {
    width: calc(50% - 10px);
    float: left;
  }

  .flightlist {
    margin: 0;
  }

  .flight h1 {
    font-size: 30px;
  }

  .flight-info {
    justify-content: center;
    flex-direction: column;
    align-items: stretch;
  }

  .flight-info h3 {
    padding-right: 10px;
  }

  .airline-flight {
    display: flex;
    flex-direction: row;
    width: 100%;
  }

  .flightdata {
    width: 100%;
    display: flex;
    justify-content: space-around;
  }
}</style>