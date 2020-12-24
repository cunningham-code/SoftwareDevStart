import http from "../http-common";

class TutorialDataService {
  getAll() {
    return http.get("/posts");
  }

  get(id: string) {
    return http.get(`/posts/${id}`);
  }

  create(data: any) {
    return http.post("/posts", data);
  }

  update(id: string, data: any) {
    return http.put(`/posts/${id}`, data);
  }

  delete(id: string) {
    return http.delete(`/posts/${id}`);
  }

  deleteAll() {
    return http.delete(`/posts`);
  }

  findByTitle(title: string) {
    return http.get(`/posts?title=${title}`);
  }
}

export default new TutorialDataService();
