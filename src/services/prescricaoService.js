import http from "./http";

export default {
  getAll() {
    return http.get("/gestantes");
  },
  getById(id) {
    return http.get(`/gestantes/${id}`);
  },
  create(data) {
    return http.post("/gestantes", data);
  },
  update(id, data) {
    return http.put(`/gestantes/${id}`, data);
  },
  delete(id) {
    return http.delete(`/gestantes/${id}`);
  },
};
