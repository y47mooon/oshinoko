import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function LockScreensTabScreen() {
  return (
    <View style={styles.container}>
      <Text>ロック画面</Text>
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