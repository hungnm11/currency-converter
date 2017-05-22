import $fetch from './core/fetch';
import { LIVE, LIST_CURRENCIES } from './core/rest-endpoint';

export function _getData(params = {}) {
  return $fetch(LIVE, params);
}

export function _getCurrencyList(params = {}) {
  return $fetch(LIST_CURRENCIES, params);
}