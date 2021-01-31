import React, { useMemo } from 'react';
import cn from 'classnames';
import Social from './Social';
import styles from '../styles/HeaderNav.module.scss';
import { SOCIALS } from '../constants';

export const HeaderNav = ({
  className,
  menu = [],
  active = false,
}: {
  className?: string;
  menu?: {
    link: string;
    label: string;
  }[];
  active?: boolean;
}) => {
  const items = useMemo(() => (
    menu?.map(({ link, label}) => (
      <li key={link} className={styles.item}>
        <a
          className={styles.link}
          href={link}
          target="_blank"
        >
          {label}
        </a>
      </li>
    ))
  ), [menu]);
  return (
    <nav
      className={cn(styles.nav, className, {
        [`${styles.navActive}`]: active,
      })}
    >
      <div className={styles.container}>
        {!!items.length && (
          <ul className={styles.list}>{items}</ul>
        )}
        <Social
          className={styles.social}
          items={SOCIALS}
        />
      </div>
      <div className={styles.footer}>
        &copy;2020&nbsp;CloverProject. All Rights Reserved.
      </div>
    </nav>
  );
};

export default HeaderNav;
