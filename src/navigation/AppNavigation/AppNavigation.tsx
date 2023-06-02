import {NavigationContainer} from '@react-navigation/native';
import React, {StatusBar} from 'react-native';
import {useAppSelector} from '../../store/hooks/useAppSelector';
import {selectUser} from '../../store/userSlice/selectors';
import {AuthNavigation} from '../AuthNavigation/AuthNavigation';
import {SafeAreaProvider} from 'react-native-safe-area-context';

const AppNavigation = () => {
  const {isAuthenticated} = useAppSelector(selectUser);
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <StatusBar />
        {isAuthenticated ? <></> : <AuthNavigation />}
      </NavigationContainer>
    </SafeAreaProvider>
  );
};

export default AppNavigation;
