import React  from 'react';
import { StyleSheet, View, Text } from 'react-native';

const EmployeeDetailsScreen = ({ navigation, route }) => {
    let Employee = route.params.Employee;

    return(
        <View style={{flex:1,padding:10, backgroundColor: '#595959'}}>
            <Text style={Styles.header}>Employee</Text>
            <Text style={Styles.label}>Id: {Employee.Id}</Text>
            <Text style={Styles.label}>Name: {Employee.Name}</Text>
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
    }
});