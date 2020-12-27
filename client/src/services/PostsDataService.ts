import axios from "./http-common";

class PostsDataService {
  getAll() {
    return axios.get("/posts");
  }

  get(id: number) {
    return axios.get(`/posts/${id}`);
  }

  create(data: any) {
    return axios.post("/posts", data);
  }

  update(id: string, data: any) {
    return axios.put(`/posts/${id}`, data);
  }

  delete(id: number) {
    return axios.delete(`/posts/${id}`);
  }

  deleteAll() {
    return axios.delete(`/posts`);
  }

  findByTitle(title: string) {
    return axios.get(`/posts?title=${title}`);
  }
}

export default new PostsDataService();
