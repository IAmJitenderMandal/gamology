import { ADD_DATA, FETCH_MORE_DATA } from "./action.types";

export default (state, action) => {

  switch (action.type) {
    case ADD_DATA:
      return {
        data: [...state.data, ...action.payload.results],
        nextUrl: action.payload.next,
      };

    default:
      return state;
  }
};
