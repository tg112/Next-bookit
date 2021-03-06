import Link from 'next/link';
import React from 'react'

const Header = () => {
  return (
    <nav className="navbar row justify-content-center sticky-top">
      <div className="container">
        <div className="col-3 p-0">
          <Link href="/">
            <a>
              <div className="navbar-brand">
                <img style={{ cursor: 'pointer' }} src="/images/bookit_logo.png" alt="BookIT" width='100%'
                  height='100%' />
              </div>
            </a>
          </Link>
        </div>

        <div className="col-3 mt-3 mt-md-0 text-center">
          <a className="btn btn-danger px-4 text-white login-header-btn float-right">Login</a>
        </div>
      </div>
    </nav>


  )
};

export default Header