<template>
  <div class="posts">
    <div class="post-form">
      <textarea class="form-control" v-model="formInput" @keyup="formError = ''"></textarea>
      <button type="button" class="btn btn-primary mt-3" @click="addPost">Add post</button>
      <div class="post-form-error" v-if="formError">{{formError}}, probably should fill the form</div>
    </div>
    <div class="post-list">
      <div v-for="(post, index) in posts" :key="index" class="post-item">
        <div class="card my-5">
          <div class="card-header">
            {{post.date}}
          </div>
          <div class="card-body">
            <p class="card-text">{{post.text}}</p>
            <div class="post-button">
              <button type="button" class="btn btn-danger" @click="deletePost(post.id)">Delete post</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component
export default class Posts extends Vue {
    private posts: any[] = [];
    private formInput: string = '';
    private formError: string = '';

    created() {
        
    }
}
</script>

<style scoped>

</style>