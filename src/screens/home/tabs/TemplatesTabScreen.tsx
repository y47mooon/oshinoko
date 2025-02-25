import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function TemplatesTabScreen() {
  return (
    <View style={styles.container}>
      <Text>テンプレート</Text>
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