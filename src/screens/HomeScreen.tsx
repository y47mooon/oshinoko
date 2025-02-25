import React from 'react';
import {
  View,
  ScrollView,
  Text,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import { homeStyles } from '../styles/screens/home';
import { SafeAreaView } from 'react-native-safe-area-context';
import { HomeTabNavigator } from '../navigation/HomeTabNavigator';

export default function HomeScreen() {
  return (
    <SafeAreaView style={homeStyles.container} edges={['top']}>
      {/* ホーム画面専用のヘッダー */}
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Logo</Text>
      </View>

      <ScrollView style={homeStyles.container}>
        {/* タブメニュー */}
        <ScrollView 
          horizontal 
          showsHorizontalScrollIndicator={false}
          style={homeStyles.tabMenu}
        >
          <TouchableOpacity style={[homeStyles.tab, homeStyles.activeTab]}>
            <Text style={homeStyles.tabText}>全て</Text>
          </TouchableOpacity>
          {/* ... 他のタブ ... */}
        </ScrollView>

        {/* タグフィルター */}
        <ScrollView 
          horizontal 
          showsHorizontalScrollIndicator={false}
          style={homeStyles.tagFilter}
        >
          <TouchableOpacity style={homeStyles.tag}>
            <Text style={homeStyles.tagText}>おしゃれ</Text>
          </TouchableOpacity>
          {/* ... 他のタグ ... */}
        </ScrollView>

        {/* コンテンツセクション */}
        <View style={homeStyles.section}>
          <View style={homeStyles.sectionHeader}>
            <Text style={homeStyles.sectionTitle}>人気のホーム画面</Text>
            <TouchableOpacity>
              <Text style={homeStyles.sectionMore}>もっとみる</Text>
            </TouchableOpacity>
          </View>
          {/* ここにコンテンツを追加 */}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    height: 20,  // 固定の高さを設定
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    marginTop: 3,  // 上部に少し余白を追加
  },
  headerTitle: {
    fontSize: 16,
    fontWeight: 'bold',
  },
});