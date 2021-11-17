import React from 'react';

import { Container } from './styles';

export type IIconType =
  | 'icon-icon-artstation'
  | 'icon-icon-back-arrow'
  | 'icon-icon-badges'
  | 'icon-icon-behance'
  | 'icon-icon-big-arrow'
  | 'icon-icon-big-grid-view'
  | 'icon-icon-blog-posts'
  | 'icon-icon-camera'
  | 'icon-icon-check'
  | 'icon-icon-clock'
  | 'icon-icon-comment'
  | 'icon-icon-cross'
  | 'icon-icon-cross-thin'
  | 'icon-icon-delete'
  | 'icon-icon-deviantart'
  | 'icon-icon-discord'
  | 'icon-icon-dots'
  | 'icon-icon-dribbble'
  | 'icon-icon-earnings'
  | 'icon-icon-events'
  | 'icon-icon-events-daily'
  | 'icon-icon-events-monthly'
  | 'icon-icon-events-weekly'
  | 'icon-icon-facebook'
  | 'icon-icon-forum'
  | 'icon-icon-forums'
  | 'icon-icon-friend'
  | 'icon-icon-gif'
  | 'icon-icon-google'
  | 'icon-icon-grid'
  | 'icon-icon-group'
  | 'icon-icon-info'
  | 'icon-icon-instagram'
  | 'icon-icon-item'
  | 'icon-icon-join-group'
  | 'icon-icon-leave-group'
  | 'icon-icon-list-grid-view'
  | 'icon-icon-login'
  | 'icon-icon-logo-vikinger'
  | 'icon-icon-magnifying-glass'
  | 'icon-icon-marketplace'
  | 'icon-icon-members-1'
  | 'icon-icon-messages-1'
  | 'icon-icon-minus-small'
  | 'icon-icon-more-dots'
  | 'icon-icon-newsfeed'
  | 'icon-icon-notification'
  | 'icon-icon-overview'
  | 'icon-icon-patreon'
  | 'icon-icon-photos'
  | 'icon-icon-pin'
  | 'icon-icon-pinned'
  | 'icon-icon-play'
  | 'icon-icon-plus'
  | 'icon-icon-plus-small'
  | 'icon-icon-poll'
  | 'icon-icon-private'
  | 'icon-icon-profile'
  | 'icon-icon-public'
  | 'icon-icon-quests'
  | 'icon-icon-quote'
  | 'icon-icon-remove-friend'
  | 'icon-icon-return'
  | 'icon-icon-revenue'
  | 'icon-icon-send-message'
  | 'icon-icon-settings'
  | 'icon-icon-share'
  | 'icon-icon-shopping-bag'
  | 'icon-icon-small-arrow'
  | 'icon-icon-small-grid-view'
  | 'icon-icon-star'
  | 'icon-icon-status'
  | 'icon-icon-store'
  | 'icon-icon-streams'
  | 'icon-icon-tags'
  | 'icon-icon-thumbs-up'
  | 'icon-icon-ticket'
  | 'icon-icon-timeline'
  | 'icon-icon-trophy'
  | 'icon-icon-twitch'
  | 'icon-icon-twitter'
  | 'icon-icon-videos'
  | 'icon-icon-wallet'
  | 'icon-icon-youtube'
  | 'icon-icon-add-friend';

interface IIconProps {
  color?: string;
  size?: string;
  margin?: string;
  revert?: boolean;
  icon: IIconType;
  // todos os ícones: https://odindesignthemes.com/vikinger/logged-out-and-icons.html
}

const Icon: React.FC<IIconProps> = ({ icon, color, size, margin, revert }) => {
  return (
    <Container className={icon} icon={icon} color={color} size={size} margin={margin} revert={revert} />
  );
}

export default Icon;
