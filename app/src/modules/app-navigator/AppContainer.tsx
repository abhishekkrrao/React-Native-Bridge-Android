import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import AppPage from '../home-page/AppPage'
import LoginPage from '../login-page/LoginPage'
import React from 'react';
const Stack = createStackNavigator();

const AppContainer = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="homepage" component={AppPage} options = {
          {
            headerShown:false
          }
        } />
        <Stack.Screen name="loginpage" component={LoginPage}  options = {
          {
            headerShown:false
          }
        }/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}
export default AppContainer;
