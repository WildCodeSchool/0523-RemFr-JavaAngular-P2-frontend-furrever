import { createAction, props } from "@ngrx/store";

export const addUserOnStore = createAction("addUserOnStore", props<{ picture: string }>());
export const removeUserOnStore = createAction("removeUserOnStore");
