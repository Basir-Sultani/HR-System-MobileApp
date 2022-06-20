import { useState, useEffect } from 'react';
import * as React from 'react';

import { StyleSheet, View, Text, TextInput, Button } from 'react-native';
import { Picker } from "@react-native-picker/picker";

import { updateEmployeeFromApiAsync, getDepartmentsFromApiAsync } from '../services/Employees.service';

const EmployeeEditScreen = ({ navigation, route }) => {

    let Employee=route.params.Employee;

    const [name, setName] = useState(Employee.Name);
    const [Phone, setPhone] = useState(Employee.Phone);
    const [street, setStreet] = useState(Employee.Street);
    const [city, setCity] = useState(Employee.City);
    const [state, setState] = useState(Employee.State);
    const [zip, setZip] = useState(Employee.Zip);
    const [country, setCountry] = useState(Employee.Country);
   
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
            street, city, state, zip, country,
        }).then(response => {
            navigation.replace('Employees');
        });
    }

    return(
        <View style={{flex:1,padding:10, backgroundColor: '#595959'}}>
            <Text style={Styles.header}>Edit Employee Details</Text>
            <Text style={Styles.label}>NAME:</Text>
            <TextInput style={Styles.textInput} value={name} onChangeText={setName} />
            <Text style={Styles.label}>Phone:</Text>
            <TextInput style={Styles.textInput} value={Phone} onChangeText={setPhone} />
            <Text style={Styles.label}>Department:</Text>
            <Picker 
                style={{color: '#ffffff', 
                    backgroundColor: '#595959', 
                    borderWidth: 1,
                    borderColor: '#ffffff',
                    marginVertical: 5,
                    padding: 5,
                }}
                selectedValue={Department} 
                onValueChange={(v,i) => setDepartment(v)}
            >
                {renderEmployees()}
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



            <Button style={{marginTop: 15}} title="Save" onPress={submit} color="#941a1d" />
        </View>
    );
}

export default EmployeeEditScreen;

const Styles = StyleSheet.create({
    header: {
        backgroundColor: '#941a1d',
        color:'#ffffff',
        fontSize:16,
        borderColor: '#941a1d',
        padding: 5,
        textAlign: 'center'
    },
    contactTile: {
        padding: 10,
        backgroundColor: '#941a1d',
        borderBottomWidth: 1,
        borderColor: '#941a1d',
        borderRightWidth: 1,
        marginVertical: 5,
        marginHorizontal: 10,
    },
    contactText: {
        color:'white'
    },
    label: {
        color:'#ffffff',
        fontWeight: 'bold'
    },
    textInput: {
        borderWidth: 1,
        borderColor: '#ffffff',
        color: '#ffffff',
        marginVertical: 5,
        padding: 5
    }
});