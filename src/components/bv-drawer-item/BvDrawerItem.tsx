import { ReactNode } from 'react';
// COMPONENTS
import { TouchableOpacity, View } from 'react-native';
import DefaultText from '../default-text';

// ICONS
import BusIcon from './icons/bus-icon.svg';
import CalendarIcon from './icons/calendar-icon.svg';
import DoorOut from './icons/door-out.svg';
import LetterIcon from './icons/letter-icon.svg';
import MapIcon from './icons/map-icon.svg';

// STYLES
import styles from './styles';

type ItemProps = {
  icon: string;
  title: string;
  description?: string;
  style?: any;
  action: () => void;
};

type Icons = {
  [key: string]: ReactNode;
};

export default function BvDrawerItem({
  icon,
  title,
  description,
  style,
  action,
}: ItemProps) {
  function renderIcon(icon: keyof Icons) {
    const iconList: Icons = {
      bus: <BusIcon />,
      calendar: <CalendarIcon />,
      out: <DoorOut />,
      letter: <LetterIcon />,
      map: <MapIcon />,
    };

    if (iconList[icon]) return iconList[icon];

    return <></>;
  }

  return (
    <TouchableOpacity
      onPress={action}
      style={{ ...styles.container, ...style }}
    >
      <View style={styles.header}>
        {renderIcon(icon)}
        <DefaultText style={styles.title}>{title}</DefaultText>
      </View>
      <DefaultText style={styles.description}>{description}</DefaultText>
    </TouchableOpacity>
  );
}
