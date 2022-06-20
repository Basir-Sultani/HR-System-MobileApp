import { useState, useEffect } from 'react';
import * as React from 'react';
import { StyleSheet, View, Text, TouchableOpacity,Button,ScrollView  } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { getEmployeesFromApiAsync } from '../services/Employees.service';
import { inheritLeadingComments } from '@babel/types';

//const ContactsListScreen = (props) => {
const EmployeesListScreen = ({ navigation }) => {
    const [Employees, setEmployees] = useState([]);

    useEffect(() => {
        let isMounted = true;               // note mutable flag
        getEmployeesFromApiAsync().then(response => {
            setEmployees(response);
        });
    }, []);


    function renderContacts() {
        return Employees.map((d, i) => {
            return (
               <View key={d.Id} style={Styles.contactTile}>            
                    <View style={{width:'75%'}}>
                        <Text style={{color:'#fff'}}>Name: {d.Name}</Text>
                        <Text style={{color:'#fff'}}>Department: {d.Department.Name }</Text>
                        <Text style={{color:'#fff'}}>Phone: {d.Phone}</Text>
                    </View>
                    <View  style={{width:'25%'}}>
                        <Text style={Styles.EmployeeButton} onPress={() => navigation.navigate('EmployeeDetails', {Employee: d})}>DETAILS</Text>
                        <Text style={Styles.EmployeeButton} onPress={() => navigation.navigate('EmployeeEdit', {Employee: d})}>UPDATE</Text>    
                        <Text style={Styles.EmployeeButton} onPress={() => navigation.navigate('EmployeeDelete', {Employee: d})}>DELETE</Text>    
                    </View>
              </View>
            );
        })
    }

    return(      
        <View style={{maxHeight:'100%'}}>  
                 
            <TouchableOpacity style={Styles.addButton} onPress={() => navigation.navigate('EmployeeAdd', {})}>
                <Text style={{color:'#fff',textAlign:'center'}}>Add an Employee</Text>
            </TouchableOpacity>  
         
            <ScrollView style={{maxHeight:'100%',padding:5}}>    
                {renderContacts()}            
            </ScrollView>     
        </View>
    );
}

export default EmployeesListScreen;

const Styles = StyleSheet.create({
    header:{
        color:'#00a887',
        fontWeight:'bold',
        fontSize:18,
        textAlign: 'center',
        padding:10,
        minWidth:'100%'
    },
    contactTile: {
        flex:1,
        flexDirection:'row',
        padding: 2.5,
        backgroundColor: '#000000',
        borderBottomWidth: 1,
        borderColor: '#05876E',
        borderRightWidth: 1,
        // marginVertical: 5,
        marginHorizontal:2.5,
        backgroundColor: '#595959',
        borderColor: '#ffffff'
    },
    addButton: {
        padding: 10,
        backgroundColor: '#941a1d',
        marginVertical: 5,
        marginHorizontal: 5,
    },
    EmployeeButton:{
        backgroundColor:'#941a1d',
        margin: '3px',
        padding:'5px',
        color:'#ffffff',
        textAlign:"center",
        borderRadius: 5,
    }
    
});