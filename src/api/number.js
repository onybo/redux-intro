const companyUrl = 'http://localhost:3010/company';
const numberUrl = 'http://localhost:3010/number';

const getNumbers = (companyId) => (
    fetch(`${companyUrl}/${companyId}/number`)
        .then((response) => response.json())
    );


const verifyNumber = (number) => {
    return (
    fetch(`${numberUrl}/${number.id}`, {
            method: 'put',
            body: JSON.stringify(
                Object.assign({}, 
                    {
                        id: number.id,
                        number: number.number,
                        verified: number.verified,
                        companyId: number.companyId
                     })),
            headers: new Headers({
                'Content-Type': 'application/json'
            })    
            })
        .then((response) => response.json(),
              (error) => console.log('failed' + error)) // eslint-disable-line no-console
    );
};    

export default {
    getNumbers,
    verifyNumber
};