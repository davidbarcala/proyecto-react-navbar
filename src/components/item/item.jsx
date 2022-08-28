import React from 'react';

const Item = ({info}) => {


    return(
        <a href="" className='wine'>
           <img src={info.Image} alt="" />
           <p>{info.title}</p>

        </a>
    );


}

export default Item;