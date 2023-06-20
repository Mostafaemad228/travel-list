import React , { Fragment } from 'react';

function Items({ initialItems }) {
    return (
        <React.Fragment>
           {initialItems.map(item => 
               <li key={item.id}  >  
                   <span style={item.packed ? { textDecoration: 'line-through' } : {}} > {item.quantity}  {item.description}</span> 
                   
               </li>
                )}
        </React.Fragment>
    )
}

export default Items
