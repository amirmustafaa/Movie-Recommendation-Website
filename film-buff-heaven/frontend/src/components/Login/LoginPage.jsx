import React from 'react';//, {useState, useContext} from 'react';
import { useHistory} from 'react-router-dom';
//import UserContext from "../../context/UserContext"
import Axios from 'axios';
import Cookies from 'universal-cookie';

function LoginPage(){
    // const cookies = new Cookies();
    // const {setUserData} = useContext(UserContext);
  
    // let history = useHistory();
  
    // const [state, setState] = useState({
    //   email: "",
    //   password: "",
    // });
  
    // function handleChange(event){
    //   const value = event.target.value;
    //   setState({
    //     ...state,
    //     [event.target.name]: value
    //   });
    // }
  
    // const  handleClick = async (event) =>{
    //   event.preventDefault();
  
    //   const userObject = {
    //     email: state.email,
    //     password: state.password,
    //   };
  
    //   const loginRes = await Axios.post("http://localhost:5000/users/login", userObject);
  
    //   setUserData({
    //     token: loginRes.data.token,
    //     user: loginRes.data.user
    //   })
    //   cookies.set("auth-token", loginRes.data.token,{ path: '/' }, {httpOnly:true});
    //   history.push("/profile/" + loginRes.data.user.id)
  
    // };
  
    return(
      <div class="container login-page">
      <div class="row">
        <div class="col-sm-9 col-md-7 col-lg-5 mx-auto">
          <div class="card card-signin my-5">
            <div class="card-body">
              <h5 class="card-title text-center">Sign In</h5>
              <form class="form-signin">
                <div class="form-label-group">
                  <input name ="email" type="email" id="inputEmail" class="form-control" placeholder="Email address" required autofocus/>
                  <label for="inputEmail">Email address</label>
                </div>
  
                <div class="form-label-group">
                  <input name = "password"   type="password" id="inputPassword" class="form-control" placeholder="Password" required/>
                  <label for="inputPassword">Password</label>
                </div>
  
                <button  class="btn btn-lg btn-primary btn-block text-uppercase" type="submit">Sign in</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  
    );
  }
  
  
  
  export default LoginPage
  