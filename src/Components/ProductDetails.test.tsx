import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import ProductsDetails from './ProductsDetails';
import { IProduct } from '../Models/IProduct';

describe('ProductsDetails', () => {
  const mockProduct: IProduct = {
    id: 1,
    name: 'Elljusstake',
    price: 599,
    description:
      'Elljustake Luciakör med fem ljus. Perfekt för att skapa julstämning i fönstret.',
    stock: 12,
    image: '/images/elljusstake.jpg',
    quantity: 1,
  };

  it('should render product name', () => {
    render(<ProductsDetails product={mockProduct} />);

    expect(screen.getByText(/Elljusstake/i)).toBeInTheDocument();
  });

  it('should render product price', () => {
    render(<ProductsDetails product={mockProduct} />);

    expect(screen.getByText('Price: 599 kr')).toBeInTheDocument();
  });

  it('should render product description', () => {
    render(<ProductsDetails product={mockProduct} />);

    expect(
      screen.getByText(/Elljustake Luciakör med fem ljus/i)
    ).toBeInTheDocument();
  });

  it('should render product stock', () => {
    render(<ProductsDetails product={mockProduct} />);

    expect(screen.getByText('Saldo: 12')).toBeInTheDocument();
  });

  it('should render product image', () => {
    render(<ProductsDetails product={mockProduct} />);

    const imgElement = screen.getByAltText(/Elljusstake/i);
    expect(imgElement).toHaveAttribute(
      'src',
      'http://localhost:3000/images/elljusstake.jpg'
    );
  });

  it('should not render image if image unavailable', () => {
    const mockProductWithoutImage: IProduct = {
      ...mockProduct,
      image: '', // If no img
    };
    render(<ProductsDetails product={mockProductWithoutImage} />);

    const imgElement = screen.queryByAltText(/Elljusstake/i);
    expect(imgElement).toBeNull();
  });
});
