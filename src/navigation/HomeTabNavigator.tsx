import React from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import AllTabScreen from '../screens/home/tabs/AllTabScreen';
import TemplatesTabScreen from '../screens/home/tabs/TemplatesTabScreen';
import WidgetsTabScreen from '../screens/home/tabs/WidgetsTabScreen';
import IconsTabScreen from '../screens/home/tabs/IconsTabScreen';
import WallpapersTabScreen from '../screens/home/tabs/WidgetsTabScreen';
import LiveWallpapersTabScreen from '../screens/home/tabs/LiveWallpapersTabScreen';

const Tab = createMaterialTopTabNavigator();

export function HomeTabNavigator() {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarScrollEnabled: true,
        tabBarStyle: { 
          elevation: 0, 
          shadowOpacity: 0,
          backgroundColor: '#fff',
        },
        tabBarIndicatorStyle: { 
          backgroundColor: '#007AFF',
        },
        tabBarLabelStyle: {
          fontSize: 14,
          fontWeight: '500',
        },
      }}
    >
      <Tab.Screen name="全て" component={AllTabScreen} />
      <Tab.Screen name="テンプレート" component={TemplatesTabScreen} />
      <Tab.Screen name="ウィジェット" component={WidgetsTabScreen} />
      <Tab.Screen name="アイコン" component={IconsTabScreen} />
      <Tab.Screen name="壁紙" component={WallpapersTabScreen} />
      <Tab.Screen name="ロック画面" component={LockScreensTabScreen} />
      <Tab.Screen name="動く壁紙" component={LiveWallpapersTabScreen} />
    </Tab.Navigator>
  );
} 