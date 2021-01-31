import React from 'react';
import cn from 'classnames';
import styles from '../styles/Button.module.scss';
import Arrow from '../public/arrow.svg';

export const Button = ({
  children,
  className,
  href,
  type = 'button',
  disabled,
  ...restProps
}: {
  children?: React.ReactNode;
  type?: 'submit' | 'button' | 'reset';
  className?: string;
  href?: string;
  disabled?: boolean;
  id?: string;
  onClick?: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
}) => {
  const Component = href ? 'a' : 'button';
  return (
    <Component
      className={cn(className, styles.btn)}
      {...(href ? { href, target: '_blank' } : { type })}
      disabled={href ? undefined : disabled}
      tabIndex={disabled ? -1 : undefined}
      {...restProps}
    >
      {children}
      <Arrow className={styles.icon} />
    </Component>
  );
};

export default Button;
