import React from 'react'
import { Link } from "react-router-dom"
import './login.css'

export default function home() {
    return (
        <div>
            <nav className="navbar navbar-light bg-light shadow-sm">
                <Link className="navbar-brand header_home" to='/'>Social Media</Link>
            </nav>
            <div className="container">
                <div className="row">
                    <div className="col-md-5 mt-5">
                        <h1>Welcome,</h1>
                        <h4 style={{ color: '#2f3542', paddingTop: 12 }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc porta lobortis metus ut aliquam. Sed faucibus felis nisi, sit amet pharetra nisi scelerisque ornare. Quisque at rhoncus risus. Phasellus magna velit, faucibus molestie tortor lobortis, vestibulum cursus tortor.</h4>
                        <div className="row">
                            <div className="col-6">
                                <Link to='/signin'><button style={{ width: 170}} className='formBtn'>Sign In</button></Link>
                            </div>
                            <div className="col-6">
                                <Link to='/signup'><button style={{ width: 170, backgroundColor: 'transparent', color: 'rgb(161, 26, 66)', border: '1px solid rgb(161, 26, 66)' }} className='formBtn'>Sign Up</button></Link>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-7 mt-4">
                        <img className='img-fluid' src='https://42f2671d685f51e10fc6-b9fcecea3e50b3b59bdc28dead054ebc.ssl.cf5.rackcdn.com/illustrations/social_friends_nsbv.svg' alt="Social Illustration" />
                    </div>
                </div>
            </div>
        </div>
    )
}
