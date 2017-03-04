import React, { Component } from 'react';

import {Table, TableBody, TableHeader, TableHeaderColumn, TableRow, TableRowColumn} from 'material-ui/Table';
import firebase from 'firebase';

class DonorList extends Component {
   constructor(){
       super();

       this.state = {
           donors : []
       }
   }
    
    componentWillMount(){
        var donors = [];

        firebase.database().ref('/donors/').on('value', (date) => {
            let obj = date.val();

            for(var prop in obj){
                donors.push(obj[prop].bloodUser);
                console.log(obj[prop]);
                this.setState({
                    donors: donors
                })
                console.log(this.state.donors);
            }
        })
    }
   
   render() {
        return (
            <div >
                <h1>Donor List</h1>
             
                                 
                      <Table>
    <TableHeader>
      <TableRow>
           <TableHeaderColumn>Full Name  </TableHeaderColumn>
            <TableHeaderColumn>Mobile </TableHeaderColumn>   
        <TableHeaderColumn>Age </TableHeaderColumn>
        <TableHeaderColumn>Address </TableHeaderColumn> 
        <TableHeaderColumn><b>Blood Group</b></TableHeaderColumn>
       
       
      </TableRow>
    </TableHeader>
  </Table>
  

{this.state.donors.map((m,i)=>{
                    return(
                        
                      <Table>

    <TableBody>
      <TableRow>
            <TableRowColumn>{m.fullname}</TableRowColumn>
              <TableRowColumn>{m.mobile}</TableRowColumn>
        <TableRowColumn>{m.age}</TableRowColumn>
        <TableRowColumn>{m.address}</TableRowColumn>
        <TableRowColumn> {m.bloodgroup}</TableRowColumn>
      
      </TableRow>
    </TableBody>
  </Table>
  
  
  )
                })
                  
                }

            </div>
        );
    }
}

export default DonorList;
