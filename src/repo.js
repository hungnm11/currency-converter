import $fetch from './core/fetch';
import { ENDPOINT_LIVE, ENDPOINT_LIST_CURRENCIES } from './core/rest-endpoint';

export function _getData(params = {}) {
  return $fetch(ENDPOINT_LIVE, params);
}

export function _getCurrencyList(params = {}) {
  return $fetch(ENDPOINT_LIST_CURRENCIES, params);
}