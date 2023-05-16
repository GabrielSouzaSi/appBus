import React from 'react';

// COMPONENTS
import { View } from 'react-native';
import { Marker } from 'react-native-maps';

// STYLES
import styles from './styles';

// ICONS
import Bus from './icons/bus.svg';

type BusIconProps = {
  isSelected: boolean;
};

export default function BusIcon({ isSelected }: BusIconProps) {
  return (
    <Marker
      onPress={() => {}}
      key={`bus-marker`}
      coordinate={{
        latitude: 2.8119873,
        longitude: -60.6765965,
      }}
    >
      <View style={{ ...styles.ring, borderWidth: isSelected ? 1 : 0 }}>
        <View style={styles.container}>
          <Bus />
        </View>
      </View>
    </Marker>
  );
}
