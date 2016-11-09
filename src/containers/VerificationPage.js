import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as companyActions from '../actions/companyActions';
import * as numbersActions from '../actions/numbersActions';
import VerificationForm from '../components/VerificationForm';

export const VerificationPage = (props) => {
  return (
    <VerificationForm 
      company={props.company}
      numberList={props.numberList}
      verifyNumber={props.numbersActions.verifyNumber}
    />
  );
};

VerificationPage.propTypes = {
  company: PropTypes.object.isRequired,
  numberList: PropTypes.object.isRequired
};

function mapStateToProps(state) {
  return {
    company: state.company,
    numberList: state.numberList
  };
}

function mapDispatchToProps(dispatch) {
  return {
    companyActions: bindActionCreators(companyActions, dispatch),
    numbersActions: bindActionCreators(numbersActions, dispatch)
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(VerificationPage);
