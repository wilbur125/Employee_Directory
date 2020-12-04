import React from "react";
import SelectSearch from 'react-select-search';

const options = [
    {name: 'January', value: '01'},
    {name: 'February', value: '02'},
    {name: 'March', value: '03'},
    {name: 'April', value: '04'},
    {name: 'May', value: '05'},
    {name: 'June', value: '06'},
    {name: 'July', value: '07'},
    {name: 'August', value: '08'},
    {name: 'September', value: '09'},
    {name: 'October', value: '10'},
    {name: 'November', value: '11'},
    {name: 'December', value: '12'}
];

function EmployeeFilter(props) {
  return (
    <form>
      <div className="form-group">
      <SelectSearch 
      options={options} 
      value={props.value} 
      name="filterChoice" 
      placeholder="Choose a Month" 
      onSelect={props.handleFilter}/>
      </div>
    </form>
  );
}

export default EmployeeFilter;
