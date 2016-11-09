const url = 'http://localhost:3010/company';

export const getCompany = (companyId) => (
    fetch(`${url}/${companyId}`)
        .then((response) => response.json())
    );