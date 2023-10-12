import './Item.css'
import { Link } from 'react-router-dom'

const Item = ({ id, title, price, image, stock }) => {
    return (
        <div className='ItemCard'>
            <img className='imgProducto' src={image} alt={title} />
            <h3 className='tituloCard'>{title}</h3>
            <p className='precio'>Precio: S$U {price} </p> 
            <p className='Udisponibles'>Stock Disponible: {stock}</p>          
            <Link to={`/item/${id}`} className='btnProducto'>Ver Detalles</Link>
        </div>
    )
}

export default Item