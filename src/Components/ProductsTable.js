import React, { useState } from "react";
import { Container, Table, Button } from "react-bootstrap";

function ProductsTable({ addToSale }) {
  const [products] = useState([
    { id: 1, name: "Product 1", price: 10.0, sku: "134242" },
    { id: 2, name: "Product 2", price: 20.0, sku: "34242" },
    { id: 3, name: "Product 3", price: 30.0, sku: "2424" }
  ]);

  const handleRowClick = (productId) => {
    const productToAdd = products.find((product) => product.id === productId);
    addToSale(productToAdd);
  };

  return (
    <div className="p-3">
      <h2 className="pb-4">Products</h2>
      <Table hover>
        <thead className="productsThead">
          <tr>
            <th style={{ paddingLeft: "0", paddingBottom: "24px" }}>Product</th>
            <th style={{ paddingBottom: "24px" }} className="rightAligned">Price</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product) => (
            <tr key={product.id} onClick={() => handleRowClick(product.id)}>
              <td className="d-flex">
                <img
                  src="https://via.placeholder.com/45"
                  alt="product"
                  style={{
                    width: "40px",
                    height: "40px",
                    border: "1px solid grey"
                  }}
                />
                <div className="productSku">
                  <div>{product.name}</div>
                  <div style={{ fontSize: "10px" }}>{product.sku}</div>
                </div>
              </td>
              <td className="rightAligned">${product.price.toFixed(2)}</td>
            </tr>
          ))}
        </tbody>
        <tfoot>
          <tr className="rightAligned">
            <td colSpan="2" className="pt-3 pr-0">
              <Button className="btnHeight" variant="primary">Create New Product</Button>
            </td>
          </tr>
        </tfoot>
      </Table>
    </div>
  );
}

export default ProductsTable;