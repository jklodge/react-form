import React from "react";
import { Table } from "react-bootstrap";
import { useStateValue } from "../store";

const LoanTableBL = () => {
  const [state] = useStateValue();
  if (state.tableBLObject) {
    return (
      <Table striped bordered hover size="sm">
        <thead>
          <tr>
            <th>Repayment date</th>
            <th>Principal</th>
            <th>Interest</th>
            <th>Total repayment</th>
          </tr>
        </thead>
        {state.tableBLObject.map((arr, index) => (
          <tbody key={index}>
            <tr>
              {Object.values(arr).map((item, index) => (
                <td key={index}>{item}</td>
              ))}
            </tr>
          </tbody>
        ))}
      </Table>
    );
  } else {
    return null;
  }
};
export default LoanTableBL;
