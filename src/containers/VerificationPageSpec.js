import React from 'react';
import {shallow} from 'enzyme';
import {expect} from 'chai';
import {VerificationPage} from './VerificationPage';
import VerificationForm from '../components/VerificationForm';

describe('<VerificationPage />', () => {
  it('should contain <VerificationForm />', () => {
    const actions = {
    };
    const company = {};
    const wrapper = shallow(<VerificationPage actions={actions} company={company}/>);

    expect(wrapper.find(VerificationForm)).to.be.length(1);
  });
});
