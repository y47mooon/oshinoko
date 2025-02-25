/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/Ionicons';

// スクリーンのインポート
import HomeScreen from './src/screens/HomeScreen';
import SearchScreen from './src/screens/SearchScreen';
import FavoriteScreen from './src/screens/FavoriteScreen';
import ProfileScreen from './src/screens/ProfileScreen';

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <Tab.Navigator
          screenOptions={({ route }) => ({
            headerShown: false, // デフォルトでヘッダーを非表示
            tabBarIcon: ({ focused, color, size }) => {
              let iconName;
              switch (route.name) {
                case 'ホーム':
                  iconName = focused ? 'home' : 'home-outline';
                  break;
                case '検索':
                  iconName = focused ? 'search' : 'search-outline';
                  break;
                case 'お気に入り':
                  iconName = focused ? 'heart' : 'heart-outline';
                  break;
                case 'マイページ':
                  iconName = focused ? 'person' : 'person-outline';
                  break;
                default:
                  iconName = 'alert';
              }
              return <Icon name={iconName} size={size} color={color} />;
            },
            tabBarActiveTintColor: '#007AFF',
            tabBarInactiveTintColor: 'gray',
          })}
        >
          <Tab.Screen 
            name="ホーム" 
            component={HomeScreen}
            options={{
              tabBarLabel: 'ホーム',
            }}
          />
          <Tab.Screen 
            name="検索" 
            component={SearchScreen}
            options={{
              tabBarLabel: '検索',
            }}
          />
          <Tab.Screen 
            name="お気に入り" 
            component={FavoriteScreen}
            options={{
              tabBarLabel: 'お気に入り',
            }}
          />
          <Tab.Screen 
            name="マイページ" 
            component={ProfileScreen}
            options={{
              tabBarLabel: 'マイページ',
            }}
          />
        </Tab.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
}
