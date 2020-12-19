<template>
  <div class="page page--index">
    <div class="alert alert-primary" role="alert">
      This messaging code covers concepts regarding frontend vs. backend that you are highly encouraged to use to help you with your sprints.
    </div>
    <h3>Messages Page</h3>
    <p>{{ welcome }}</p>
    <posts></posts>
  </div>
</template>

<script>
import Posts from './../components/Posts.vue';

export default {
  components: {
    Posts
  },
  data: function() {
    return {
      welcome: 'Welcome to messages page!'
    }
  }
}
</script>