import React from "react";
import Card from "./Card";
import contacts from "../contacts";
// import Avatar from "./Avatar";

// var templink = "https://avatars.githubusercontent.com/u/54506860?v=4";

function createCard(contact) {
    return (
        <Card 
            key={contact.id}
            ID={contact.id}
            name={contact.name}
            imgsrc={contact.imgsrc}
            work={contact.work}
            concept={contact.concept}            
        />
    );
}

function App() {
    return (
        <div>
            <h1 className="heading">My Contacts</h1>

            {/* <Avatar imgsrc={templink}/> */}

            {contacts.map(createCard)}
            
            {/* <Card 
            name={contacts[0].name}
            imgsrc={contacts[0].imgsrc}
            work={contacts[0].work}
            concept={contacts[0].concept}
            />
            <Card 
            name={contacts[1].name}
            imgsrc={contacts[1].imgsrc}
            work={contacts[1].work}
            concept={contacts[1].concept}    
            />
            <Card 
            name={contacts[2].name}
            imgsrc={contacts[2].imgsrc}
            work={contacts[2].work}
            concept={contacts[2].concept}    
            /> */}
        </div>
    );
}

export default App;