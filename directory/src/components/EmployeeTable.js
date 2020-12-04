import React, { Component } from 'react';
import API from '../utils/API';
import EmployeeFilter from './EmployeeFilter';
import EmployeeSort from './EmployeeSort';

class EmployeeTable extends Component {
    state = {
        result: {},
        filter: '',
        sort:''
    };

    componentDidMount() {
        API.getEmployees()
        .then(res => this.setState({ result: res.data }))
        .catch(err => console.log(err));
    }

    //function to filter employees by gender

    //function to sort by age

    render() {
        return (
            <div></div> 
        )
    }


}


export default EmployeeTable;