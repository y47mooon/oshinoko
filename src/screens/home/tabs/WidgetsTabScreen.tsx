import React from 'react';
import { View, Text, StyleSheet, NativeModules, Button } from 'react-native';

const { WidgetModule } = NativeModules;

export default function WidgetsTabScreen() {
  const updateWidget = () => {
    WidgetModule.updateWidget(
      "推しの子",  // title
      0.8,        // progress
      "更新完了"   // status
    );
  };

  return (
    <View style={styles.container}>
      <Text>ウィジェット</Text>
      <Button 
        title="ウィジェットを更新" 
        onPress={updateWidget}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
}); 