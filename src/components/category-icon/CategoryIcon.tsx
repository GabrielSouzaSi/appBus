// ICONS
import MasksIcon from './icons/masks.svg';
import SportIcon from './icons/sports.svg';
import EducationIcon from './icons/education.svg';
import HealthIcon from './icons/health.svg';
import SocialIcon from './icons/social.svg';

// TYPES
import CategoryTypes from '../../@types/categories-types';

type CategoryIconProp = {
  category: CategoryTypes;
  styles: object;
};

export default function CategoryIcon({ category, styles }: CategoryIconProp) {
  if (category === CategoryTypes.EDUCATION)
    return <EducationIcon style={styles} />;
  if (category === CategoryTypes.HEALTH) return <HealthIcon style={styles} />;
  if (category === CategoryTypes.SOCIAL) return <SocialIcon style={styles} />;
  if (category === CategoryTypes.SPORT) return <SportIcon style={styles} />;
  return <MasksIcon />;
}
