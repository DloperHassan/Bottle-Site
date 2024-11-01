import Bottole from "../bottole/Bottole";


const Cart = ({cart}) => {
    
    return (
        <div>
            <h2>Cart {cart.length}  </h2>
             <div>
                {
                    cart.map(bottole =>  
                        <div key={bottole.id}>
                        
                            <h1>{bottole.price}</h1>
                            
                        </div>
                    )
                }
             </div>
        </div>
    );
};

export default Cart;