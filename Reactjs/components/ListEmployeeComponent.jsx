import React from 'react'
import EmployeeService from '../services/EmployeeService'

class ListEmployeeComponent extends React.Component {
    constructor(props){
        super(props)

        this.state={
            employees:[]
        }
        this.addEmployee= this.addEmployee.bind(this);
        this.editEmployee=this.editEmployee.bind(this);
        this.deleteEmployee=this.deleteEmployee.bind(this);
    }

    deleteEmployee(id){
        EmployeeService.deleteEmployee(id).then((res) => {
            this.setState({employees: this.state.employees.filter(employee => employee.id !== id)});
        });
    }

    viewEmployee(id){
        this.props.history.push(`/view-employee/${id}`);
    }

    editEmployee(id){
        this.props.history.push(`/update-employee/${id}`);
    }
    componentDidMount(){
        EmployeeService.getEmployees().then((res) => {
            this.setState({employees: res.data});
        });
    }

    addEmployee(){
        this.props.history.push('/add-employee');
    }

    render()
    {
        return (
            <div>
             <h2 className="text-center">List of Employees</h2>
             <div className="row">
             <button className="btn btn-warning" style = {{position: 'absolute',
                right: 100, top: 60}}  onClick={this.addEmployee}>Add Employee</button>
             </div>
                 <table className="table table-striped table-bordered">
                   
                   <thead>
                       <tr>
                           <th> Employee First Name</th>
                           <th> Employee Last Name</th>
                           <th> Employee Email Id</th>
                           <th> Actions</th>
                       </tr>
                   </thead>
                   <tbody>
                       {
                           this.state.employees.map(
                               employee => 
                               <tr key ={employee.id}>
                                 <td> {employee.firstName}</td>
                                 <td> {employee.lastName} </td>
                                 <td> {employee.emailId}</td>
                                 <td> 
                                 
                                     <button onClick= { () => this.editEmployee(employee.id)} className="btn btn-link">Update</button>
                                     <button onCLick= { () => this.deleteEmployee(employee.id)} className="btn btn-link">Delete</button>
                                    {/* <button onCLick= { () => this.viewEmployee(employee.id)} className="btn btn-link">View</button> */}
                                 </td>
                               </tr>
                           )
                       }
                   </tbody>
                 </table>
             </div>

        )
    }
}

export default ListEmployeeComponent;