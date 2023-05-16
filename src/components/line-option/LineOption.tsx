// COMPONENTS
import { View, TouchableOpacity } from 'react-native';
import DefaultText from '../default-text';

// ICONS
import ArrowRight from './icons/arrow-right.svg';

// STYLES
import styles from './styles';

// TYPES
type LineOptionsProps = {
  number: string;
  title: string;
  onSelectLine: () => void;
};

export default function LineOption({
  number,
  title,
  onSelectLine,
}: LineOptionsProps) {
  return (
    <TouchableOpacity
      style={styles.container}
      onPress={onSelectLine}
      key={`line-option-${number}`}
    >
      <View style={styles.leftContainer}>
        <View style={styles.numberBox}>
          <DefaultText style={styles.numberText}>{number}</DefaultText>
        </View>

        <DefaultText style={styles.optionLabel}>{title}</DefaultText>
      </View>

      <ArrowRight style={{ maxWidth: 25 }} />
    </TouchableOpacity>
  );
}
