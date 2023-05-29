<template>
  <div>
    <h1>Flight Search Results</h1>
    <ul>
      {{ JSON.stringify(flights) }}
      <li v-for="flight in flights" :key="flight.id_in">
        <h3>{{ flight.departureCityName }} to {{ flight.arrivalCityName }}</h3>
        <p>Depart: {{ flight.departureDate }} {{ flight.departureTime }}</p>
        <p>Arrive: {{ flight.arrivalDate }} {{ flight.arrivalTime }}</p>
        <p>Airline: {{ flight.airlineName }}</p>
        <!-- <p>Flight No: {{ flight.flightNo.join(', ') }}</p> -->
      </li>
    </ul>
  </div>
</template>

<script>
import { reactive, ref } from 'vue';
//import { useRoute } from 'vue-router'
import { useRouter } from 'vue-router'
export default {
  // props: {
  //   flights: {
  //     type: Object,
  //     required: true
  //   }
  // },
  setup () {
    const route = useRoute();
    console.log(route.params);
    const flights = ref(route.params.flights);
    return { flights };
  }
}
</script>

<style>
ul {
  list-style-type: none;
  padding: 0;
}

li {
  margin: 10px 0;
  padding: 10px;
  border: 1px solid #ddd;
}
</style>
