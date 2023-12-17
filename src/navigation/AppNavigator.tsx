import React from 'react';
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import HomeScreen from '../screens/HomeScreen/HomeScreen';
import SelectTeamScreen from '../screens/SelectTeamScreen/SelectTeamScreen';
import { NavigationConstants } from './NavigationConstants';
import { Provider } from 'react-redux';
import store from '../store';
import ScheduleScreen from '../screens/ScheduleScreen/ScheduleScreen';

const Stack = createStackNavigator();

const AppNavigator = () => {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Home">
          <Stack.Screen name={NavigationConstants.HOME} component={HomeScreen} />
          <Stack.Screen name={NavigationConstants.SELECT_TEAM} component={SelectTeamScreen} />
          <Stack.Screen name={NavigationConstants.SCHEDULE} component={ScheduleScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
};

export default AppNavigator;