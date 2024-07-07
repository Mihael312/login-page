export const registration = (registeredUser) => {
  return fetch("http://localhost:5000/register", {
      method: "POST",
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(registeredUser)
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
