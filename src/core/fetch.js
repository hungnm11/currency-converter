import {REST_API} from './rest-endpoint';

export const METHOD = {
  get: 'GET',
  post: 'POST'
};

const access_key = '9af2d5555fd753d5b3fccb3a4c7a3341';

let $fetch = (endpoint, params, method = METHOD.get) => {
  const uri = REST_API + endpoint + '?access_key=' + access_key;
  let requestPromise = null;

  switch (method) {
    case METHOD.post:
      requestPromise = fetch(uri, {
        method,
        headers: new Headers(),
        body: JSON.stringify(params)
      });
      break;
    case METHOD.get:
    default:
      // requestPromise = fetch(uri + (params ? `?${paramsToQuery(params)}` : ''));
      requestPromise = fetch(Object.keys(params).length == 0 ? uri : uri + `?${paramsToQuery(params)}`);
      break;
  }

  const fetchData = requestPromise.then(res => res.json());
  return fetchData;

};

function paramsToQuery(params) {
  return Object
    .keys(params)
    .map(key => `${key}=${params[key]}`)
    .join('&');
}

export default $fetch;