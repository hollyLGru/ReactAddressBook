import React, { useState } from "react";
import './App.css';
import ContactCard from './ContactCard';

function App() {
  const [contacts , updateContacts] = useState([]);


  fetch('https://randomuser.me/api?results=25')
    .then((response) => response.json())
      .then((data) => {
        if (!contacts.length){
              updateContacts(data.results)
        }
      });

      if (contacts.length){
        console.log(contacts[1].name)
      }
//map over in JSX 




  return (
    <div className="App">
      <ol>{contacts.map((contacts, index) => {
        return (
          <ContactCard key={index} name={contacts.name}  picture={contacts.picture} phone={contacts.phone} email ={contacts.email} cell={contacts.cell}/>
        )
      })}
      </ol>

    </div>
  );
}

export default App;
