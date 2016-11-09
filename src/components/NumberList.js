import React, {PropTypes} from 'react';

const NumberList = ({numberList, verifyNumber}) =>  {
    return (
      <div>
        <h6>Numbers to verify: </h6>

        <table className="table table-bordered table-striped">
          <thead>
            <tr>
              <th>number</th>
              <th>verified</th>
            </tr>
          </thead>
          <tbody>
            {numberList.numbers.map((n) => {
              return (
                <tr key={n.id}>
                  <td>{n.number}</td>
                  <td>                     
                      <input type="checkbox" 
                        checked={n.verified} 
                        onChange={ () => verifyNumber(n)} 
                        readOnly={n.isPending} /> 
                      {n.isPending ? ' update pending' : ''} 
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    );
  };

NumberList.propTypes = {
  numberList: PropTypes.object.isRequired,
  verifyNumber: PropTypes.func.isRequired
};

export default NumberList;
