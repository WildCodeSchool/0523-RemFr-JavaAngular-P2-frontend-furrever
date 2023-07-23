import { createReducer, on } from "@ngrx/store";
import { addUserOnStore, removeUserOnStore } from "./userStore.actions";

const initialState = {
  isLog: false,
  picture: "icons/profile.jpg",
};

const _userStoreReducer = createReducer(
  initialState,
  on(addUserOnStore, (state, { picture }) => {
    return {
      isLog: true,
      picture,
    };
  }),
  on(removeUserOnStore, (state) => {
    return initialState;
  })
);

export function userStoreReducer(state: any, action: any) {
  return _userStoreReducer(state, action);
}
