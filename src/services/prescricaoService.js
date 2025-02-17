import http from "./http";

export default {
  getAll() {
    return http.get("/prescricoes");
  },
  getById(id) {
    return http.get(`/prescricoes/${id}`);
  },
  create(data) {
    return http.post("/prescricoes", data);
  },
  update(id, data) {
    return http.put(`/prescricoes/${id}`, data);
  },
  delete(id) {
    return http.delete(`/prescricoes/${id}`);
  },
};
