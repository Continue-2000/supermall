import { ADD_COUNT, PUSH_PROJECT, IS_CHECK, CLICK_NAME } from "./mutations_const"
export default {
  [ADD_COUNT](state, payload) {
    payload.count += 1;
  },
  [PUSH_PROJECT](state, payload) {
    payload.checked = false;
    state.shopcart.push(payload)
  },
  [IS_CHECK](state, i) {
    state.shopcart[i].checked = !state.shopcart[i].checked
  },
  [CLICK_NAME](state, name) {
    state.clickname = name
  }
}