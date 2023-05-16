import { useRef, useEffect } from 'react';

// COMPONENTS
import { View } from 'react-native';
import ContentLoader, { Rect } from 'react-content-loader/native';
import DefaultText from '../../components/default-text';
import InputForm from '../../components/input-form';
import LineOption from '../../components/line-option';
import LineDetails from '../../components/line-details';
import RBSheet from 'react-native-raw-bottom-sheet';
import Header from '../../components/header';

// HOOKS
import useLines from './hooks/useLines';

// STYLES
import styles from './styles';
import { ScrollView } from 'react-native-gesture-handler';

type LinesProps = {
  navigation: any;
};

export default function Lines({ navigation }: LinesProps) {
  const refRBSheet = useRef<RBSheet>(null);

  const { linesList, isLoadingLines, onSearchLine } = useLines();

  const onSelectLine = () => {
    refRBSheet.current!.open();
  };

  function concatLineName(lineName: string) {
    if (lineName.length > 15) return lineName.slice(0, 15) + '...';
    return lineName;
  }

  function renderLineOptions() {
    if (isLoadingLines)
      return (
        <ContentLoader
          speed={2}
          width={310}
          height={226}
          viewBox="0 0 310 226"
          backgroundColor="#d4d1d1"
          foregroundColor="#e2dede"
        >
          <Rect x="0" y="0" rx="6" ry="6" width="310" height="66" />
          <Rect x="0" y="79" rx="6" ry="6" width="310" height="66" />
          <Rect x="0" y="158" rx="6" ry="6" width="310" height="66" />
        </ContentLoader>
      );

    return linesList.map((line) => (
      <LineOption
        title={concatLineName(line.description)}
        number={line.number}
        key={`line-option-${line.id}`}
        onSelectLine={onSelectLine}
      />
    ));
  }

  return (
    <View style={styles.container}>
      <Header title="Linhas" navigation={navigation} />

      <InputForm
        isSearch={true}
        placeholder="Qual é a sua linha?"
        onChange={(text: string) => onSearchLine(text)}
        containerStyle={styles.inputSearch}
      />

      <DefaultText style={styles.linesLabel}>Confira outras linhas</DefaultText>

      <ScrollView style={{ flex: 1 }}>{renderLineOptions()}</ScrollView>

      <LineDetails lineRef={refRBSheet} navigation={navigation} />
    </View>
  );
}
