import React from 'react';
import {ApplicationProvider, Icon, IconRegistry} from '@ui-kitten/components';
import {EvaIconsPack} from '@ui-kitten/eva-icons';
import * as eva from '@eva-design/eva';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

// screens
import Home from './src/screens/Home';
import SignIn from './src/screens/Signin';
import Profile from './src/screens/Profile';

const Stack = createNativeStackNavigator();
const BackIcon = props => (
  <Icon
    {...props}
    name="arrow-back"
    style={{
      height: 25,
      width: 35,
    }}
    fill="#000000"
  />
);
const SearchIcon = props => (
  <Icon
    {...props}
    name="search"
    style={{
      height: 25,
      width: 35,
    }}
    fill="#000000"
  />
);

export default () => (
  <>
    <IconRegistry icons={EvaIconsPack} />
    <ApplicationProvider {...eva} theme={eva.light}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="SignIn"
            component={SignIn}
            options={{
              headerLeft: props => <BackIcon {...props} />,
              headerTitleAlign: 'center',
              title: 'Sign in',
            }}
          />
          <Stack.Screen
            name="Home"
            component={Home}
            options={{
              headerLeft: props => <BackIcon {...props} />,
              headerRight: props => <SearchIcon {...props} />,
              headerTitleAlign: 'center',
              title: 'Doctor Details',
            }}
          />
          <Stack.Screen
            name="Profile"
            component={Profile}
            options={{
              headerLeft: props => <BackIcon {...props} />,
              headerTitleAlign: 'center',
              title: 'Profile Details',
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </ApplicationProvider>
  </>
);
