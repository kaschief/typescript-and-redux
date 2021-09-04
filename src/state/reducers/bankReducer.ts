const initialStste = 0;

interface DepositAction {
  type: "deposit";
  payload: number;
}

interface WithdrawAction {
  type: "withdraw";
  payload: number;
}

interface BankruptAction {
  type: "bankrupt";
}

type Action = DepositAction | WithdrawAction | BankruptAction;

const reducer = (state: number = initialStste, action: Action) => {
  switch (action.type) {
    case "deposit":
      return state + action.payload;
    case "withdraw":
      return state - action.payload;
    case "bankrupt":
      return 0;
  }
};

export default reducer;
