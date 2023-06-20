import React from 'react';
import Logo from "./Components/LogoSection/Logo";
import Form from './Components/FormSection/Form';
import PackingList from './Components/ListSection/PackingList';
import Status from './Components/StausSection/Status';

function App() {

  const initialItems = [
    { id: 1, description: "Passports", quantity: 2, packed: true },
    { id: 2, description: "Socks", quantity: 12, packed: false },
    { id: 3, description: "T-shirt", quantity: 8, packed: true },
    { id: 4, description: "pen", quantity: 2, packed: false },
    { id: 5, description: "Throuthers", quantity: 2, packed: false },
  ];


  return (
<React.Fragment>
      <div className='app'>
        <Logo />
        <Form />
        <PackingList initialItems={initialItems} />
        <Status />
      </div>

</React.Fragment>

  );
}

export default App;



