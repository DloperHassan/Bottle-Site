import './bottol.css'

const Bottole = ({bottole,handlerAddToCart}) => {
    const {name,img} = bottole;
    return (
        <div className='box'>
            <img src={img} alt="" />
            <h1>Name:{name}</h1>
            <button onClick={()=> handlerAddToCart(bottole)} className='btn'>Add Cart</button>
            
        </div>
    );
};

export default Bottole;