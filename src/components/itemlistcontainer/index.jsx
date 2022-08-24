import React from 'react';
import ItemCount from '../itemcount';
import Main from '../main';

export const ItemListContainer = (props) => {

    const onAdd = (quantity) => {
        console.log(`compraste ${quantity} unidades`)
    }

    return(
        <>
        <Main greeting={props.texto} />

        <ItemCount initial={1} stock={10} onAdd={onAdd} />
        </>
    );
}

export default ItemListContainer;
