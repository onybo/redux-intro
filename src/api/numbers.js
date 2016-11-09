const url = 'http://localhost:3010/company';

export const getNumbers = (companyId) => (
    fetch(`${url}/${companyId}/number`)
        .then((response) => response.json())
    );