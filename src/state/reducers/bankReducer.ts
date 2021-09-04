import { ActionType } from "../action-types";
import { Action } from "../actions";

const initialStste = 0;

const reducer = (state: number = initialStste, action: Action) => {
  switch (action.type) {
    case ActionType.WITHDRAW:
      return state + action.payload;
    case ActionType.DEPOSIT:
      return state - action.payload;
    case ActionType.BANKRUPT:
      return 0;
    default:
      return state;
  }
};

export default reducer;
