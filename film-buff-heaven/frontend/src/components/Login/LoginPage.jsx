import React, {useState, useContext} from 'react';
import {Link, useHistory} from 'react-router-dom';
import UserContext from "../../context/context"
import Axios from 'axios';
import Cookies from 'universal-cookie';

function LoginPage(){
  const cookies = new Cookies();
  const {setUserData} = useContext(UserContext);

  let history = useHistory();

  const [state, setState] = useState({
    username: "",
    password: "",
  });

  function handleChange(event){
    const value = event.target.value;
    setState({
      ...state,
      [event.target.name]: value
    });
  }

  const  handleClick = async (event) =>{
    event.preventDefault();

    const userObject = {
      username: state.username,
      password: state.password,
    };

    const loginRes = await Axios.post("http://localhost:8080/api/auth/signin", userObject);

      setUserData({
        token: loginRes.data.accessToken,
        user: loginRes.data.username
      })
    cookies.set("auth-token", loginRes.data.accessToken,{ path: '/' }, {httpOnly:true});
    history.push("/");

  };
  return (
    <div className = "login-page">
                <div className="card card1">
                    <div className="row justify-content-center my-auto">
                        <div className="col-md-8 col-10 my-5">
                            <h3 className="mb-5 text-center heading">Welcome to Film Buff Heaven</h3>
                            <h6 className="msg-info">Please login to your account</h6>
                            <form>
                              <div className="form-group"> <label className="form-control-label text-muted">Username</label> <input name ="username" onChange = {handleChange}  type="text"  placeholder="Username" className="form-control" required/> </div>
                              <div className="form-group"> <label className="form-control-label text-muted">Password</label> <input name = "password" onChange = {handleChange} type="password"  placeholder="Password" className="form-control" required/> </div>
                              <div className="row justify-content-center my-3 px-3"> <button type = "submit" onClick= {handleClick} className="btn-block btn-color">Login to Portal</button> </div>
                            </form>
                        </div>
                    </div>
                    <div className="bottom text-center mb-5">
                        <p href="#" className="sm-text mx-auto mb-3">Don't have an account?<Link to="/register"><button className="btn btn-white ml-2">Sign Up</button></Link></p>
                    </div>
                </div>
            </div>

  );
}

export default LoginPage;
