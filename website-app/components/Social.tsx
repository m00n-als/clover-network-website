import React, { useMemo } from 'react';
import cn from 'classnames';
import styles from '../styles/Social.module.scss';
import twitterIcon from '../public/twitter.svg';
import telegramIcon from '../public/telegram.svg';
import discordIcon from '../public/discordd.svg';
import mediumIcon from '../public/medium.svg';

export const iconsMap = {
  twitter: twitterIcon,
  telegram: telegramIcon,
  discord: discordIcon,
  medium: mediumIcon,
};

export type IconNamesType = keyof typeof iconsMap;

export const Social = ({
  className,
  items = [],
}: {
  className?: string;
  items?: {
    link: string;
    icon: IconNamesType;
  }[];
}) => {
  const data = useMemo(() => (
    items?.map(({ link, icon}) => {
      const IconComponent = iconsMap[icon];
      return (
        <li key={icon} className={styles.item}>
          <a
            className={styles.link}
            href={link}
            target="_blank"
          >
            <IconComponent />
          </a>
        </li>
      );
    })
  ), [items]);
  return data.length ? (
    <div className={cn(styles.social, className)}>
      <ul className={styles.list}>{data}</ul>
    </div>
  ) : null;
};

export default Social;
