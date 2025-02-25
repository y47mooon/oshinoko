import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '../screens/HomeScreen';
import SearchScreen from '../screens/SearchScreen';
import FavoriteScreen from '../screens/FavoriteScreen';
import ProfileScreen from '../screens/ProfileScreen';

const Tab = createBottomTabNavigator();

const TabNavigator = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="ホーム" component={HomeScreen} />
      <Tab.Screen name="検索" component={SearchScreen} />
      <Tab.Screen name="お気に入り" component={FavoriteScreen} />
      <Tab.Screen name="マイページ" component={ProfileScreen} />
    </Tab.Navigator>
  );
};

export default TabNavigator; 