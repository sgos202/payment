import React, { useState, useEffect } from "react";
import { Table, Button } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import "./Checkout.css";
import { useHistory } from 'react-router-dom';
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";

function Checkout({ products, updateCart }) {
  const [cartItems, setCartItems] = useState([...products]);
  const history = useHistory();

  useEffect(() => {
    setCartItems([...products]);
  }, [products]);

  const handleProductDelete = (productId) => {
    setCartItems((prevCartItems) => {
      const updatedItems = prevCartItems.filter(
        (item) => item.id !== productId
      );
      updateCart(updatedItems);
      return updatedItems;
    });
  };

  const handleQuantityChange = (id, quantity) => {
    const updatedItems = cartItems.map((item) => {
      if (item.id === id) {
        return {
          ...item,
          quantity: quantity,
        };
      }
      return item;
    });
    setCartItems(updatedItems);
    updateCart(updatedItems);
  };

  const totalItems = cartItems.reduce((acc, item) => {
    if (typeof item.quantity === "number") {
      return acc + item.quantity;
    } else {
      console.error(
        `Invalid quantity value ${item.quantity} for product ${item.id}`
      );
      return acc;
    }
  }, 0);

  const totalPrice = cartItems.reduce(
    (acc, item) =>
      acc +
      (parseFloat(item.price) || 0) * (item.quantity || 1), // set quantity and price to 1 and 0 if null
    0
  );

  const handleSale = () => {
    history.push("/sales-summary");
  };

  return (
    <div className="checkout-container">
      {cartItems.length === 0 ? (
        <p className="pt-5" style={{ textAlign: "center" }}>Your cart is empty <span>
          <FontAwesomeIcon icon={faShoppingCart} />
        </span></p>
      ) : (
        <>
          <Table>
            <tbody>
              {cartItems.map((item) => (
                <tr className="checkoutTr" key={item.id}>
                  <td style={{ width: "1%" }}>
                    <input
                      type="number"
                      min="1"
                      value={item.quantity}
                      onChange={(e) =>
                        handleQuantityChange(item.id, parseInt(e.target.value))
                      }
                      style={{
                        maxWidth: "60px",
                        paddingRight: "0px",
                        paddingLeft: "8px",
                        textAlign: "right",
                        border: "2px solid lightgray",
                        borderRadius: "3px",
                      }}
                    />
                  </td>
                  <td className="product-name" style={{ textAlign: "left", fontWeight: "bold" }}>
                    {item.name}
                  </td>
                  <td style={{ textAlign: "right" }}>
                    ${(item.price || 0) * item.quantity.toFixed(2)}
                  </td>
                  <td style={{ width: "1%" }}>
                    <Button
                      style={{ padding: "0 5px" }}
                      onClick={() => handleProductDelete(item.id)}
                    >
                      <FontAwesomeIcon icon={faTrash} />
                    </Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        </>)}
      <div className="checkout-summary" style={{ marginTop: "300px" }}>
        <div className="pay-details">
          <Button
            className="pay-button col-12 d-flex btnHeight"
            variant="primary"
            block
            onClick={handleSale}
          >
            Pay <span className="total-items">{totalItems} items</span>
            <span className="total-cost">${totalPrice.toFixed(2)}</span>
          </Button>
        </div>
      </div>
    </div>
  );
}

export default Checkout;
