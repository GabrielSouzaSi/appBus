import React, { useRef } from 'react';

// COMPONENTS
import { View, Dimensions } from 'react-native';
import MapView, { Polyline } from 'react-native-maps';
import SearchBox from '../../components/searchbox';
import RBSheet from 'react-native-raw-bottom-sheet';
import LineDetails from '../../components/line-details';
import BusInfo from '../../components/bus-info';
import BusIcon from '../../components/bus-icon';
import BusStopPoint from '../../components/bus-stop-point';

// STYLES
import styles from './styles';
import { GREEN100 } from '../../styles/colors';

type BusesProps = {
  navigation: any;
};

export default function Buses({ navigation }: BusesProps) {
  const refRBSheet = useRef<RBSheet>(null);

  const { width, height } = Dimensions.get('window');

  const ASPECT_RATIO = width / height;

  const LATITUDE_DELTA = 0.0922;

  const LONGITUDE_DELTA = LATITUDE_DELTA * ASPECT_RATIO;

  const REGION = {
    latitude: 2.8119873,
    longitude: -60.6765965,
    latitudeDelta: LATITUDE_DELTA,
    longitudeDelta: LONGITUDE_DELTA,
  };

  const onSelectLine = () => {
    refRBSheet.current!.open();
  };

  const clearLine = () => {};

  return (
    <View style={styles.container}>
      <MapView
        style={{
          width: Dimensions.get('window').width,
          height: Dimensions.get('window').height,
        }}
        region={REGION}
      >
        <BusIcon isSelected={true} />
        <BusStopPoint isSelected={true} />
        <Polyline
          coordinates={[
            { latitude: 2.8119873, longitude: -60.6765965 },
            { latitude: 2.8199326, longitude: -60.6744063 },
            { latitude: 2.8199326, longitude: -60.6744063 },
            { latitude: 2.8185449, longitude: -60.6753773 },
          ]}
          strokeColor={GREEN100}
          strokeWidth={4}
        />
      </MapView>

      <SearchBox onSelectLine={onSelectLine} />

      <LineDetails lineRef={refRBSheet} navigation={navigation} />

      <BusInfo
        id="3654"
        isBus={true}
        plate="XYZ3456"
        address="Rua Joao Moranga, 565"
        hasAccessibility={true}
        hasAirConditioning={true}
        onClose={clearLine}
      />
    </View>
  );
}
