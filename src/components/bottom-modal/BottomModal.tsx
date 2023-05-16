import { ReactElement, useMemo, useState, useCallback } from 'react';

// COMPONENTS
import { Dimensions, View } from 'react-native';
import {
  BottomSheetModal,
  BottomSheetModalProvider,
  BottomSheetScrollView,
} from '@gorhom/bottom-sheet';

// STYLE
import styles from './styles';

type BottomModalProps = {
  children: ReactElement;
  modalRef: React.Ref<BottomSheetModal>;
  contentContainerStyle?: object;
};

export default function BottomModal({ children, modalRef }: BottomModalProps) {
  const { height, width } = Dimensions.get('window');

  const RB_HEIGHT = height - 55;

  const snapPoints = useMemo(() => [1, RB_HEIGHT], []);

  const [displayOverlay, setDisplayOverlay] = useState(-1);

  const handleSheetChanges = useCallback((index: number) => {
    setDisplayOverlay(index);
  }, []);

  return (
    <>
      {displayOverlay > 0 && (
        <View
          style={{
            width: width,
            height: height,
            ...styles.overlay,
          }}
        ></View>
      )}

      <BottomSheetModalProvider>
        <BottomSheetModal
          ref={modalRef}
          index={1}
          snapPoints={snapPoints}
          style={styles.sheetModal}
          onChange={handleSheetChanges}
        >
          <BottomSheetScrollView>{children}</BottomSheetScrollView>
        </BottomSheetModal>
      </BottomSheetModalProvider>
    </>
  );
}
