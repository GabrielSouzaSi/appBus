import React from 'react';

// COMPONENTS
import { TouchableOpacity, View } from 'react-native';
import DefaultText from '../default-text';

// ICONS
import AccessibilityIcon from './icons/accessibility.svg';
import SnowflakeIcon from './icons/snowflake.svg';
import CloseIcon from './icons/close.svg';

// STYLES
import styles from './styles';

type BusInfoProps = {
  id: string;
  plate: string;
  isBus: boolean;
  hasAccessibility: boolean;
  hasAirConditioning: boolean;
  address: string;
  onClose: () => void;
};

/**
 * Renders the bus and bus stop information.
 */
export default function BusInfo({
  id,
  plate,
  isBus,
  hasAccessibility,
  hasAirConditioning,
  address,
  onClose,
}: BusInfoProps) {
  function handleBusPlate() {
    if (isBus)
      return (
        <DefaultText style={styles.mediumText}>
          Ônibus {id} • Placa {plate}
        </DefaultText>
      );

    return <DefaultText style={styles.mediumText}>Ponto {id}</DefaultText>;
  }
  return (
    <View style={styles.container}>
      <View style={styles.left}>
        {handleBusPlate()}

        {isBus && (
          <View style={styles.rowContainer}>
            {hasAccessibility && (
              <View style={styles.row}>
                <AccessibilityIcon style={{ marginRight: 5 }} />
                <DefaultText style={styles.smallText}>
                  Acessível PCD
                </DefaultText>
              </View>
            )}

            {hasAirConditioning && (
              <View style={styles.row}>
                <SnowflakeIcon style={{ marginRight: 5 }} />
                <DefaultText style={styles.smallText}>Climatizado</DefaultText>
              </View>
            )}
          </View>
        )}

        <DefaultText style={styles.address}>{address}</DefaultText>

        {isBus && (
          <DefaultText style={styles.smallText}>
            Atualizado há 1 minuto atrás.
          </DefaultText>
        )}

        {!isBus && hasAirConditioning && (
          <View style={styles.row}>
            <SnowflakeIcon style={{ marginRight: 5 }} />
            <DefaultText style={styles.smallText}>Climatizado</DefaultText>
          </View>
        )}
      </View>

      <TouchableOpacity style={styles.close} onPress={onClose}>
        <CloseIcon />
      </TouchableOpacity>
    </View>
  );
}
