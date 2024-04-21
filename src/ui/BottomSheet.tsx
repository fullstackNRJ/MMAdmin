import BottomSheetComponent, {BottomSheetView} from '@gorhom/bottom-sheet';
import React, {useCallback} from 'react';
import {StyleSheet} from 'react-native';

const BottomSheet = ({
  children,
  bottomSheetRef,
  snapPoints,
  handleSheetChanges,
  onClose,
  initialIndex = -1,
}) => {
  const memoizedHandleSheetChange = useCallback(handleSheetChanges, [
    handleSheetChanges,
  ]);
  return (
    <BottomSheetComponent
      ref={bottomSheetRef}
      index={initialIndex}
      snapPoints={snapPoints || [200, '40%']}
      enableDynamicSizing
      onChange={memoizedHandleSheetChange}
      onClose={onClose}>
      <BottomSheetView style={BottomSheetStyles.contentContainer}>
        {children}
      </BottomSheetView>
    </BottomSheetComponent>
  );
};

export default BottomSheet;

export const BottomSheetStyles = StyleSheet.create({
  contentContainer: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#eee',
    padding: 32,
  },
});
