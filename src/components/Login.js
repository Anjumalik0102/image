

import React, { useState } from 'react'
import styles from "@/styles/Login.module.css"
import { IoEyeOutline } from "react-icons/io5";
import { FaRegEyeSlash } from "react-icons/fa";

export default function LoginComponent()  {
    const [transition, setTransition] = useState(false)
    const [formTransition, setFormTransition] = useState(false)
    const [signUpName, setSignUpName] = useState('')
    const [signUpNameError, setSignUpNameError] = useState('')
    const [password, setPassword] = useState('')
    const [email, setEmail] = useState('')
    const [emailError, setEmailError] = useState('');
    const [passwordError, setPasswordError] = useState('');
    const [signUpEmail, setSignUpEmail] = useState('')
    const [signUpEmailError, setSignUpEmailError] = useState('')
    const [signUpPassword, setSignUpPassword] = useState('')
    const [signUpPasswordError, setSignUpPasswordError] = useState('')
    const [showPassword, setShowPassword] = useState(false);

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    const addTrasition = () => {
        setTransition(true)
        setFormTransition(true)
    }

    const removeTrasition = () => {
        setTransition(false)
        setFormTransition(false)
    }
    const handleChangeEmail = (e) => {
        const { value } = e.target;
        setEmail(value);
        setEmailError("")
       
    };
    const handlePassword = (e) => {
        const { value } = e.target;
        setPassword(value);
        setPasswordError("")
       
    };
    const  handleSignUpName=(e)=>{
        const { value } = e.target;
        setSignUpName(value);
        setSignUpNameError("")
    };
    const handleSignUpEmail=(e)=>{
        const{value}= e.target;
        setSignUpEmail(value)
        setSignUpEmailError("")
    };
   const handleSignUpPassword=(e)=>{
    const{value}= e.target;
     setSignUpPassword(value)
     setSignUpPasswordError("")
   };


    const handleSubmit = (e) => {
        e.preventDefault();
        if (email.trim() === '') {
            setEmailError('email is required');
            return 0;
        }
        else {
            setEmailError('');
        }
        if (password.trim() === '') {
            setPasswordError('password is required');
            return 0;
        }
        else {
            setPasswordError('');
        }
        if (!validateEmail(email)) {
            alert("Enter a valid email")
            return 0
        }
        if (!validatePassword(password)) {
            alert("Enter a valid password")
            return 0
        }
        
    }
    const handleSubmitSignUp = (e) => {
        if (signUpName.trim() === '') {
            setSignUpNameError('Name  is required');
            return 0;
        }
        else {
            setSignUpNameError('');
        }
        if (signUpEmail.trim() === '') {
            setSignUpEmailError('email  is required');
            return 0;
        }
        else {
            setSignUpEmailError('');
        }
        if (signUpPassword.trim() === '') {
            setSignUpPasswordError('password is required');
            return 0;
        }
        else {
            setSignUpPasswordError('');
        }
        if (!validateEmail(signUpEmail)) {
            alert("Enter a valid email")
            return 0
        }
        if (!validatePassword(signUpPassword)) {
            alert("Enter a valid password")
            return 0
        }
        if(signUpName&&signUpEmail&&signUpPassword){
            alert ("Sign Up successfully")
        }

    }
    const validateEmail = (email, signUpEmail) => {

        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return regex.test(email, signUpEmail)
    };
    const validatePassword = (password, signUpPassword) => {

        const regex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*]).{8,}$/;
        return regex.test(password, signUpPassword);
    };
    return (
        <>
            <div className={styles.mainDiv}>
                <div className={styles.container}>
                    <div className={transition ? `${styles.loginForm} ${styles.hiddenForm}` : `${styles.loginForm} ${styles.loginFormTransition}`}>
                        <div className={styles.formAnimation}>
                            <div className={styles.rightDiv} >
                                <div className={styles.form}>
                                    <h2 style={{marginBottom:"20px"}}>Welcome!</h2>
                                    <div>
                                        <label className={styles.label}>Email Address</label>
                                    </div>
                                    <div className={styles.emailField}>
                                        <input
                                            className={styles.field}
                                            type='email'
                                            value={email}
                                            onChange={handleChangeEmail} 
                                            required
                                        />
                                        <p>
                                            {emailError ? <span style={{ color: 'red', fontSize: 'small' }}>{emailError}</span> : null}
                                        </p>
                                    </div>


                                    <div>
                                        <label className={styles.label}>Password</label>
                                    </div>

                                    <div>
                                        <input
                                            className={styles.field}
                                            type={showPassword ? 'text' : 'password'}
                                            value={password}
                                            onChange={handlePassword}
                                            required
                                        />
                                          <span  style={{marginLeft:'-35px' ,fontSize:'large',color:'black',}}onClick={togglePasswordVisibility}>
                                        {showPassword ? <IoEyeOutline /> : < FaRegEyeSlash/>}
                                    </span>
                                            
                                        <p>
                                            {passwordError ? <span style={{ color: 'red',  fontSize: 'small' }}>{passwordError}</span> : null}
                                        </p>
                                    </div>

                                    <div className={styles.buttonDiv}>
                                        <button className={styles.button} onClick={handleSubmit}>Sign In</button>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                    <div className={`${styles.signUpForm} ${formTransition ? styles.signUpFormTransition : styles.hiddenForm}`}>
                        <div className={styles.formAnimation}>
                            <div className={styles.leftDivForm1}>
                                <h1 style={{marginBottom:"20px"}}>Create Account</h1>
                                <div className='form'>

                                    <label className={styles.label} > Name </label>

                                    <div className={styles.nameField}>
                                        <input
                                            className={styles.field}
                                            type='text'
                                            value={signUpName}
                                            onChange={ handleSignUpName}
                                        />
                                        <p>
                                            {signUpNameError ? <span style={{ color: 'red',  fontSize: 'small' }}>{signUpNameError}</span> : null}
                                        </p>
                                    </div>

                                    <label className={styles.label}>Email Address</label>
                                    <div className={styles.emailField}>
                                        <input
                                            className={styles.field}
                                            type='email'
                                            value={signUpEmail}
                                            onChange={ handleSignUpEmail}
                                            required
                                        />
                                        <p>
                                            {signUpEmailError ? <span style={{ color: 'red',fontSize: 'small' }}>{signUpEmailError}</span> : null}
                                        </p>
                                    </div>
                                    <label className={styles.label}>Password</label>
                                    <div className={styles.passwordField}>
                                        <input
                                            className={styles.field}
                                            type={showPassword ? 'text' : 'password'}
                                            value={signUpPassword}
                                            onChange={ handleSignUpPassword}
                                             required
                                        />
                                       <span  style={{marginLeft:'-35px' ,fontSize:'large',color:'black',}}onClick={togglePasswordVisibility}>
                                        {showPassword ? <IoEyeOutline /> : < FaRegEyeSlash/>}
                                    </span>
                                        <p>
                                            {signUpPasswordError ? <span style={{ color: 'red', fontSize: 'small' }}>{signUpPasswordError}</span> : null}
                                        </p>
                                    </div>
                                    <div className={styles.buttonDiv}>
                                    <button className={styles.button}onClick={ handleSubmitSignUp} >Sign Up</button>
                                </div>
                    
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className={transition ? `${styles.overlay} ${styles.overlayTransition}` : `${styles.overlay} ${styles.overlayTransitionBack}`}>
                        {
                            transition ?
                                <>
                                    <div className={styles.leftDiv} style={{ backgroundColor: 'var(--primary-color) '}}>
                                    <h1 className={styles.colorHeading}>Hello, Friend!</h1>
                                    <p className={styles.para}>Enter your personal details and start journey with us</p>
                                    <div className={styles.buttonDivColor}>
                                        <button className={styles.button} id="signUp"
                                            onClick={removeTrasition}
                                        >login</button>
                                        </div>
                                    </div>
                                </>
                                :
                                <>
                                    <div className={styles.leftDiv} style={{ backgroundColor: 'var(--primary-color) '}}>
                                    <h1 className={styles.colorHeading}>Welcome! </h1>
                                    <h5 className={styles.para}> One-Stop Solution for Reading, Writing, Citing,</h5>
                                   <h4 className={styles.para}> and Referencing</h4>
                                    <div className={styles.buttonDivColor}>
                                        <button className={styles.button} id="signUp"
                                            onClick={addTrasition}
                                        >Sign Up</button>
                                        </div>
                                    </div>
                                </>
                        }

                    </div>


                </div>
            </div>

        </>
    )
}

