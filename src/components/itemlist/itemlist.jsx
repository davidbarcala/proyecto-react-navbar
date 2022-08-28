import Item from "../item/item";
import React from 'react';

const ItemList = ({data = []}) => {
    return(
        data.map(wine => <Item key={wine.id} info={wine}  /> )
    );

}

export default ItemList;