// COMPONENTS
import { View, TouchableOpacity } from 'react-native';
import DefaultText from '../default-text';
import CategoryIcon from '../category-icon/CategoryIcon';

// TYPES
import CategoryTypes from '../../@types/categories-types';

// STYLES
import styles from './styles';

type CategoryEventsProps = {
  onNavigate: () => void;
  name: string;
  type: CategoryTypes;
};

export default function EventCategory({
  onNavigate,
  name,
  type,
}: CategoryEventsProps) {
  return (
    <TouchableOpacity style={styles.container} onPress={onNavigate}>
      <View style={styles.layout}>
        <CategoryIcon category={type} styles={styles.icon} />
        <DefaultText style={styles.title}>{name}</DefaultText>
      </View>
    </TouchableOpacity>
  );
}
