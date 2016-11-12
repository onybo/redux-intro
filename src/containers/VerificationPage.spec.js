import React from 'react';
import {shallow} from 'enzyme';
import {expect} from 'chai';
import {VerificationPage} from './VerificationPage';
import VerificationForm from '../components/VerificationForm';

describe('<VerificationPage />', () => {
  it('should contain <VerificationForm />', () => {
    const actions = {
      verifyNumber: () => 0
    };
    const company = {};
    const wrapper = shallow(<VerificationPage numberList={{}} company={company} 
        numbersActions={actions}/>);
    expect(wrapper.find(VerificationForm)).to.be.length(1);
  });
});
