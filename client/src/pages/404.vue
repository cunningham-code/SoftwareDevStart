<template>
  <div class="page page--404">
    <h3>404 page not found</h3>
    <p><router-link to='/'>go home</router-link></p>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component
export default class NotFoundPage extends Vue{}
</script>
