import React from 'react' ;
import './sign-in.style.scss';
import FormInput from './../form-input/form-input.components' ;

import CustomButton from './../custom-button/custom-button.components' ;
 import {signInWithGoogle} from './../firebase/firebase.utils' ;
class SignIn extends React.Component {
    constructor(props) {
        super(props);

        this.state ={
            email :'',
            password:''
        }
    }


    handleSubmit= event =>{
        event.preventDefault();
        this.setState({email:'' , password:''});
    }


    handleChange= event =>{
        const {value , name} = event.target;

        this.setState({[name]:value})
    }
    render(){
        return (

            <div className="sign-in">
                
                <h2>I already Have an account</h2>

                <span>Sign In with Gmail and password </span>
                
                <form onSubmit={this.handleSubmit}> 
                    <FormInput name="email" value={this.state.email}  handleChange={this.handleChange}
                    label='Email'
                    required />
                    {/* <label>Email</label> */}

                    <FormInput name="password" value={this.state.password} handleChange={this.handleChange} 
                    label='Password' required />
                    {/* <label>Password</label> */}
 
                    <CustomButton type='submit' > SignIn </CustomButton>
                    <CustomButton onClick = {signInWithGoogle} > {' '}SignIn with Google {' '} </CustomButton>


                </form>
        
           </div>
        )
    }
}

export default SignIn;