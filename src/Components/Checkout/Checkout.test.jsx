import React from 'react';
import { mount } from 'enzyme';
import { MemoryRouter } from 'react-router-dom';
import Checkout from './Checkout';
import Enzyme from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';

Enzyme.configure({ adapter: new Adapter() });

describe('Checkout', () => {
  const products = [
    { id: 1, name: 'Product 1', price: '10.00', quantity: 2 },
    { id: 2, name: 'Product 2', price: '20.00', quantity: 1 }
  ];

  it('should render a table with the correct number of rows', () => {
    const wrapper = mount(
      <MemoryRouter>
        <Checkout products={products} />
      </MemoryRouter>
    );

    expect(wrapper.find('tr')).toHaveLength(2);
  });

  it('calculates the total price correctly', () => {
    const wrapper = mount(
      <MemoryRouter>
        <Checkout products={products} />
      </MemoryRouter>
    );
  
    const totalPrice = wrapper.find('.total-cost');
    expect(totalPrice.exists()).toBe(true);
    const expectedTotalPrice = '$40.00';
    const actualTotalPrice = totalPrice.text();
    expect(actualTotalPrice).toEqual(expectedTotalPrice);
  });

  it('displays the correct product name for each row', () => {
    const wrapper = mount(
      <MemoryRouter>
        <Checkout products={products} />
      </MemoryRouter>
    );
  
    const productNameCells = wrapper.find('td.product-name');
    expect(productNameCells.at(0).text()).toEqual('Product 1');
    expect(productNameCells.at(1).text()).toEqual('Product 2');
  });

  it('displays the correct total quantity of products', () => {
    const wrapper = mount(
      <MemoryRouter>
        <Checkout products={products} />
      </MemoryRouter>
    );
  
    const totalQuantityCell = wrapper.find('.total-items');
    expect(totalQuantityCell.exists()).toBe(true);
    const expectedTotalQuantity = '3 items';
    const actualTotalQuantity = totalQuantityCell.text();
    expect(actualTotalQuantity).toEqual(expectedTotalQuantity);
  });
});