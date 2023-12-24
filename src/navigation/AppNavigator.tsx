import React from 'react';
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import HomeScreen from '../screens/HomeScreen/HomeScreen';
import SelectTeamScreen from '../screens/SelectTeamScreen/SelectTeamScreen';
import { NavigationConstants } from './NavigationConstants';
import { Provider } from 'react-redux';
import { persistor, store } from '../store';
import ScheduleScreen from '../screens/ScheduleScreen/ScheduleScreen';
import { PersistGate } from 'redux-persist/integration/react';
import SelectRoundScreen from '../screens/SelectRoundScreen/SelectRoundScreen';
import MatchListScreen from '../screens/MatchListScreen/MatchListScreen';

const Stack = createStackNavigator();

const AppNavigator = () => {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <NavigationContainer>
          <Stack.Navigator initialRouteName="Home">
            <Stack.Screen name={NavigationConstants.HOME} component={HomeScreen} />
            <Stack.Screen name={NavigationConstants.SELECT_TEAM} component={SelectTeamScreen} />
            <Stack.Screen name={NavigationConstants.SCHEDULE} component={ScheduleScreen} />
            <Stack.Screen name={NavigationConstants.SELECT_ROUND} component={SelectRoundScreen} />
            <Stack.Screen name={NavigationConstants.MATCH_LIST} component={MatchListScreen} />
          </Stack.Navigator>
        </NavigationContainer>
      </PersistGate>
    </Provider>
  );
};

export default AppNavigator;