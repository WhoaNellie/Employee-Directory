import React from 'react';
import employees from '../../employees';

class Search extends React.Component{

    constructor(props) {
        super(props);
        this.state = {
            employee: "",
            show: false
        };
        this.myRef = React.createRef();

        this.searchEmpl = this.searchEmpl.bind(this);
      }

      searchEmpl(){
        for(let el of employees){
            if(el.name.toLowerCase() === this.myRef.current.value.trim().toLowerCase()){
                this.setState({employee: el, show: true});
                break;
            }
        }
    }

    render(){
        return (<div className="search">
            <input
                type="text"
                placeholder="Name of Employee"
                ref={this.myRef}
            ></input>
            <button
                onClick={this.searchEmpl}
            >Search</button>
            {this.state.show ? <table>
                <tbody>
                <tr>
                    <th>ID</th>
                    <th>Name</th>
                    <th>Role</th>
                    <th>Salary</th>
                </tr>
                <tr>
                    <td>{this.state.employee.id}</td>
                    <td>{this.state.employee.name}</td>
                    <td>{this.state.employee.role}</td>
                    <td>{this.state.employee.salary}</td>
                </tr>
                </tbody>
            </table>
             : ""}
        </div>
        )}
}

export default Search;