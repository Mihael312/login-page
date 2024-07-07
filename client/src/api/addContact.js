export const addContact = (username, contactInfo) => {
    return fetch("http://localhost:5000/addContact", {
        method: "POST",
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            username: username,
            contactInfo: contactInfo,
        }
        )
    })
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
  