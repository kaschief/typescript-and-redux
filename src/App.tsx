import React from "react";
import "./App.css";
import { bindActionCreators } from "redux";
import { actionCreators, AppDispatch } from "./state";
import { useAppDispatch, useAppSelector } from "./state/hooks";

function App() {
  const dispatch: AppDispatch = useAppDispatch();

  const { depositMoney, widthdrawMoney, bankrupt } = bindActionCreators(
    actionCreators,
    dispatch
  );
  const amount = useAppSelector((state) => state.bank);

  return (
    <div className="App">
      <h1>{amount}</h1>
      <button onClick={() => depositMoney(1000)}>Deposit</button>
      <button onClick={() => widthdrawMoney(1000)}>Withdraw</button>
      <button onClick={() => bankrupt()}>Bankrupt</button>
    </div>
  );
}

export default App;
