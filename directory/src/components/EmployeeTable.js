import React, { Component } from 'react';
import API from '../utils/API';
import { Card, ListGroup } from 'react-bootstrap'; 
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

    //function to filter employees by month of birth

    //function to sort by last name

    render() {
        return (
            <div className="row mx-auto">
                {this.state.result.map((result, index) => (
                    <Card key={index} className="col-xs-12 col-md-6 float-sm-left">
                        <Card.Body>
                            <Card.Title>{result.results[index].name.last}, {result.results[index].name.first}</Card.Title>
                            <ListGroup key={index}>
                                <ListGroup.Item>
                                    <img src={result.results[index].picture.thumbnail} alt={result.results[index].name.first + result.results[index].name.last}/>
                                </ListGroup.Item>
                                <ListGroup.Item>
                                    <p>Birthday: {result.results[index].dob.date.getMonth() + 1} {result.results[index].dob.date.getDate()}</p>
                                </ListGroup.Item>
                            </ListGroup>
                        </Card.Body>
                    </Card>
                ))}
            </div> 
        )
    }


}


export default EmployeeTable;