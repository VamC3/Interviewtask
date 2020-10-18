import React from 'react';
import Data from '../../API/data.json'
import getDataAction from '../../Core/Allcrud/Usersdata/Usersdataactions'
import { connect } from 'react-redux'
import './Employeelist.css';

const Employeelist = (props) => {
    const payload = {
        loading: false,
        error: false,
        events: Data
    }
    props.getEvent(payload)
    return (
        <div className='container'>
            <div className='row'>
                <div className='col-12'>
                    <div className='main mt-3'>
                        <table className='table table-bordered'>
                            <thead>
                                <tr>
                                    <th>Name</th>
                                    <th>Age</th>
                                    <th>Gender</th>
                                    <th>Email</th>
                                    <th>Phone no</th>
                                </tr>
                            </thead>
                            <tbody>
                            {
                                    props.events && props.events.map((currentValue, index) => {
                                        return <tr key={index}>
                                            <td>{currentValue.name || "N/A"}</td>
                                            <td>{currentValue.age || "N/A"}</td>
                                            <td>{currentValue.gender || "N/A"}</td>
                                            <td>{currentValue.email || "N/A"}</td>
                                            <td>{currentValue.phoneNo || "N/A"}</td>
                                        </tr>
                                    })
                                }
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    )
}

const mapStateToProps = (state) => {
    return state.events
}

const mapDispatchToProps = (dispatch) => {
    return {
        getEvent: (response) => dispatch(getDataAction(response))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Employeelist)