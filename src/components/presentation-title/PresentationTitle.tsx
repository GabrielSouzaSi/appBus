// COMPONENTS
import { View } from 'react-native';
import DefaultText from '../default-text/DefaultText';

// STYLES
import styles from './styles';

type PresentationTitleProps = {
  firstLine: string;
  secondLine: string;
  description: string;
  isRegister?: boolean;
};

export default function PresentationTitle({
  firstLine,
  secondLine,
  description,
  isRegister,
}: PresentationTitleProps) {
  const setContainerStyles = () => {
    if (isRegister)
      return {
        ...styles.container,
        paddingHorizontal: 0,
        paddingTop: 0,
        marginBottom: 30,
      };

    return styles.container;
  };

  const setFirstLineStyles = () => {
    if (isRegister)
      return {
        ...styles.firstLine,
        marginBottom: 14,
      };

    return styles.firstLine;
  };

  return (
    <View style={setContainerStyles()}>
      <View style={styles.floatingLine}></View>

      <DefaultText style={setFirstLineStyles()}>{firstLine}</DefaultText>

      {!isRegister && (
        <DefaultText style={styles.secondLine}>{secondLine}</DefaultText>
      )}

      <DefaultText style={styles.description}>{description}</DefaultText>
    </View>
  );
}
