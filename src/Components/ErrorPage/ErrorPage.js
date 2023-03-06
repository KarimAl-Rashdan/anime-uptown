import React from 'react';
import { Link } from "react-router-dom"
import "../ErrorPage/ErrorPage.css"


function ErrorPage() {
return (
  <div className='errorPageWrapper'>
    <h1>Something went wrong - 404 Page Not Found</h1>
    <button><Link to="/" className='returnHomeBtn'></Link>Return to Home</button>
  </div>
)
}

export default ErrorPage