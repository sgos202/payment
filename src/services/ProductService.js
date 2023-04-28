async function fetchProducts() {
  const response = await fetch('https://otx0e1z2lg.execute-api.us-west-2.amazonaws.com/products');
  const data = await response.json();
  return data;
}

async function createProduct(product) {
  const response = await fetch('https://otx0e1z2lg.execute-api.us-west-2.amazonaws.com/products', {
    method: 'POST',
    body: JSON.stringify(product),
    headers: {
      'Content-Type': 'application/json'
    }
  });
  const data = await response.json();
  return data;
}

async function createSale(sale) {
  const response = await fetch('https://otx0e1z2lg.execute-api.us-west-2.amazonaws.com/sales', {
    method: 'POST',
    body: JSON.stringify(sale),
    headers: {
      'Content-Type': 'application/json'
    }
  });
  const data = await response.json();
  return data;
}