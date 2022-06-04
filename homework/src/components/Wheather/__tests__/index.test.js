import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { Weather } from '../index';


test('should render weather', () => {
    const { getByText, getByLabelText } = render(<Weather />);

    expect(getByLabelText('Celsius')).not.toBeUndefined();
    expect(getByLabelText('Fahrenheit')).not.toBeUndefined();
    expect(getByLabelText('Kelvin')).not.toBeUndefined();
});

test('should add cities', () => {
    const { getByText, getByLabelText } = render(<Weather />);
    fireEvent.change(getByLabelText('Add city'), { target: { value: 'Baku' } })
    fireEvent.keyPress(getByLabelText('Add city'), {
        key: "Enter",
        code: "Enter",
        keyCode: 13,
        charCode: 13
    });
})