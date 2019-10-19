import React, { Fragment, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { getCurrentProfile } from '../../action/profile';

const Dashboard = ({ auth: { user }, getCurrentProfile, profile }) => {
  useEffect(() => {
    getCurrentProfile();
    //eslint-disable-next-line
  }, []);

  return (
    <Fragment>
      <h1 className="large text-primary">Dashboard</h1>
      <p className="lead">
        <i className="fas fa-user"></i> Welcome {user && user.name}
      </p>
      <div className="dash-buttons">
        <Link to="/profile" className="btn btn-light">
          <i className="fas fa-user-circle text-primary"></i> Edit Profile
        </Link>
        <Link to="/experience" className="btn btn-light">
          <i className="fab fa-black-tie text-primary"></i> Add Experience
        </Link>
        <Link to="/education" className="btn btn-light">
          <i className="fas fa-graduation-cap text-primary"></i> Add Education
        </Link>
      </div>

      <h2 className="my-2">Experience Credentials</h2>
      <table className="table">
        <thead>
          <tr>
            <th>Company</th>
            <th className="hide-sm">Title</th>
            <th className="hide-sm">Years</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Tech Guy Web Solutions</td>
            <td className="hide-sm">Senior Developer</td>
            <td className="hide-sm">02-03-2009 - 01-02-2014</td>
            <td>
              <i
                className="fas fa-trash-alt"
                style={{ cursor: 'pointer', color: 'red' }}
              />
            </td>
          </tr>
          <tr>
            <td>Traversy Media</td>
            <td className="hide-sm">Instructor & Developer</td>
            <td className="hide-sm">02-03-2015 - Now</td>
            <td>
              <i
                className="fas fa-trash-alt"
                style={{ cursor: 'pointer', color: 'red' }}
              />
            </td>
          </tr>
        </tbody>
      </table>

      <h2 className="my-2">Education Credentials</h2>
      <table className="table">
        <thead>
          <tr>
            <th>School</th>
            <th className="hide-sm">Degree</th>
            <th className="hide-sm">Years</th>
            <th />
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Northern Essex</td>
            <td className="hide-sm">Associates</td>
            <td className="hide-sm">02-03-2007 - 01-02-2009</td>
            <td>
              <i
                className="fas fa-trash-alt"
                style={{ cursor: 'pointer', color: 'red' }}
              />
            </td>
          </tr>
        </tbody>
      </table>

      <div className="my-2">
        <button className="btn btn-danger">
          <i className="fas fa-user-minus"></i> Delete My Account
        </button>
      </div>
    </Fragment>
  );
};

Dashboard.propTypes = {
  auth: PropTypes.object.isRequired,
  getCurrentProfile: PropTypes.func.isRequired,
  profile: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth,
  profile: state.profile
});

export default connect(
  mapStateToProps,
  { getCurrentProfile }
)(Dashboard);
