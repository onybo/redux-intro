import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as actions from '../actions/companyActions';
import VerificationForm from '../components/VerificationForm';

export const VerificationPage = (props) => {
  return (
    <VerificationForm 
      company={props.company}
    />
  );
};

VerificationPage.propTypes = {
  company: PropTypes.object.isRequired
};

function mapStateToProps(state) {
  return {
    company: state.company
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(actions, dispatch)
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(VerificationPage);
