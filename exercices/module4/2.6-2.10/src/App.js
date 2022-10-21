import { useState, useEffect } from "react";
import axios from "axios";
import PhoneService from "./services/phonebook";
import phonebook from "./services/phonebook";

const App = () => {
  const [persons, setPersons] = useState([
    { name: "Arto Hellas", number: 468584635 },
  ]);
  const [newName, setNewName] = useState("");
  const [newPhone, setNewPhone] = useState("");

  const handleNoteChange = (event) => {
    console.log(event.target.value);
    setNewName(event.target.value);
  };

  const handleNoteChange2 = (event) => {
    console.log(event.target.value);
    setNewPhone(event.target.value);
  };

  const addNote = (event) => {
    event.preventDefault();
    const nameObject = {
      name: newName,
      number: newPhone,
    };

    let exist = false;
    persons.map((person) => {
      if (person.name === nameObject.name) exist = true;
    });

    if (!exist) {
      PhoneService.create(nameObject).then((response) => {
        setPersons(persons.concat(response));
        setNewName("");
        setNewPhone("");
      });
    } else {
      alert(nameObject.name + " already added");
    }
  };

  useEffect(() => {
    axios.get("http://localhost:3001/persons").then((response) => {
      setPersons(response.data);
    });
  }, []);

  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={addNote}>
        <div>
          name: <input value={newName} onChange={handleNoteChange} />
          <br />
          phone: <input value={newPhone} onChange={handleNoteChange2} />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      <ul>
        {persons.map((person) => (
          <p>
            {person.name} {person.number}
          </p>
        ))}
      </ul>
    </div>
  );
};

export default App;
