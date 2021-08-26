import React from 'react';
import { useHistory} from 'react-router-dom';
import Axios from 'axios';
import Cookies from 'universal-cookie';


function RegisterPage(){
    // const cookies = new Cookies();
    // const { setUserData } = useContext(UserContext);


    // let history = useHistory();

    // const [state, setState] = useState({
    //     username:  "",
    //     email: "",
    //     password:"",
    //     passwordCheck:"",


    // });

    // function handleChange(event){
    //     const value = event.target.value;
    //     setState({
    //     ...state,
    //     [event.target.name]: value
    //     });
    // }

    // const  createUser = async (event) =>{
    //     event.preventDefault();
    //     const userObject = {
    //     email: state.email,
    //     password: state.password,
    //     passwordCheck: state.passwordCheck,
    //     username: state.username,
    //     };
    //     await Axios.post("http://localhost:5000/users/register", userObject)
    //     .catch(function (error) {
    //     if (error.response) {
    //         alert(error.response.data.msg);
    //     }
    //     });

    //     const loginRes = await  Axios.post("http://localhost:5000/users/login", {
    //     email:state.email,
    //     password:state.password
    //     });
    //     setUserData({
    //     token: loginRes.data.token,
    //     user: loginRes.data.user
    //     });
    //     cookies.set("auth-token", loginRes.data.token,{ path: '/' }, {httpOnly:true});
    //     history.push("/login");
    // };

    
    return(
        <div class="container register-page">
            <div class="row">
            <div class="col-lg-10 col-xl-9 mx-auto">
                <div class="card card-signin flex-row my-5">
                <div class="card-img-left d-none d-md-flex">
                </div>
                <div class="card-body">
                    <h5 class="card-title text-center">Register</h5>
                    <form class="form-signin">
                    <div class="form-label-group">
                        <input name ="username"  type="text" id="inputUserame" class="form-control" placeholder="Username" required autofocus/>
                        <label for="inputUserame">Username</label>
                    </div>

                    <div class="form-label-group">
                        <input name ="email"type="email" id="inputEmail" class="form-control" placeholder="Email address" required/>
                        <label for="inputEmail">Email address</label>
                    </div>

                    <hr/>

                    <div class="form-label-group">
                        <input name = "password" type="password" id="inputPassword" class="form-control" placeholder="Password" required/>
                        <label for="inputPassword">Password</label>
                    </div>

                    <div class="form-label-group">
                        <input  name = "passwordCheck"   type="password" id="inputConfirmPassword" class="form-control" placeholder="Password" required/>
                        <label for="inputConfirmPassword">Confirm password</label>
                    </div>

                    <button class="btn btn-lg btn-primary btn-block text-uppercase" type="submit">Register</button>

                    </form>
                </div>
                </div>
            </div>
            </div>
     </div>

    );
}

export default RegisterPage;