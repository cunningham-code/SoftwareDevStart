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
import PostsDataService from '../services/PostsDataService';

interface Post {
    id?: number,
    text: string,
    date?: string
};

@Component
export default class Posts extends Vue {
    private posts: Post[] = [];
    private formInput: string = '';
    private formError: string = '';

    created() {
        PostsDataService.getAll()
            .then(response => {
              console.log(response.data)
              this.posts = response.data.reverse();
            })
            .catch(err => {
              console.error(`Couldn't fetch all posts: ${err}`)
            })
    }

    public addPost(): void {
        const newPost: Post = {
          text: this.formInput
        }

        PostsDataService.create(newPost)
          .then(response => {
            this.posts.unshift(response.data);
          })
          .catch(err => {
            this.formError = err.reponse.statusText;
          })
    }

    public deletePost(id: number): void {
      PostsDataService.delete(id)
        .then(response => {
          let newPosts = this.posts.filter(post => post.id !== response.data[0].id);
          this.posts = newPosts;
        })
        .catch(err => {
          console.error(err.response);
        })
    }
}
</script>

<style scoped>
  .posts {
    display: flex;
    justify-content: center;
  }
  .post-list {
    width: 70%;
  }
  .post-item {
    width: 100%;
    display: flex;
    margin-bottom: 20px;
    padding: 10px;
    box-sizing: border-box;
    outline: 1px solid rgb(169, 169, 169);
  }
  .post-date {
    width: 100px;
    flex-shrink: 0;
  }
  .post-text {
    margin-left: 20px;
    margin-right: 20px;
    word-break: break-all;
    white-space: pre-wrap;
  }
  .post-button {
    width: 100px;
    margin-left: auto;
    flex-shrink: 0;
  }
  .post-button button {
    width: 100%;
  }
  .post-form {
    position: relative;
    width: 30%;
    display: flex;
    flex-direction: column;
    margin-right: 20px;
  }
  .post-form textarea {
    height: 150px;
    padding: 10px;
    resize: none;
  }
  .post-form-error {
    padding: 5px;
    position: absolute;
    bottom: 100%;
    left: 0;
    right: 0;
    background-color: maroon;
    color: #fff;
  }
  @media (max-width: 420px) {
    .posts {
      flex-direction: column;
    }
    .post-form {
      width: 100%;
      margin-right: 0;
      margin-bottom: 20px;
    }
    .post-list {
      width: 100%;
    }
    .post-item {
      flex-direction: column;
    }
    .post-text {
      margin: 0;
      margin-top: 10px;
      margin-bottom: 10px;
    }
    .post-button {
      margin-left: 0;
    }
  }
</style>
