import {REST_API, LIVE, LIST_CURRENCIES, HISTORICAL} from './rest-endpoint';

export const METHOD = {
  get: 'GET',
  post: 'POST'
};

let $fetch = (urn, params, method = METHOD.get) => {
  const uri = REST_API + urn;
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
      requestPromise = fetch(uri + (params ? `?${paramsToQuery(params)}` : ''));
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