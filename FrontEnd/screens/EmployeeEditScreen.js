import { useState, useEffect } from 'react';
import * as React from 'react';

import { StyleSheet, View, Text, TextInput, Button } from 'react-native';
import { Picker } from "@react-native-picker/picker";

import { updateEmployeeFromApiAsync, getDepartmentsFromApiAsync } from '../services/Employees.service';

const EmployeeEditScreen = ({ navigation, route }) => {

    let Employee=route.params.Employee;

    const [name, setName] = useState(Employee.Name);
    const [Phone, setPhone] = useState(Employee.Phone);
   
     const [Department, setDepartment] = useState(Employee.Department.Id);
    const [Employees, setEmployees] = useState([]);
    

     //load department options from web service
     useEffect(() => {
        getDepartmentsFromApiAsync().then(response => {setEmployees(response); });
    },[]);

    function renderEmployees() {
        return Employees.map((d, i) => {
            return (<Picker.Item key={d.Id} label={d.Name} value={d.Id} />);
        })
    }

    function submit() {
        updateEmployeeFromApiAsync({
            id: Employee.Id,
            name,
            Phone,
            Department,
        }).then(response => {
            navigation.replace('Employees');
        });
    }

    return(
        <View style={{flex:1,padding:10}}>
            <Text style={Styles.header}>Edit a Employee</Text>
            <Text style={Styles.label}>NAME:</Text>
            <TextInput style={Styles.textInput} value={name} onChangeText={setName} />
            <Text style={Styles.label}>Phone:</Text>
            <TextInput style={Styles.textInput} value={Phone} onChangeText={setPhone} />
            <Text style={Styles.label}>Department:</Text>
            <Picker selectedValue={Department} onValueChange={(v,i) => setDepartment(v)}>{renderEmployees()}</Picker>
           

            <Button style={{marginTop: 15}} title="Save" onPress={submit} color="#00a887" />
        </View>
    );
}

export default EmployeeEditScreen;

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