import React, {PropTypes} from 'react';

const VerificationForm = ({company}) =>  {
    return (
      <div>
        <h2>Verify the numbers</h2>
        <div>Name: {company.name}</div>
        <div>Company number: {company.companynumber}</div>
        <hr/>
        <div>Numbers to verify: </div>
      </div>
    );
  };

VerificationForm.propTypes = {
  company: PropTypes.object.isRequired
};

export default VerificationForm;
