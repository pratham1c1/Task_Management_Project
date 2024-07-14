import './SignUp.css'
import loginImage from '@assets/5500661.jpg'
import siteLogo from '@assets/logo-no-background.svg'

function SignUp() {

    return (
        <>
        <div>
              <img className="siteLogo" src={siteLogo} />
        </div>
        <div className="loginPage">
            <h1>Welcome to PCthings</h1>
            <h2>Register</h2>
            <div className="loginContainer">
                <img className="loginImage" src={loginImage}></img>
                <div className="loginForm">
                        <label for="email" className='formLable'><b>Email</b></label>
                        <input type="text" className='formInput' placeholder="Enter Email" name="email" required />
                        <label for="uname" className='formLable'><b>Username</b></label>
                        <input type="text" className='formInput' placeholder="Enter Username" name="uname" required />
                        <label for="psw" className='formLable'><b>Password</b></label>
                        <input type="password" className='formInput' placeholder="Enter Password" name="psw" required />
                        <div className='pdText'>
                        <label className='rmField'>
                        <input type="checkbox" checked="checked" onClick="this.checked=!this.checked;" />Remember me
                        </label> 
                        <span class="psw">Forgot <a href="#">password?</a></span>
                        </div>
                        <button type="submit" className='formLogin'>Sign Up</button>
                        
                </div>
            </div>
        </div>
        </>
    )
}

export default SignUp