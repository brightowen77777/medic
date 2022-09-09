import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { StackNavigation } from './infrastructure/navigation/stacknav';
import {Service} from './infrastructure/screens/service'

export default function App() {
  
  return (
    <Service/>
     //<NavigationContainer>
      
      // <StackNavigation />
      
    // </NavigationContainer>
    
    
  );
};

const styles = StyleSheet.create({

});
