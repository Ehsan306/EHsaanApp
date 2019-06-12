import React, { Component } from 'react';
import axios from "axios";
import {Link} from 'react-router-dom';
import jwt_decode from 'jwt-decode';
class signIn extends Component {
    constructor(props) {
        super(props);
        this.state = { 
          account:
          {
            email:"",
            password:""
          },
          errors:{
            
          }
         }
    }
    email = React.createRef();
    pass = React.createRef();


    componentDidMount()
    {
      this.email.current.focus();
    }
    handleSubmit=(event)=>
    {
      event.preventDefault();
      const { history } = this.props;
     axios
       .post("http://localhost:4000/api/SignIn",{
        email:this.state.account.email,
  
        password: this.state.account.password
       })
       .then(res=> {
        
        if(res)
        {
       localStorage.setItem('userStorage',res.data)
      }
     
     
        history.push('/')
     
      
    
      })
      .catch(function(){
        console.log("Error")
      })
       
    }
  
    handleChange=(e)=>
    {
     
      const updateAccount = {...this.state.account};
      updateAccount[e.currentTarget.name] = e.currentTarget.value;
      this.setState({account : updateAccount});
    }
   

    render() { 
      const my={           
        paddingTop:40
      }
        return ( 
            <div>
               
                    <div className="container-fluid">
                    <div class="wrapper" style={my}>
    <form class="form-signin" onSubmit={this.handleSubmit.bind(this)}>   
     
     <div className="form-group">
      <input ref={this.email} type="text" id="email" onChange={this.handleChange} value={this.state.account.email} class="form-control" name="email" placeholder="Email Address"  autofocus="" />
     {this.state.errors.email && <div className="alert-danger"> {this.state.errors.email}
     </div>}
      </div>
      <div className="form-group">
            <input ref={this.pass}  type="password" id="pass" onChange={this.handleChange} value={this.state.account.password} class="form-control" name="password" placeholder="Password" />      
            {this.state.errors.password && <div className="alert alert-danger"> {this.state.errors.password}
            </div>}
            </div> 
            <button class="btn btn-lg btn-primary btn-block" value={this.state.account.password} type="submit">Login</button>
      <Link to ='/signup'><button class="btn btn-lg btn-primary btn-block" value={this.state.account.password} type="submit">SignUp</button></Link>
         
    </form>
  </div>
          
                    </div>
                    <br/>
                   
            </div>
         );
    }
}
 
export default signIn;