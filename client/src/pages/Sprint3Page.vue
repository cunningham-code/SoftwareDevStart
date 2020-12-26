<template>
  <div class="page page--about">
    <div class="alert alert-danger" role="alert">
      This page is TBD
    </div>
    <p>{{ welcome }}</p>
    <p class="about-logo">
      <a href="http://github.com/rdxi/vue-express" target="_blank">
        <img src="images/vue-express-logo.png" alt="logo" width="300">
      </a>
    </p>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component
export default class Sprint3Page extends Vue {
    private welcome: string = "Welcome to the Sprint 3 Page!";
}
</script>

<style scoped>
    .about-logo a {
        padding: 20px;
        outline: 1px solid rgb(169, 169, 169);
        display: inline-block;
    }
    .about-logo a:hover {
        opacity: 0.8;
    }
</style>