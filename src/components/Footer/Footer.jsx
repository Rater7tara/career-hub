import React from 'react';
import './Footer.css'

const Footer = () => {
  return (
    <div>
      <div className="footer bg-dark text-white text-start d-flex justify-content-center align-items-center g-3">
        <div className="row row-cols-1 row-cols-md-5 mt-5 p-4">
          <div className="col">
            <h1>Dream jobs</h1>
            <p className="mt-4 g-3">Your work is going to fill a large part of your life, and the only way to be truly satisfied is to do what you believe is great work. And the only way to do great work is to love what you do.</p>
            <div>

            </div>
          </div>
          <div className="col">
            <h3>Company</h3>
            <ul className="mt-4 g-3">
              <li>
                <a className="nav-link" aria-current="page" href="#">About us</a>
              </li>
              <li>
                <a className="nav-link" href="#">Work</a>
              </li>
              <li>
                <a className="nav-link" href="#">Latest News</a>
              </li>
              <li>
                <a className="nav-link" href="#">Careers</a>
              </li>

            </ul>
          </div>

          <div className="col">
            <h3>Product</h3>
            <p className="mt-3">Prototype</p>
            <p className="mt-3">Plans and pricing</p>
            <p className="mt-3">Customers</p>
            <p className="mt-3">Integrations</p>

          </div>
          <div className="col">
            <h3>Support</h3>
            <p className="mt-3">Help Desk</p>
            <p className="mt-3">Sales</p>
            <p className="mt-3">Become a Partner</p>
            <p className="mt-3">Developers</p>

          </div>
          <div className="col">
            <h3>Contact Now</h3>
            <p className="mt-3">524 Broadway, NYC</p>

            <p className="mt-2">+1777+978+5570</p>
          </div>

        </div>
      </div>

      <div className='last d-flex justify-content-between bg-dark text-white'>
        <p>@2023 DreamJob, All Right Reserved</p>
        <p>Powered by DreamJob</p>
      </div>
    </div>
  );
};

export default Footer;