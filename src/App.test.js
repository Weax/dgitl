import React from 'react';
import { render, fireEvent, waitForElement } from '@testing-library/react';
import App from './App';

const renderComponent = (props={}) => {
  // Render new instance in every test to prevent leaking state
  const component = render(<App {...props}/>);
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

  //may fail if API error
  it('should render result after button click', async () => {
    const { queryByTestId, getByText } = renderComponent();
    const input = queryByTestId(/input/i);
    fireEvent.change(input, { target: { value: '1' } });
    const btn = queryByTestId(/button/i);
    fireEvent.click(btn);
    await waitForElement(() => getByText('4.42'));
  });

});
