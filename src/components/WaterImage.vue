<template>
    <div>
      <img v-for="n in amount" :key="n" src="./waterD.png" alt="Water Drop" title="Water">
    </div>
  </template>
  
  <script>
  export default {
    props: {
      amount: {
        type: Number,
        required: true
      }
    }
  }
  </script>