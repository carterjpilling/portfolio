import React from 'react';
import config from '../../config';
const { GrDocumentText } = require('react-icons/gr');
export default function ContactUs() {
  return (
    <section className="page-section" id="contact">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-8 text-center">
            <h2 className="mt-0">Let's Get In Touch!</h2>
            <hr className="divider my-4" />
            <p className="text-muted mb-5">
              I am looking for opportunities to learn, develop, and contribute to a company's mission! Please contact me with questions or openings.
            </p>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-4 ml-auto text-center mb-5 mb-lg-0">
            <i className="fas fa-phone fa-3x mb-3 resume-icon"></i>
            <a className="d-block" href="/#">
              {config.phone}
            </a>
          </div>
          <div className="col-lg-4 ml-auto text-center mb-5 mb-lg-0">
            <i className="fas  fa-3x mb-3 resume-icon"><GrDocumentText
              className='resume-icon'
              value={{ style: { color: 'gray' } }}
            /> </i>
            <a className="d-block" href="https://docs.google.com/document/d/10qx7N-hgmQPHI6PuSiKrgXbn3Yte8dldYEz27nb5JPM/edit?usp=sharing">
              {config.resume}
            </a>
          </div>
          <div className="col-lg-4 mr-auto text-center">
            <i className="fas fa-envelope fa-3x mb-3 resume-icon"></i>
            <a className="d-block" href={`mailto:${config.email}`}>
              {config.email}
            </a>
          </div>
        </div>
        <div className="row justify-content-center">
          <div className="col-lg-8 text-center mt-5 mb-lg-0">
            {config.socialLinks.map(social => {
              const { icon, url } = social;
              return (
                <a key={url} href={url} of={`mx-2`}>
                  <i className={`fab fa-3x mb-3 ${icon} margin-controller`}></i>
                </a>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
