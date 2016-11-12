import React, {PropTypes, Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as numbersActions from '../actions/numbersActions';
import VerificationForm from '../components/VerificationForm';

export class VerificationPage extends Component {
  render() {
    return (
      <VerificationForm 
        company={this.props.company}
        numberList={this.props.numberList}
        verifyNumber={this.props.numbersActions.verifyNumber}
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
  numbersActions: PropTypes.shape({
    verifyNumber: PropTypes.func.isRequired
  }).isRequired
};

const mapStateToProps = (state) => ({
  company: state.company,
  numberList: state.numberList
});

const mapDispatchToProps = (dispatch) => ({
  numbersActions: bindActionCreators(numbersActions, dispatch)
});
  
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(VerificationPage);
