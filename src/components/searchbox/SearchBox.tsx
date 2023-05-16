import React from 'react';

// COMPONENTS
import { View, TouchableOpacity, TextInput } from 'react-native';

// ICONS
import MenuIcon from './icons/menu.svg';
import MagnifierIcon from './icons/magnifier.svg';

// STYLES
import styles from './styles';
import DefaultText from '../default-text';

type SearchBoxProps = {
  onSelectLine: () => void;
};

export default function SearchBox({ onSelectLine }: SearchBoxProps) {
  return (
    <View style={styles.container}>
      <View style={styles.menuContainer}>
        <TouchableOpacity style={styles.menu}>
          <MenuIcon />
        </TouchableOpacity>

        <View style={styles.searchInputContainer}>
          <TextInput
            placeholder="Qual é a sua linha?"
            style={styles.searchInput}
          />
          <MagnifierIcon />
        </View>
      </View>

      <View style={styles.resultsList}>
        <TouchableOpacity onPress={onSelectLine}>
          <DefaultText style={styles.resultsListItem}>
            104 - Nova União 1
          </DefaultText>
        </TouchableOpacity>

        <TouchableOpacity onPress={onSelectLine}>
          <DefaultText style={styles.resultsListItem}>
            104 - Nova União 1
          </DefaultText>
        </TouchableOpacity>

        <TouchableOpacity onPress={onSelectLine}>
          <DefaultText style={styles.resultsListItem}>
            104 - Nova União 1
          </DefaultText>
        </TouchableOpacity>
      </View>
    </View>
  );
}
