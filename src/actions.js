export const POST_URL = "POST_URL";
export const GET_URL = "GET_URL";
export const SET_URL = "SET_URL";

export const API_BASE = "http://localhost:5000";

export const postUrl = url => dispatch =>
  fetch(API_BASE + "/shorten_url", {
    method: "POST",
    body: JSON.stringify({
      url,
      truncate: true
    }),
    headers: {
      "Content-Type": "application/json"
    }
  })
    .then(res => res.json())
    .then(data => dispatch(setUrl(data)));

export const setUrl = data => ({
  type: SET_URL,
  data
});
