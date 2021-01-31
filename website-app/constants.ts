import twitterIcon from "./public/twitter.svg";
import telegramIcon from "./public/telegram.svg";
import discordIcon from "./public/discordd.svg";
import mediumIcon from "./public/medium.svg";

const HEADER_MENU = [
  {
    link: 'https://github.com/clover-network/',
    label: 'Github',
  },
  {
    link: 'https://docs.clover.finance/',
    label: 'Docs',
  },
  {
    link: 'https://medium.com/projectclover/',
    label: 'Blog',
  },
  {
    link: 'https://discord.gg/z2egJBsBWx/',
    label: 'Discord',
  },
];

const SOCIAL_ICONS = {
  twitter: 'twitter',
  telegram: 'telegram',
  discord: 'discord',
  medium: 'medium',
};
const SOCIALS = [
  {
    link: 'https://twitter.com/clover_finance/',
    icon: SOCIAL_ICONS.twitter,
  },
  {
    link: 'https://t.me/clover_en/',
    icon: SOCIAL_ICONS.telegram,
  },
  {
    link: 'https://discord.gg/z2egJBsBWx/',
    icon: SOCIAL_ICONS.discord,
  },
  {
    link: 'https://medium.com/projectclover/',
    icon: SOCIAL_ICONS.medium,
  },
];

export { HEADER_MENU, SOCIAL_ICONS, SOCIALS };
