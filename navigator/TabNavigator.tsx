
import React, { useLayoutEffect } from 'react'
import { View, Text } from 'react-native'

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
    <Tab.Navigator>
      <Tab.Screen name='Customers' component={CustomersScreen} />
      <Tab.Screen name='Orders' component={OrdersScreen} />
    </Tab.Navigator>
  )
}

export default TabNavigator