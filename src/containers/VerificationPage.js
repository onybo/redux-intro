import React, {PropTypes, Component} from 'react';
import {connect} from 'react-redux';
import {verifyNumber} from '../actions/numbersActions';
import VerificationForm from '../components/VerificationForm';

export class VerificationPage extends Component {
  render() {
    return (
      <VerificationForm 
        company={this.props.company}
        numberList={this.props.numberList}
        verifyNumber={this.props.verifyNumber}
    />
    );
  }
}

// const VerificationPageF = (props) => (
//       <VerificationForm 
//         company={this.props.company}
//         numberList={this.props.numberList}
//         verifyNumber={this.props.numbersActions.verifyNumber}
//     />
//     );

VerificationPage.propTypes = {
  company: PropTypes.object.isRequired,
  numberList: PropTypes.object.isRequired,  
  verifyNumber: PropTypes.func.isRequired
};

const mapStateToProps = (state) => ({
  company: state.company,
  numberList: state.numberList
});
  
export default connect(mapStateToProps, {
  verifyNumber: verifyNumber.request
})(VerificationPage);
