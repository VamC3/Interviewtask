import React, { useState, useRef } from 'react';
import { useHistory } from 'react-router-dom';
import './Login.css';

const Login = () => {

    const [loginData, setLoginData] = useState(null)


    const [validation, setValidation] = useState(false)


    let history = useHistory()


    const loginCredentials = () => {
        if (loginData.username === 'hruday@gmail.com' && loginData.password === 'hruday123') {
            history.push('/employeelist')
        } else {
            setValidation(true)
        }
    }


    const handleChange = ({ target }) => {
        const { name, value } = target
        const newData = Object.assign({}, loginData, { [name]: value })
        setLoginData(newData)
    }


    const handleSubmit = (e) => {
        e.preventDefault()
        loginCredentials()
    }

    const myForm = useRef(null)

    const resetForm = () => {
        myForm.current.reset();
    }

    return (
        <div className='container'>
            <div className='row justify-content-center'>
                <div className='col-4'>
                    <div className='mainform mt-3'>
                        <form onSubmit={handleSubmit} ref={myForm}>
                            <div className="form-group">
                                <label htmlFor="username">Username</label>
                                <input type="text" name='username' className="form-control" id="username" onChange={handleChange}></input>
                            </div>
                            <div className="form-group">
                                <label htmlFor="password">Password</label>
                                <input type="password" name='password' className="form-control" id="password" onChange={handleChange}></input>
                            </div>
                            { validation ? 
                                <span>Please check your Username and Password</span> : ''
                            }
                            <button type="submit" onClick={resetForm} className="btn btn-primary">Submit</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login