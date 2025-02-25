import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function AllTabScreen() {
  return (
    <View style={styles.container}>
      <Text>全てのコンテンツ</Text>
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