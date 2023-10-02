import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import AddAssignee from './add-assignee';

describe('<AddAssignee />', () => {
  test('it should mount', () => {
    render(<AddAssignee />);
    
    const AddAssignee = screen.getByTestId('AddAssignee');

    expect(AddAssignee).toBeInTheDocument();
  });
});