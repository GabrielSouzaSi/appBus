import React from 'react';

// COMPONENTS
import { View } from 'react-native';
import { Marker } from 'react-native-maps';

// STYLES
import styles from './styles';

type BusStopProps = {
  isSelected: boolean;
};

export default function BusStopPoint({ isSelected }: BusStopProps) {
  return (
    <Marker
      onPress={() => {}}
      key={`bus-stop-marker`}
      coordinate={{
        latitude: 2.809105,
        longitude: -60.6769555,
      }}
    >
      <View style={{ ...styles.ring, borderWidth: isSelected ? 1 : 0 }}>
        <View style={styles.container}></View>
      </View>
    </Marker>
  );
}
