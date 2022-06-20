import { useState, useEffect } from 'react';
import * as React from 'react';

import { StyleSheet, View, Text, TextInput, Button } from 'react-native';
import { Picker } from "@react-native-picker/picker";

import { addEmployeeFromApiAsync, getDepartmentsFromApiAsync } from '../services/Employees.service';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const EmployeeAddScreen = (props) => {
    let Employee = {Name:'',Phone:'',Department:'0', street:'', city:'', state:'', zip:'', country:''}
    const [name, setName] = useState(Employee.Name);
    const [phone, setPhone] = useState(Employee.Phone); 
     const [department, setDepartment] = useState(Employee.Department);
    
    const [departments, setDepartments] = useState([]);

    useEffect(() => { getDepartmentsFromApiAsync().then(response => {setDepartments(response); }); },[]);

    const [street, setStreet] = useState(Employee.street);
    const [city, setCity] = useState(Employee.city);
    const [state, setState] = useState(Employee.state);
    const [zip, setZip] = useState(Employee.zip);
    const [country, setCountry] = useState(Employee.country);

    function renderDepartments() {
        return departments.map((d, i) => { return (<Picker.Item key={d.Id} label={d.Name} value={d.Id} />); })
    }

    function submit() {
        Employee={ name, phone, department, street, city, state, zip, country};
        addEmployeeFromApiAsync(Employee)
        .then(response => { props.navigation.replace('Employees'); });
    }

    return(
        <View style={{flex:1,padding:10}}>
            <Text style={Styles.header}>Add An Employee</Text>

            <Text style={Styles.label}>NAME:</Text>
            <TextInput style={Styles.textInput} value={name} onChangeText={setName} />

            <Text style={Styles.label}>Phone:</Text>
            <TextInput style={Styles.textInput} value={phone} onChangeText={setPhone} />
            
            {/* <Text style={Styles.label}>Department:</Text>
            <TextInput style={Styles.textInput} value={department} onChangeText={setDepartment} /> */}

            <Text style={Styles.label}>Department:</Text>
            <Picker 
                selectedValue={department}
                onValueChange={(v,i) => setDepartment(v)}>{renderDepartments()}
            </Picker>


            <Text style={Styles.label}>Street:</Text>
            <TextInput style={Styles.textInput} value={street} onChangeText={setStreet} />

            <Text style={Styles.label}>City:</Text>
            <TextInput style={Styles.textInput} value={city} onChangeText={setCity} />

            <Text style={Styles.label}>State:</Text>
            <TextInput style={Styles.textInput} value={state} onChangeText={setState} />

            <Text style={Styles.label}>Zip:</Text>
            <TextInput style={Styles.textInput} value={zip} onChangeText={setZip} />

            <Text style={Styles.label}>Country:</Text>
            <TextInput style={Styles.textInput} value={country} onChangeText={setCountry} />


            <Button style={{marginTop: 15}} title="Save" onPress={submit} color="#00a887" />
        </View>
    );
}

export default EmployeeAddScreen;

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