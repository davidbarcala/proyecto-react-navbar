import React, {useEffect,useState} from 'react';
import ItemDetail from '../item detail';

const Wine = {id:1, Image:"https://caminosdelvino.com/wp-content/uploads/2020/06/vinos_tintos.jpg", title:"promo 1" };

export const ItemDetailContainer = () => {
    const [data,setData] = useState({});

    useEffect(() => {
        const getData = new Promise(resolve =>{
            setTimeout(() => {
                resolve(Wine);
            },2000);
        });
        
        getData.then(res => setData(res));
        
            }, [])

    


    return(
        <ItemDetail data= {data} />
    );
}

export default ItemDetailContainer;