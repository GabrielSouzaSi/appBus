// COMPONENTS
import { View, TouchableOpacity } from 'react-native';
import DefaultText from '../default-text/DefaultText';
import ActionButton from '../action-button';

// STYLES
import styles from './styles';

// TYPES
type RouteOptionProps = {
  /**
   * Overrides default container styles
   */
  styleContainer?: any;
  line: string;
  direction: string;
  navigateToSchedules: () => void;
};

export default function RouteOption({
  line,
  direction,
  styleContainer,
  navigateToSchedules,
}: RouteOptionProps) {
  return (
    <View style={{ ...styles.container, ...styleContainer }}>
      <DefaultText style={styles.title}>
        {line} - {direction}
      </DefaultText>

      <ActionButton onPress={() => {}} label="Ver rota no mapa" />

      <TouchableOpacity onPress={navigateToSchedules}>
        <DefaultText style={styles.hoursAction}>Ver horários</DefaultText>
      </TouchableOpacity>
    </View>
  );
}
