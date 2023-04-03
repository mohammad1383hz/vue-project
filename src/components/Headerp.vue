<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'

</script>

<template>
  <ul class="nav">
  <li class="nav-item">
    <RouterLink class="nav-link active" to="/">home</RouterLink>
    
  </li>
  <li class="nav-item">
    <RouterLink class="nav-link active" to="/users">user</RouterLink>

    </li>
  <li class="nav-item">
    <RouterLink class="nav-link active" to="/">post</RouterLink>

  </li>
 
</ul>
</template>

