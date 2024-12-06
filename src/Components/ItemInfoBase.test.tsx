import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import ItemInfoBase from './ItemInfoBase';

describe('ItemInfoBase', () => {
  it('renders the product name', () => {
    render(<ItemInfoBase name='Testproduct' price={99} />);
    //name
    expect(screen.getByText('Testproduct')).toBeInTheDocument();
  });

  it('renders the product price', () => {
    render(<ItemInfoBase name='Testproduct' price={99} />);

    //price
    expect(screen.getByText('99 kr')).toBeInTheDocument();
  });
});
