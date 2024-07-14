import { ComponentProps, ReactNode } from 'react';

type BaseButtonProps = Omit<ComponentProps<'button'>, 'children'>;

export interface ButtonProps extends BaseButtonProps {
  children: ReactNode;
}

export const Button = ({ children, ...rest }: ButtonProps) => {
  return <button {...rest}>{children}</button>;
};
