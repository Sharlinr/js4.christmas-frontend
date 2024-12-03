import { ReactNode } from 'react';

type ItemsListProps = {
  children: ReactNode;
};

const ItemsList = ({ children }: ItemsListProps) => {
  return <ul>{children}</ul>;
};

export default ItemsList;
