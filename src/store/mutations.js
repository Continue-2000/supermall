import { ADD_COUNT, PUSH_PROJECT, IS_CHECK } from "./mutations_const"
export default {

  [ADD_COUNT](state, payload) {
    console.log(payload);
    payload.count += 1;
  },
  [PUSH_PROJECT](state, payload) {
    payload.checked = false;
    state.shopcart.push(payload)
  },
}