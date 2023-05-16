// COMPONENTS
import DefaultText from '../default-text';

// STYLE
import styles from './styles';

type ErrorMessageProps = {
  message: string;
  style?: object;
};

export default function ErrorMessage({ message, style }: ErrorMessageProps) {
  return (
    <DefaultText style={{ ...styles.message, ...style }}>{message}</DefaultText>
  );
}
