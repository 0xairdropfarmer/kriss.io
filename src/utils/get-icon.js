import { ICONS } from '../constants';

const getIcon = (name) => {
  let icon;

  switch (name) {
    case 'twitter':
      icon = ICONS.TWITTER;
      break;
    case 'github':
      icon = ICONS.GITHUB;
      break;
    case 'email':
      icon = ICONS.EMAIL;
      break;
  case 'medium':
      icon = ICONS.Medium;
      break;
    default:
      icon = {};
      break;
  }

  return icon;
};

export default getIcon;
