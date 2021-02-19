import React from 'react';
import {SafeAreaView, ScrollView, StatusBar, Text} from 'react-native';
import Login from './src/screens/Login';

const App = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <Login />
    </>
  );
};

export default App;
