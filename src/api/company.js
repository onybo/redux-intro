const companyUrl = 'http://localhost:3010/company';

export const getCompany = (companyId) => (
    fetch(`${companyUrl}/${companyId}`)
        .then(function(response) {
            console.log("response is: ");
            console.dir(response);
            return response.json()
        })
    );