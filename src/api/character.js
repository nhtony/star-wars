import { fetchApi } from "../utils";

export default {
  getAll() {
    const target = "/people";
    return fetchApi(target);
  },
};
