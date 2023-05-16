import { View, Dimensions, TouchableOpacity } from 'react-native';
import DefaultText from '../default-text/DefaultText';
import RBSheet from 'react-native-raw-bottom-sheet';
import RouteOption from '../route-option/RouteOption';

// ICONS
import BusIcon from './icons/bus-icon.svg';

// STYLES
import styles from './styles';
import { GREY, BLACK } from '../../styles/colors';

type LineDetailsProps = {
  lineRef: any;
  navigation: any;
};

export default function LineDetails({ lineRef, navigation }: LineDetailsProps) {
  const { height } = Dimensions.get('window');

  const RB_HEIGHT = height - 55;

  const customStyles = {
    wrapper: {
      backgroundColor: 'rgba(0, 0, 0, 0.6)',
    },
    container: {
      borderRadius: 15,
      backgroundColor: GREY,
    },
    draggableIcon: {
      backgroundColor: BLACK,
    },
  };

  const navigateToSchedules = () => {
    navigation.navigate('Schedule');
  };

  return (
    <RBSheet
      ref={lineRef}
      height={RB_HEIGHT}
      closeOnDragDown={true}
      customStyles={customStyles}
    >
      <View style={styles.header}>
        <BusIcon />
        <DefaultText style={styles.title}>104 - Nova União 1</DefaultText>
      </View>

      <View style={styles.body}>
        <RouteOption
          line="Linha 104"
          direction="Centro"
          navigateToSchedules={navigateToSchedules}
        />

        <RouteOption
          line="Linha 104"
          direction="Bairro"
          styleContainer={{ marginBottom: 35 }}
          navigateToSchedules={navigateToSchedules}
        />

        <TouchableOpacity>
          <DefaultText style={styles.otherLines}>Ver outras linhas</DefaultText>
        </TouchableOpacity>
      </View>
    </RBSheet>
  );
}
