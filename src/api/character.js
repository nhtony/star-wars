import { fetchApi } from "../utils";

export default {
  async getAll() {
    const target = "/people";

    return fetchApi(target);
  },
};
