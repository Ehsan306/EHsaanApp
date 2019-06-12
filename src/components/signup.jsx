import React, { Component } from 'react';


import {Link} from 'react-router-dom';
import axios from "axios";

class Signup extends Component {
    state = {  
      registration:
      {
        name:"",
        email:"",
        phoneNumber:"",
        password:""
      }
    }

    handleSubmit=(event)=>
    {
      event.preventDefault();
     axios
       .post("http://localhost:4000/api/Signup",{
        name :this.state.registration.name,
        email:this.state.registration.email,
     
        password: this.state.registration.password
       })
       .then(res=> {
        console.log("work")
        if(res)
        {
       localStorage.setItem('user',res.data)
       this.props.history.push('/')
      }
   
      })
      .catch(function(){
        console.log("error ")
      } )
    }
    handleChange=(e)=>
    {
      const account = {... this.state.registration};
      account[e.currentTarget.name] = e.currentTarget.value;
      this.setState({registration:account})
      console.log(this.state.registration)
    }
    render() { 
        const my={
            paddingTop:5
        }
        return ( 
            <div className="Signup">
             
                    <div className="container-fluid">
                    <div class="wrap" style={my}>
    <form class="form-signup" onSubmit={this.handleSubmit}>       
      <center><h3 class="form-signin-heading">Signup</h3></center>
      <div class="form-group">
    <label for="exampleInputEmail1">Name</label>
    <input type="text" class="form-control" onChange={this.handleChange} name="name"
     aria-describedby="emailHelp" placeholder="Name"/>
  </div>

  <div class="form-group">
    <label for="exampleInputEmail1">E-MAIL</label>
    <input type="email" class="form-control"  onChange={this.handleChange} name="email"
     aria-describedby="emailHelp" placeholder="Your EMAIL"/>
  </div>
  <div class="form-group">
    <label for="exampleInputEmail1">Phone Number</label>
    <input type="Phone Number" class="form-control"  onChange={this.handleChange} name="Phone Number"
     aria-describedby="emailHelp" placeholder="PhoneNumber"/>
  </div>
  <div class="form-group">
    <label for="exampleInputEmail1">Password</label>
    <input type="password" class="form-control"  onChange={this.handleChange} name="password"
     aria-describedby="emailHelp" placeholder="Password"/>
  </div>
      <Link to = '/cart'><button class="btn btn-lg btn-primary btn-block" type="submit">SignUp</button></Link>   
    </form>
  </div>
                    </div>
                    <br/>
                    
            </div>
         );
    }
}
 
export default Signup;