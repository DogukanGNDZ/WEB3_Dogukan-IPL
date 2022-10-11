import { useState } from "react";

const App = () => {
  const [persons, setPersons] = useState([
    { name: "Arto Hellas", phone: 468584635 },
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
      phone: newPhone,
    };

    let exist = false;
    persons.map((person) => {
      if (person.name === nameObject.name) exist = true;
    });

    if (!exist) {
      setPersons(persons.concat(nameObject));
      setNewName("");
      setNewPhone("");
    } else {
      alert(nameObject.name + " already added");
    }
  };

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
            {person.name} {person.phone}
          </p>
        ))}
      </ul>
    </div>
  );
};

export default App;
