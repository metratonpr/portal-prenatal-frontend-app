import http from "./http";

export default {
  getAll() {
    return http.get("/exames");
  },
  getById(id) {
    return http.get(`/exames/${id}`);
  },
  create(data) {
    return http.post("/exames", data);
  },
  update(id, data) {
    return http.put(`/exames/${id}`, data);
  },
  delete(id) {
    return http.delete(`/exames/${id}`);
  },
};
