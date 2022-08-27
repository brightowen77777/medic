import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { StackNavigation } from './infrastructure/navigation/stacknav';
import { Home } from './infrastructure/screens/home';

export default function App() {
  
  return (
    // <NavigationContainer>
      
    //   <StackNavigation />
      
    // </NavigationContainer>
    <Home/>
    
  );
};

const styles = StyleSheet.create({

});
