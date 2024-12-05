import React from 'react';

type PrimaryButtonProps = {
  onClick: () => void;
  children: React.ReactNode;
  disabled?: boolean;
};

const PrimaryButton = ({
  onClick,
  children,
  disabled = false,
}: PrimaryButtonProps) => {
  return (
    <button className='primary-button' onClick={onClick} disabled={disabled}>
      {children}
    </button>
  );
};

export default PrimaryButton;
