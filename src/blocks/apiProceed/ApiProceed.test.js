import React from 'react';
import { render, cleanup, fireEvent, waitForElement } from '@testing-library/react';
import ApiProceed from './ApiProceed';

const renderComponent = (props={}) => {
  // Render new instance in every test to prevent leaking state
  const component = render(<ApiProceed {...props}/>);
  return component;
}

describe('ApiProceed component', () => {

  it('renders single input', () => {
    renderComponent();
    const inputs = document.getElementsByTagName('input');
    expect(inputs.length).toBe(1);
  });

  it("input should not have more than 10 chars", async () => {
    const { queryByTestId } = renderComponent();
    const input = queryByTestId(/input/i);
    input.value = "0123456789"; //set to maximum chars
    fireEvent.keyDown(input, { key: 'a' }); //type more
    expect(input.maxLength).toBe(10);
    expect(input.value).toHaveLength(10);
  });

  it('renders some button', () => {
    const { queryByTestId } = renderComponent();
    const btn = queryByTestId(/button/i);
    expect(btn).toBeInTheDocument();
  });

  it('button ill be disabled for invalid input values', () => {
    const { queryByTestId } = renderComponent();
    const btn = queryByTestId(/button/i);
    const input = queryByTestId(/input/i);
    fireEvent.change(input, { target: { value: '0123456789abc' } });
    expect(btn).toBeDisabled();
    fireEvent.change(input, { target: { value: '' } });
    expect(btn).toBeDisabled();
  });

  it('should render any result text in modal', async () => {    
    const { getByText } = renderComponent({ result: 55 });  
    await waitForElement(() => getByText('55'));
  });

});
