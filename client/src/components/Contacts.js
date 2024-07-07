import { useEffect, useState } from "react";
import { addContact } from "../api/addContact";
import { getContacts } from "../api/getContacts";

export const Contacts = () => {
  const [contactInfo, setContactInfo] = useState({
    name: "",
    number: "",
  });
  const [showInput, setShowInput] = useState(false);
  const [contacts, setContacts] = useState([]);

  useEffect(() => {
    const requestedUser = localStorage.getItem("username")
    getContacts(requestedUser).then((data) =>
      setContacts(data)
    );
  }, []);

  const handleContactInfo = (event) => {
    const { name, value } = event.target;
    setContactInfo((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleShowInput = () => {
    setShowInput(!showInput);
  };

  const handleAddContact = async (event) => {
    event.preventDefault();
    const username = localStorage.getItem("username");
    const data = await addContact(username, contactInfo);
    setContacts(data);
    console.log(contacts)
  };

  return (
    <>
      {showInput && (
        <form onSubmit={handleAddContact} className="my-5">
          <input
            name="name"
            onChange={handleContactInfo}
            value={contactInfo.name}
            placeholder="Name"
            className="bg-gray-100"
          />
          <input
            name="number"
            onChange={handleContactInfo}
            value={contactInfo.number}
            placeholder="Number"
            className="bg-gray-100"
          />
          <button className="bg-gray-200" type="submit">
            gomb
          </button>
        </form>
      )}
      <div className="flex justify-center items-center w-6/12">
        <table className="w-full mx-5 table-auto bg-gray-200 text-gray-500 text-center border border-gray-900">
          <thead>
            <tr className="border border-gray-900">
              <th>Name</th>
              <th>Number</th>
            </tr>
          </thead>
          <tbody>
            {contacts &&
              contacts.map((contact, index) => (
                <tr key={index} className="border border-gray-900">
                  <td>{contact.name}</td>
                  <td>{contact.number}</td>
                </tr>
              ))}
          </tbody>
        </table>
        <button
          onClick={handleShowInput}
          className="bg-gray-200 rounded-xl border-gray-600  border-2 p-1"
        >
          Add contact
        </button>
      </div>
    </>
  );
};
