import React, {PropTypes} from 'react';

const NumberList = ({numberList}) =>  {
    return (
      <div>
        <h6>Numbers to verify: </h6>

        <table className="table table-bordered">
          <thead>
            <tr>
              <th>number</th>
              <th>verified</th>
            </tr>
            {numberList.numbers.map((n) => {
              return (
                <tr key={n.id}>
                  <td>{n.number}</td>
                  <td><input type="checkbox" checked={n.verified} /> </td>
                </tr>
              );
            })}
          </thead>
          <tbody>
          </tbody>
        </table>
      </div>
    );
  };

NumberList.propTypes = {
  numberList: PropTypes.object.isRequired
};

export default NumberList;
