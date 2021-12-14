import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import { SafeAreaView} from 'react-native';
import Routes from './src/Routes';

export default function App() {
  return (    
    
      <SafeAreaView style={{flex: 1, backgroundColor: '#f5f5f5', marginTop: 20 }}>
        <NavigationContainer>
        <Routes/>
        </NavigationContainer>
       
      </SafeAreaView>    
  );
}


