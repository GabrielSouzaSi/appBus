// COMPONENTS
import { View, TouchableOpacity } from 'react-native';
import DefaultText from '../default-text';

// ICONS
import BusIcon from './icons/bus.svg';
import LineIcon from './icons/line.svg';
import CalendarIcon from './icons/calendar.svg';

// STYLES
import styles from './styles';

// TYPES
type IconTypes = 'bus' | 'line' | 'event';

type FeatureOptionsProps = {
  title: string;
  description: string;
  icon: IconTypes;
  onPress: () => void;
};

export default function FeatureOptions({
  title,
  description,
  icon,
  onPress,
}: FeatureOptionsProps) {
  function renderIcons(iconKey: IconTypes) {
    const icons = {
      bus: <BusIcon style={styles.icon} />,
      line: <LineIcon style={styles.icon} />,
      event: <CalendarIcon style={styles.icon} />,
    };

    return icons[iconKey];
  }

  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      {renderIcons(icon)}

      <View style={styles.flex1}>
        <DefaultText style={styles.title}>{title}</DefaultText>
        <DefaultText style={styles.description}>{description}</DefaultText>
      </View>
    </TouchableOpacity>
  );
}
