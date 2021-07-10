import './style.css';
// import { Link, useHistory } from 'react-router-dom';
// import { useState } from 'react';
// import { loginUser } from '../store/action';
// import { useDispatch } from 'react-redux'
function Login() {
    // const [email, setEmail] = useState("")
    // const [password, setPassword] = useState("");
    // const dispatch = useDispatch()
    // const history = useHistory()
   
    // const login = () => {
    //     let user = {
    //         email,
    //         password
    //     }
    //     dispatch(loginUser(user, history))
    //         .then((uid) => {
    //             history.push(`/user/${uid}`)
    //         })
    //         .catch((err) => {
    //             alert(err)
    //         })
    // }
    return (
       <div>



<div className="registration-form">
  <form>
    <div className="form-icon">
      <span><i className="icon icon-user" /></span>
    </div>
    <div className="form-group">
      <input type="text" className="form-control item" id="username" placeholder="Username" />
    </div>
    <div className="form-group">
      <input type="password" className="form-control item" id="password" placeholder="Password" />
    </div>
    <div className="form-group">
      <input type="text" className="form-control item" id="email" placeholder="Email" />
    </div>
    <div className="form-group">
      <input type="text" className="form-control item" id="phone-number" placeholder="Phone Number" />
    </div>
    <div className="form-group">
      <input type="text" className="form-control item" id="birth-date" placeholder="Birth Date" />
    </div>
    <div className="form-group">
      <button type="button" className="btn btn-block create-account">Create Account</button>
    </div>
  </form>
  <div className="social-media">
    <h5>Sign up with social media</h5>
    <div className="social-icons">
      <a href="#"><i className="icon-social-facebook" title="Facebook" /></a>
      <a href="#"><i className="icon-social-google" title="Google" /></a>
      <a href="#"><i className="icon-social-twitter" title="Twitter" /></a>
    </div>
  </div>
</div>








       </div>
           



        
    )
}

export default Login;






















{/* <div className="row">
                <div className="col-12">
                    <div className="card login_card">
                        <h1>Login</h1>
                        <div className="mb-3">
                            <label for="exampleFormControlInput1" class="form-label">Email address</label>
                            <input onChange={(e) => setEmail(e.target.value)} value={email} type="email" className="form-control" id="exampleFormControlInput1" placeholder="name@example.com" />
                        </div>
                        <div className="mb-3">
                            <label for="exampleFormControlInput1" class="form-label">Password</label>
                            <input onChange={(e) => setPassword(e.target.value)} value={password} type="password" className="form-control" id="exampleFormControlInput1" placeholder="name@example.com" />
                        </div>
                        <div class="d-grid gap-2">
                            <button onClick={login} class="btn btn-primary" type="button">Login</button>
                        </div>
                        <div>
                            <Link to="/signup">Create new account</Link>
                        </div>
                    </div>
                </div>
            </div> */}