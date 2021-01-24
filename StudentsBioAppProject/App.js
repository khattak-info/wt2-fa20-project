/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  StyleSheet,
  Text,
} from 'react-native';

import RootNavigator from './app/navigation/root-navigator'


const App = (props) => {
  return (
    <>
      <RootNavigator />
    </>
  );
};



export default App;
