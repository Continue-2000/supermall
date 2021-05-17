import { ADD_COUNT, PUSH_PROJECT } from "./mutations_const"
export default {

  [ADD_COUNT](state, payload) {
    console.log(payload);
    payload.count += 1;
  },
  [PUSH_PROJECT](state, payload) {
    state.shopcart.push(payload)
    console.log(state.shopcart);
  }

}