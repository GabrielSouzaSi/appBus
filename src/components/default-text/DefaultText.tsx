import { ReactNode } from 'react';

// COMPONENTS
import { Text } from 'react-native';

// STYLES
import styles from './styles';

type DefaultTextProps = {
  /**
   * Text coming from outside
   */
  children: ReactNode;
  /**
   * Object containing the styles of the text
   */
  style?: any;
};

export default function DefaultText({ children, style }: DefaultTextProps) {
  return <Text style={{ ...styles.default, ...style }}>{children}</Text>;
}
