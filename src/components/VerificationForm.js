import React, {PropTypes} from 'react';
import NumberList from './NumberList';

const VerificationForm = ({company, numberList, verifyNumber}) =>  {
    return (
      <div>
        <h2>Verify the numbers</h2>
        <div>Name: {company.name}</div>
        <div>Company number: {company.companynumber}</div>
        <hr/>
        <NumberList numberList={numberList} verifyNumber={verifyNumber}/>
      </div>
    );
  };

VerificationForm.propTypes = {
  company: PropTypes.object.isRequired,
  numberList: PropTypes.object.isRequired,
  verifyNumber: PropTypes.func.isRequired
};

export default VerificationForm;
