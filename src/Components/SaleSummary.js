import React from "react";
import { Container, Table, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

function SaleSummary({ cartItems }) {
  const totalItems = cartItems.reduce((total, item) => total + item.quantity, 0);
  const totalPrice = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);

  return (
    <div className="p-3">
      <h2 className="pb-4">Sales Summary</h2>
      <Table className="table table-borderless table-hover">
        <tbody className="saleTable fw-bold">
          {cartItems.map((item, index) => (
            <tr className="productTr" key={item.id}>
              <td className="tdQuantity">{item.quantity}</td>
              <td>
                <span>{item.name}</span>
              </td>
              <td className="rightAligned">{(item.price * item.quantity).toFixed(2)}</td>
            </tr>
          ))}
          <div className="pt-4" />

        </tbody>
        
      </Table>
      <tr className="saleTotalTr fw-normal">
            <td className="text-right" style={{ letterSpacing: "2px" }}>
              <div className="totalTd">
              <b className="pr-2">SALE TOTAL</b> {totalItems} items
              </div>
            </td>
            <td className="text-right"></td>
            <td className="rightAligned">${totalPrice.toFixed(2)}</td>
          </tr>
      <div className="d-flex justify-content-end pt-4">
        <Link to="/">
          <Button className="btnHeight" variant="primary">
            Back
          </Button>
        </Link>
      </div>
    </div>
  );
}

export default SaleSummary;