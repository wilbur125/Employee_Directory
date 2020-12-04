import React from "react";

function EmployeeSort(props) {
    return (
      <form>
        <div className="form-group">
        <button onSelect={props.handleSort}>
            Sort by Last Name
        </button>
        </div>
      </form>
    );
  }
  
  export default EmployeeSort;