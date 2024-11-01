 import { useEffect, useState } from 'react';
import './Bottolse.css'
import Bottole from '../bottole/Bottole';
import { addToLocalStorage, getStoredCard } from '../../Utility/LocalStorage';
import Cart from '../cart/Cart';
const Bottolse = () => {
    const [bottles,setBottles] = useState([]);
    const [cart,setCart] = useState([]);
    
    useEffect( () => {
        fetch('Bottoles.json')
        .then(res => res.json())
        .then(data =>setBottles(data))
    } ,[])
    // load cart from localStorage 
    useEffect( () => {

         
         if (bottles.length>0) {
            const cartStringId = getStoredCard();
            const newCart = [];
            for(const id of cartStringId){
                const bottole = bottles.find(bottole => bottole === id)
                newCart.push(bottole)
                console.log(newCart);
            }
            setCart(newCart)
            
         }
         
       
    },[bottles])

    const  handlerAddToCart = bottole => {
        const newCart = [...cart,Bottole]
        setCart(newCart)
        addToLocalStorage(bottole.id)
        console.log(bottole);
    }
    return (
        <>
        <div>
            <h1>hello bottle</h1>
            <Cart cart={cart}></Cart>
            <div className='grit-container'>
                {
                    bottles.map(bottole => <Bottole
                         key={bottole.id}
                          bottole={bottole}
                          handlerAddToCart={handlerAddToCart}
                          >
                            
                          </Bottole>)
                }
            </div>
        </div>
        </>
    );
};

export default Bottolse;