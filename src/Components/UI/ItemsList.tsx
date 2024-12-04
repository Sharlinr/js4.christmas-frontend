import { ReactNode } from 'react';

type ItemsListProps = {
  children: ReactNode;
};

const ItemsList = ({ children }: ItemsListProps) => {
  return <ul className='items-list'>{children}</ul>;
};

export default ItemsList;
