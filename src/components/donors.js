import React, { Component } from 'react';
import * as firebase from 'firebase'

const Main_App = {
      backgroundColor:"#4CAF50",
      textAlign:"left"
        }

class Donors extends Component {
    componentWillMount(){
        var donors = [];

        firebase.datebase().ref('/donors/').on('value', (date) => {
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
            <div className="App">

  
                <h1>WELCOME DONARS</h1>
                 <div >
                <h1>Available Donors</h1>
                {this.state.donors.map((m, i) => {
                 return (
                      
                     <table>
                         <br />
                         <tr><td> FUll Name :{m.fullname}</td></tr>
                           <tr><td> MObile No : {m.mobile}</td></tr>
                             <tr><td> Age :{m.age}</td></tr>
                               <tr><td>Blood-Group:{m.bloodgroup}</td></tr>

                    </table>

                 )
                })
                }
             

            </div>
            </div>




        );
    }
}

export default Donors;
