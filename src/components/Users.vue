<script setup lang="ts">
import axios from 'axios'
import { ref } from 'vue'
import UserShowIndex from './UserShowIndex.vue'

const users=ref([]);
axios.get('https://jsonplaceholder.typicode.com/users')
  .then(function (response) {
    // handle success
    users.value=response.data;
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
  <h1>users</h1>
    <div v-for="user in users">
        <p>{{user.name}}</p>
  <UserShowIndex :user="user"/>

    </div>
</template>

