import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react-native';
import {AuthScreens} from './type';
import {Login} from '../../screens/Auth/Login/Login';

const AuthStack = createNativeStackNavigator();

const AuthNavigation = () => {
  return (
    <AuthStack.Navigator>
      <AuthStack.Screen name={AuthScreens.login} component={Login} />
    </AuthStack.Navigator>
  );
};

export {AuthNavigation};
