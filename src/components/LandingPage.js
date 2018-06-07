import React from 'react';
import { connect } from 'react-redux';
import { Redirect, Link } from 'react-router-dom';
import HeaderBar from './HeaderBar';

import './LandingPage.css';

const LandingPage = (props) => {
  return (
    <React.Fragment>
      <div className="container">
        <div className="landing-page-skip-link">
          <a href="#welcome">Skip to main content</a>
        </div>
        <HeaderBar />
        <main className="landing-page-main-section" role="main">
          <section className="landing-page-hero-section">
            <h2 id="welcome" className="landing-page-welcome-header">
              You came to the place where freelance beauty professionals and consumers connect in metro Atlanta
            </h2>
            <div className="landing-page-welcome-footer">
              <Link
                to={`/signup`}
                className="landing-page-get-started-link"
                aria-label="Click to get started"
              >
                Get started
              </Link>
              <a
                href="#landing-page-how-works-wrapper"
                className="landing-page-how-works-link"
                aria-label="Click to show how it works section"
              >
                How it works
              </a>
            </div>
          </section>
          <section id="landing-page-how-works-wrapper">
            <div className="landing-page-how-works-section">
              <h3>If you're hiring</h3>
              <div>On SB you will find a list of local freelance
                beauty professionals that provide services
                to people within a comfort of their own
                place.</div>
              <ul>
                <li>
                  Start by signing up with SB
                </li>
                <li>
                  Find a pro that offers the service(s)
                  you are looking for
                </li>
                <li>
                  Connect with the pro to book an
                  appointment
                </li>
                <li>
                  Get ready and enjoy
                </li>
              </ul>
            </div>
            <div className="landing-page-how-works-section">
              <h3>If you're freelancing</h3>
              <div>SB is a great place to advertise your
                services, and to grow your own freelance
                business</div>
              <ol>
                <li>
                  Start by signing up with SB
                </li>
                <li>
                  Add services to your profile
                </li>
                <li>
                  Get ready for emails from potential clients
                </li>
              </ol>
            </div>
          </section>
        </main>
      </div>
    </React.Fragment>
  )
};

const mapStateToProps = state => ({
  signedIn: state.auth.currentUser !== null
});

export default connect(mapStateToProps)(LandingPage);