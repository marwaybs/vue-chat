import Repository from "../repository";

const resource = "/users";
export default {
  get() {
    return Repository.get(`${resource}`);
  },
  getUser(userId) {
    return Repository.get(`${resource}/${userId}`);
  },
  createUser(payload) {
    return Repository.post(`${resource}`, payload);
  }
};
