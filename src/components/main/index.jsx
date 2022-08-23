import React from 'react';


export const Main = ({greeting}) => {
    
    return( 
        <main>
            <h1 className="cont_principal">{greeting}</h1>
        </main>
    );
}

export default Main;