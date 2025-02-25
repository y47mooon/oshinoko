import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function LiveWallpapersTabScreen() {
  return (
    <View style={styles.container}>
      <Text>動く壁紙</Text>
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