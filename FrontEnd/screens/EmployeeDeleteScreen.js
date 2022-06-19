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
        <View style={{flex:1,padding:10}}>
            <Text style={Styles.header}>Delete an Employee</Text>
            <Text style={Styles.label}>ID: {Employee.Id}</Text>
            <Text style={Styles.label}>NAME: {Employee.Name}</Text>
            <Text style={Styles.label}>Phone: {Employee.Phone}</Text>
            <Text style={Styles.label}>Department: {Employee.Department.Name}</Text>
            <Button style={{marginTop: 15}} title="Delete" onPress={submit} color="#00a887" />
        </View>
    );
}

export default EmployeeDeleteScreen;

const Styles = StyleSheet.create({
    header: {
        borderBottomWidth:1,
        color:'#00a887',
        fontWeight:'bold',
        fontSize:18,
        borderColor: '#00a887',
        marginBottom: 15
    },
    contactTile: {
        padding: 10,
        backgroundColor: '#00a887',
        borderBottomWidth: 1,
        borderColor: '#05876E',
        borderRightWidth: 1,
        marginVertical: 5,
        marginHorizontal: 10,
    },
    contactText: {
        color:'white'
    },
    label: {
        color:'#00a887',
        fontWeight: 'bold'
    },
    textInput: {
        borderWidth: 1,
        borderColor: '#00a887',
        marginVertical: 5,
        padding: 5
    }
});