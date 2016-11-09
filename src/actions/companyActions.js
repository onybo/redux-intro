import * as types from '../constants/actionTypes';
import * as CompanyApi from '../api/company';

const loadCompanyFulfilled = (company) => ({type: types.LOAD_COMPANY_FULFILLED, company}) ;

const loadCompanyPending = (company) => ({type: types.LOAD_COMPANY_PENDING, company}) ;

export function loadCompany(companyId) {
  return dispatch => {
    dispatch(loadCompanyPending());
    return CompanyApi.getCompany(companyId).then(company => {
      console.dir(company);
      dispatch(loadCompanyFulfilled(company));
    }).catch(error => {
      throw(error);
    });
  };
}
