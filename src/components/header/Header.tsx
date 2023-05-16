import { ReactNode } from 'react';
import { View, TouchableOpacity } from 'react-native';
import DefaultText from '../default-text';

// ICONS
import ArrowLeft from './icons/arrow-left.svg';

// STYLES
import styles, { WHITE_COLOR, GREEN_COLOR, GREY300_COLOR } from './styles';

type HeaderProps = {
  navigation: any;
  title?: string;
  useBorder?: boolean;
  useWhite?: boolean;
  children?: ReactNode;
};

export default function Header({
  navigation,
  title,
  useBorder,
  children,
  useWhite,
}: HeaderProps) {
  const goBack = () => {
    navigation.goBack();
  };

  function renderHeaderStyle() {
    if (useBorder)
      return {
        ...styles.header,
        ...styles.headerBorder,
      };
    return styles.header;
  }

  function colorIcon(): any {
    if (useWhite) return { color: WHITE_COLOR };
    return { color: GREEN_COLOR };
  }

  function colorBack(): any {
    if (useWhite) return { color: WHITE_COLOR };
    return { color: GREY300_COLOR };
  }

  return (
    <View style={renderHeaderStyle()}>
      <TouchableOpacity style={styles.backButton} onPress={goBack}>
        <ArrowLeft style={colorIcon()} />
        <DefaultText style={{ ...styles.backText, ...colorBack() }}>
          Voltar
        </DefaultText>
      </TouchableOpacity>

      <View style={styles.right}>
        {children}
        <DefaultText style={styles.title}>{title}</DefaultText>
      </View>
    </View>
  );
}
