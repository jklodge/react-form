import React from "react";
import { Table } from "react-bootstrap";
import "./_CalculatorLayout.scss";
import StateContext from "../StateContext";
import { useStateValue } from "../store";
import LoanTableRCF from "../LoanTables/LoanTableRCF";
import LoanTableBL from "../LoanTables/LoanTableBL";
import getUKDate from "../shared/GetUKDate";

const CalculatorLayout = () => {
  const [state, setState] = React.useState({
    amount: 500,
    duration: 0,
    interest: 0
  });

  const [input, dispatch] = useStateValue({
    amount: 500,
    duration: 0,
    interest: 0
  });

  const handleChange = e => {
    const value = parseInt(e.target.value);
    setState({
      ...state,
      [e.target.name]: value
    });
    if (state) {
      dispatch({
        type: "ADD_INPUT",
        input: state
      });
    }
  };

  const newTableObject = [];
  const getRCFTableObject = () => {
    for (let i = 0; i < state.duration; i++) {
      const principle = Math.round(state.amount / state.duration);
      const interestPercent = state.interest / 100;
      const interestAmount = Math.round(
        (state.amount - principle * i) * interestPercent
      );
      const totalRepayment = Math.round(principle + interestAmount);
      if (newTableObject.length < state.duration) {
        newTableObject.push({
          date: i === 0 ? getUKDate(0) : getUKDate(i),
          principle,
          interestAmount,
          totalRepayment
        });
      }
      dispatch({
        type: "ADD_RCF_TABLE",
        tableRCFObject: newTableObject
      });
    }
  };

  const getBLTableObject = () => {
    for (let i = 0; i < state.duration; i++) {
      const principle = Math.round(state.amount / state.duration);
      const upfrontFee = state.amount * 0.1;
      const interestPercent = state.interest / 100;
      let interestAmount = 0;
      if (i === 0) {
        interestAmount = Math.round(
          (state.amount - principle * i) * interestPercent + upfrontFee
        );
      } else {
        interestAmount = Math.round(
          (state.amount - principle * i) * interestPercent
        );
      }
      const totalRepayment = Math.round(principle + interestAmount);
      if (newTableObject.length < state.duration) {
        newTableObject.push({
          date: i === 0 ? getUKDate(0) : getUKDate(i),
          principle,
          interestAmount,
          totalRepayment
        });
      }
      dispatch({
        type: "ADD_BL_TABLE",
        tableBLObject: newTableObject
      });
    }
  };

  return (
    <StateContext.Consumer>
      {input => (
        <div className="calc-layout">
          <h1>Your Loan</h1>
          <div className="calc-inputs">
            <Table striped bordered hover size="sm">
              <tbody>
                <tr>
                  <td>Amount requested</td>
                  <td>
                    <input
                      type="number"
                      name="amount"
                      placeholder={10000}
                      value={input.amount}
                      onChange={handleChange}
                      max={200000}
                      min={1000}
                    />
                  </td>
                  <td>(in £)</td>
                </tr>
                <tr>
                  <td>Duration</td>
                  <td>
                    <input
                      type="number"
                      name="duration"
                      placeholder={4}
                      value={input.duration}
                      onChange={handleChange}
                      maxLength="5"
                      min={1}
                      max={60}
                    />
                  </td>
                  <td>(in months)</td>
                </tr>
              </tbody>
            </Table>
          </div>
          <div className="calc-container">
            <div className="table-container">
              <div className="rcf-calc">
                <div className="rcf-interest">
                  Interest rate
                  <input
                    type="number"
                    name="interest"
                    placeholder={3}
                    value={input.interest}
                    onChange={handleChange}
                    max={15}
                  />
                  (in %)
                </div>
                <div className="calculate-button">
                  <button
                    onClick={getRCFTableObject}
                    disabled={!state.interest || !state.duration}
                  >
                    Calculate
                  </button>
                </div>
                <LoanTableRCF />
              </div>

              <div className="bl-calc">
                <div className="bl-interest">
                  Interest rate
                  <input
                    type="number"
                    name="interest"
                    placeholder={3}
                    value={input.interest}
                    onChange={handleChange}
                    min={0}
                  />
                  (in %)
                </div>
                <div className="calculate-button">
                  <button
                    onClick={getBLTableObject}
                    disabled={!state.interest || !state.duration}
                  >
                    Calculate
                  </button>
                </div>
                <LoanTableBL />
              </div>
            </div>
          </div>
        </div>
      )}
    </StateContext.Consumer>
  );
};
export default CalculatorLayout;
