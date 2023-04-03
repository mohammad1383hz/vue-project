<script setup lang="ts">
import axios from 'axios'
import { ref } from 'vue'
import { useRoute } from 'vue-router';
import UserShowIndex from './UserShowIndex.vue'

const route=useRoute();
const user=ref({});
axios.get(`https://jsonplaceholder.typicode.com/users/${route.params.id}`)
  .then(function (response) {
    // handle success
    user.value=response.data;
    // console.log(response.data);
  })
  .catch(function (error) {
    // handle error
    console.log(error);
  })
  .finally(function () {
    // always executed
  });
</script>

<template>
  
  <p>ttt</p>
   
  <p>{{ user.name }}</p>
  <p>{{ user.id }}</p>

</template>







