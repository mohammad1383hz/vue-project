
<template>
    <FormPost @form-data="createpost" :button-loading="loading" buttonText="createt"/>
</template>
   
   

<script setup lang="ts">
import FormPost from '@/components/FormPost.vue'
import { ref } from "vue";
import axios from "axios";
const loading = ref(false);

function createpost(formData) {
      loading.value = true;
      axios
        .post("https://jsonplaceholder.typicode.com/posts", {
          title: formData.title,
          body: formData.bady,
          userId: 1,
        })
        .then(function () {
          loading.value = false;

        //   Swal.fire({
        //     title: "Thanks!",
        //     text: "Post created successfully",
        //     icon: "success",
        //     confirmButtonText: "Ok",
        //   });
        console.log('ok');

        })
        .catch(function (error) {
          console.log(error);
        });
    }

</script>

