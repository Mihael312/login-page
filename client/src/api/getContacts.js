export const getContacts = (requestedUser) => {
    return fetch(`http://localhost:5000/getContacts/?requestedUser=${requestedUser}`)
    .then(response => {
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return response.json();
    })
    .catch(error => {
        console.error('Error:', error);
        throw error;
    });
  };