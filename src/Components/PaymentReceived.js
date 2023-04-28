import React, { useState, useEffect } from "react";
import { Container, Table, Button } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPrint, faGift, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { useHistory } from 'react-router-dom';

function PaymentReceived({ products }) {
  const [cartItems, setCartItems] = useState([...products]);
  const [email, setEmail] = useState('');
  const history = useHistory();

  useEffect(() => {
    setCartItems([...products]);
  }, [products]);

  const handleSale = () => {
    history.push("/sales-summary");
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  return (
    <div className="payment-container">
      <h1 className="text-center pt-5 pb-5">Payment Received</h1>
      <Table>
        <div className="pt-5 col-lg-12 col-md-12 d-flex justify-content-between">
          <a className="col-md-6 printIcon" style={{ textDecoration: 'none' }}>
            Print
            <FontAwesomeIcon icon={faPrint} className="mr-1" />
          </a>
          <a className="col-md-6 giftIcon" style={{ textDecoration: 'none' }}>
            <FontAwesomeIcon icon={faGift} className="mr-1" />
            Gift Receipt
          </a>
        </div>
        <tbody>
          <tr className="col-12">
            <td className="border-bottom-0 pt-5 col-12">
              <form className="form-inline d-inline-flex col-12 justify-content-center">
                <div className="form-group mr-2">
                  <div className="input-group">
                    <input
                      type="email"
                      className="form-control ml-1 btnHeight"
                      id="Email Address2"
                      placeholder="Email Address"
                      value={email}
                      onChange={handleEmailChange}
                    />
                  </div>
                </div>
                <td className="px-4" />
                <div className="">
                  <button
                    type="submit"
                    className={`btn btn-primary ml-2 btnHeight ${email === '' ? 'btn-disabled' : ''}`}
                    disabled={email === ''}
                  >
                    Email Receipt
                  </button>
                </div>
              </form>
            </td>
          </tr>
        </tbody>
      </Table>
      <div className="checkout-summary" style={{ marginTop: "400px" }}>
        <div className="pay-details">
          <Button
            className="pay-button col-12 text-center btnHeight"
            variant="primary"
            block
            onClick={handleSale}
          >
            Complete Sale (ESC)
          </Button>
        </div>
      </div>
    </div>
  );
}

export default PaymentReceived;