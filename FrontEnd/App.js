import * as React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import EmployeesListScreen from './screens/EmployeesListScreen';
import EmployeeDetailsScreen from './screens/EmployeeDetailsScreen';
import EmployeeEditScreen from './screens/EmployeeEditScreen';
import EmployeeAddScreen from './screens/EmployeeAddScreen';
import EmployeeDeleteScreen from './screens/EmployeeDeleteScreen';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Employees" component={EmployeesListScreen} />
        <Stack.Screen name="EmployeeDetails" component={EmployeeDetailsScreen} />
        <Stack.Screen name="EmployeeEdit" component={EmployeeEditScreen} />
        <Stack.Screen name="EmployeeAdd" component={EmployeeAddScreen} />
        <Stack.Screen name="EmployeeDelete" component={EmployeeDeleteScreen} />

      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  
  },
});
