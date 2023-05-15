<template>
    <div>
      <h1>Flight Search Results</h1>
      <ul>
        <li v-for="flight in flights" :key="flight.id">
          <h3>{{ flight.origin }} to {{ flight.destination }}</h3>
          <p>Depart: {{ flight.departureDate }}</p>
          <p>Return: {{ flight.returnDate }}</p>
          <p>Price: {{ flight.price }}</p>
        </li>
      </ul>
    </div>
  </template>
  
  <script>
  import { ref } from 'vue';
  
  export default {
    props: {
      flights: {
        type: Array,
        required: true
      }
    },
    setup(props) {
      // Access props
      const flights = ref(props.flights);
  
      return {
        flights
      };
    }
  }
  </script>
  
  <style scoped>
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
  