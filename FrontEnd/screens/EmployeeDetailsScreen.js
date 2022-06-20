import React  from 'react';
import { StyleSheet, View, Text } from 'react-native';

const EmployeeDetailsScreen = ({ navigation, route }) => {
    let Employee = route.params.Employee;

    return(
        <View style={{flex:1,padding:10}}>
            <Text style={Styles.header}>Employee</Text>
            <Text style={Styles.label}>Id: {Employee.Id}</Text>
            <Text style={Styles.label}>NAME: {Employee.Name}</Text>
            <Text style={Styles.label}>Phone: {Employee.Phone}</Text>
            <Text style={Styles.label}>Department: {Employee.Department.Name}</Text>
            <Text style={Styles.label}>Street: {Employee.Street}</Text>          
            <Text style={Styles.label}>City: {Employee.City}</Text>          
            <Text style={Styles.label}>State: {Employee.State}</Text>          
            <Text style={Styles.label}>Zip: {Employee.Zip}</Text>          
            <Text style={Styles.label}>Country: {Employee.Country}</Text>          
        </View>
    );
}

export default EmployeeDetailsScreen;

const Styles = StyleSheet.create({
    header: {
        borderBottomWidth:1,
        color:'#00a887',
        fontWeight:'bold',
        fontSize:18,
        borderColor: '#00a887',
        marginBottom: 15
    },
    label: {
        color:'#00a887',
        fontWeight: 'bold'
    }
});