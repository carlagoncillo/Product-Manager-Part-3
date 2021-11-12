import React, {useEffect, useState} from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

const List = (props) => {
    const [data, setData] = useState([]);
    const destroyFromDB = Id => {
        setData(data.filter(product => product._id !== Id));
    }

    useEffect(() => {
        axios.get('http://localhost:8000/api/products')
            .then(res => {
                setData(res.data.products)
            })
    }, [])
    console.log(data)

    const deleteProduct = (deleteId) => {
        axios.delete('http://localhost:8000/api/products/' + deleteId)
        .then(res => {
            console.log(res.data)
            destroyFromDB(deleteId)
        })
        .catch(err => console.log(err))
    }

    return(
        <div>
            <h1>All Products👩‍🚀🌏</h1>
            <hr/>
            {
                data.map((product, idx) =>(
                    <div key={idx} >
                        <h2>Product #{idx+1} 🔥</h2>
                        <h3>Check Product: <Link to={`/products/${product._id}`}>{product.title}</Link> ⚡</h3>
                        <Link to={`/products/edit/${product._id}`}>Edit</Link>
                        <br/>
                        <button onClick={() => {deleteProduct(product._id)}}> Delete </button>
                        <hr/>
                    </div>
                ))
            }
        </div>
    )
}
export default List;

