import React from 'react';
import {shallow} from 'enzyme';
import {expect} from 'chai';
import {VerificationPage} from './VerificationPage';
import VerificationForm from '../components/VerificationForm';

describe('<VerificationPage />', () => {
  it('should contain <VerificationForm />', () => {
    const actions = {
      saveFuelSavings: () => { },
      calculateFuelSavings: () => { }
    };
    const fuelSavings = {};
    const wrapper = shallow(<VerificationPage actions={actions} fuelSavings={fuelSavings}/>);

    expect(wrapper.find(VerificationForm)).to.be.length(1);
  });
});
