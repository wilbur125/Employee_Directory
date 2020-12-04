import React, { Component } from 'react';
import API from '../utils/API';
import Header from './Header';
import EmployeeFilter from './EmployeeFilter';
import EmployeeSort from './EmployeeSort';
import EmployeeTable from './EmployeeTable';



class Container extends Component {
    state = {
        result: {},
        employees: [],
        filtered: [],
        filterChoice: '',
        sorted: ''
    }

    componentDidMount() {
        API.getEmployees().then(res => this.state({
            employees: res.data.results,
            filtered: res.data.results    
        }))
        .catch(err => console.log(err))
    }

    //define the function handleFilter

    //define a function to filter the results
    
    //define the function handleSort

    //define a function to sort the results


   render() {
       return (
           <div>
                <Header/>
                <EmployeeFilter
                value={this.state.filterChoice}
                handleFilter={this.handleFilter}
                />
                <EmployeeSort
                handleSort={this.handleSort}
                />
                <EmployeeTable

                />
           </div>
       )
   } 
}

export default Container;