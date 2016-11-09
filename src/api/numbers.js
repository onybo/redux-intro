const companyUrl = 'http://localhost:3010/company';
const numberUrl = 'http://localhost:3010/number';

export const getNumbers = (companyId) => (
    fetch(`${companyUrl}/${companyId}/number`)
        .then((response) => response.json())
    );


export const verifyNumber = (number) => {
    console.log("in verifyNumber");
    console.dir(number);
    return (
    fetch(`${numberUrl}/${number.id}`, {
	        method: 'put',
	        body: JSON.stringify(
                Object.assign({}, 
                    {
                        id: number.id,
                        number: number.number,
                        verified: true,
                        companyId: number.companyId
                     })),
            headers: new Headers({
		        'Content-Type': 'application/json'
	        })    
            })
        .then((response) => response.json())
    );
}    