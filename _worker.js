export default {
  async fetch(request, env) {
    let url = new URL(request.url);
    if (url.pathname.startsWith('/2d1d9c50-c9ad-4c7a-b3a1-9fcd38f62b5a-vmess')) {
      url.hostname = 'aew3tdf.herokuapp.com'
      let new_request = new Request(url, request);
      return fetch(new_request);
    }
    return env.ASSETS.fetch(request);
  },
};
