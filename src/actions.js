import { CHANGE_SEARCH_FIELD } from "./constants";

export const setSearchField = input => ({
  type: CHANGE_SEARCH_FIELD,
  payload: input
});
