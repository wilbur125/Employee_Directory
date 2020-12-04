import React, { Component } from 'react';
import SearchForm from './SearchForm';
import EmployeeTable from './EmployeeTable';
import Header from './Header';
import API from '../utils/API';
import { Card, ListGroup } from 'react-bootstrap'; 

class Container extends Component {
    state = {
        result: {},
        employees: [],
        filtered: [],
        sorted: '',
        filterChoice: ''
    }

    componentDidMount() {
        API.getEmployees().then(res => this.state({
            employees: res.data.results,
            filtered: res.data.results    
        }))
        .catch(err => console.log(err))
    }

    //define the function handleFilter
    //define the function handleSort
    
}