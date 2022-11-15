
import { Icon } from '@rneui/themed'
import { View, Text } from 'react-native'
import React, { useLayoutEffect } from 'react'

import { useNavigation } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

import OrdersScreen from '../screens/OrdersScreen'
import CustomersScreen from '../screens/CustomersScreen'

export type TabStackParamList = {
  Customers: undefined;
  Orders: undefined;
}

const Tab = createBottomTabNavigator<TabStackParamList>()

const TabNavigator = () => {
  const navigation = useNavigation()

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    })
  })

  return (
    <Tab.Navigator screenOptions={({route}) => ({
      tabBarActiveTintColor: '#59c1cc',
      tabBarInactiveTintColor: 'gray'
    })}>
      <Tab.Screen name='Customers' component={CustomersScreen} />
      <Tab.Screen name='Orders' component={OrdersScreen} />
    </Tab.Navigator>
  )
}

export default TabNavigator