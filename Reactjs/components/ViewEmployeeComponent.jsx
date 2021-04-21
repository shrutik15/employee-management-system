import React, {Component} from 'react'
import EmployeeService from '../services/EmployeeService'

class ViewEmployeeComponent extends Component {
    constructor(props){
        super(props)

        this.state={
         id: this.props.match.params.id,
         employee: {}
        }
    }
    componentDidMount()
    {
      EmployeeService.getEmployeeById(this.state.id).then(res => {
          this.setState({employee: res.data});
      })
    }

    render(){
        return (
            <div>
                <h3> View Employee Page </h3>
            </div>
        )
    }
}

    export default ViewEmployeeComponent