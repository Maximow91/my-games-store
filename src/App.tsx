import React from 'react';
import {ImageBackground, SafeAreaView} from 'react-native';
import Toast from 'react-native-toast-message';
import {LoginScreen} from './screens/LoginScreen';

const App = () => {
  return (
    <ImageBackground
      style={{flex: 1}}
      resizeMode="cover"
      source={require('../assets/icons/background/bg.jpg')}>
      <SafeAreaView style={{flex: 1}}>
        <LoginScreen />
        <Toast />
      </SafeAreaView>
    </ImageBackground>
  );
};

export default App;
