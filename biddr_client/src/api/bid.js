import { BASE_URL } from "../config";

export const Bid = {
  all() {
    return fetch(`${BASE_URL}/auctions`, {
      // Makes include cookies in request and response for
      // cross-origin requests.
      credentials: "include"
    }).then(res => res.json());
  },
  async one(id) {
    // return await (await fetch(`${BASE_URL}/questions/${id}`)).json();
    const res = await fetch(`${BASE_URL}/auctions/${id}`, {
      credentials: "include"
    });
    const auction = await res.json();
    return auction;
  },
  create(params) {
    return fetch(`${BASE_URL}/auctions`, {
      method: "POST",
      credentials: "include",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(params)
    }).then(res => res.json());
  },
};
