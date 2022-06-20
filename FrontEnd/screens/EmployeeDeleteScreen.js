import { useState, useEffect } from 'react';
import * as React from 'react';

import { StyleSheet, View, Text, TextInput, Button } from 'react-native';
import { deleteContactFromApiAsync } from '../services/Employees.service';
import { Alert } from 'react-native-web';


const EmployeeDeleteScreen = ({ navigation, route }) => {
    
    let Employee=route.params.Employee;
    console.log("Employee.id="+Employee.Id);

    function submit() {
     
        deleteContactFromApiAsync(Employee.Id)
        .then(response => {
            console.log(response);
           
            navigation.replace('Employees');
        });
    }

    return(
        <View style={{flex:1,padding:10, backgroundColor: '#595959',}}>
            <Text style={Styles.header}>Delete Employee</Text>
            <Text style={Styles.label}>ID: {Employee.Id}</Text>
            <Text style={Styles.label}>NAME: {Employee.Name}</Text>
            <Text style={Styles.label}>Phone: {Employee.Phone}</Text>
            <Text style={Styles.label}>Department: {Employee.Department.Name}</Text>
            <Text style={Styles.label}>Street: {Employee.Street}</Text>
            <Text style={Styles.label}>City: {Employee.City}</Text>
            <Text style={Styles.label}>State: {Employee.State}</Text>
            <Text style={Styles.label}>Zip: {Employee.Zip}</Text>
            <Text style={Styles.label}>Country: {Employee.Country}</Text>

            <Button style={{}} title="Delete" onPress={submit} color="#941a1d" />
        </View>
    );
}

export default EmployeeDeleteScreen;

const Styles = StyleSheet.create({
    header: {
        backgroundColor: '#941a1d',
        color:'#ffffff',
        fontSize:16,
        borderColor: '#941a1d',
        padding: 5,
        textAlign: 'center'
    },
    label: {
        color:'#ffffff',
        fontWeight: 'bold',
        margin: 8,
    },
    textInput: {
        borderWidth: 1,
        borderColor: '#ffffff',
        marginVertical: 5,
        padding: 5
    }
});