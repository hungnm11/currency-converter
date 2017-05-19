import $fetch from './core/fetch';
import { LIVE } from './core/rest-endpoint';

export function _getData(params = {}) {
  return $fetch(LIVE, params);
}