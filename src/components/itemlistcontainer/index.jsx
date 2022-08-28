import { useEffect, useState } from 'react';
import ItemCount from '../itemcount';
import Main from '../main';
import ItemList from '../itemlist/itemlist';


const Wines = [

    {id:1, Image:"https://caminosdelvino.com/wp-content/uploads/2020/06/vinos_tintos.jpg", title:"promo 1" },
    {id:2, Image:"https://caminosdelvino.com/wp-content/uploads/2020/06/vinos_tintos.jpg", title:"promo 2" },
    {id:3, Image:"https://caminosdelvino.com/wp-content/uploads/2020/06/vinos_tintos.jpg", title:"promo 3" },

];

export const ItemListContainer = (props) => {
    const [data, setData] = useState([]);

    useEffect(() => {
const getData = new Promise(resolve =>{
    setTimeout(() => {
        resolve(Wines);
    },2000);
});

getData.then(res => setData(res));

    }, [])

    const onAdd = (quantity) => {
        console.log(`compraste ${quantity} unidades`)
    }

    return(
        <>
        <Main greeting={props.texto} />

        <ItemCount initial={1} stock={10} onAdd={onAdd} />
        <ItemList data = {data} />
        </>
    );
}

export default ItemListContainer;
