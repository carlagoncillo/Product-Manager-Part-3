import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { Link, useParams } from "react-router-dom";
import { useHistory } from 'react-router'
    
const Product = (props) => {
    const [product, setProduct] = useState({})
    const { id } = useParams();
    const history = useHistory()
    
    useEffect(() => {
        axios.get('http://localhost:8000/api/products/' + id)
            .then(res => setProduct(res.data.product))
            .catch(err => console.error(err));
    }, [id]);

    const deleteProduct = (deleteId) => {
        axios.delete('http://localhost:8000/api/products/' + deleteId, deleteProduct)
        .then(res => {
            history.push('/products')
        })
        .catch(err => console.log(err))
    }
    
    return (
        <div>
            <h1 style={{textDecoration:"underline"}}>Product 🔥</h1>
            <h2>Title: {product.title}</h2>
            <h3>Price: ${product.price}</h3>
            <h3>Description: {product.description}</h3>
            <Link to='/products'>Home</Link>
            <br/>
            <br/>
            <button onClick={() => {deleteProduct(product._id)}} style={{border: "2px solid black", boxShadow: "3px 3px 3px black"}}> Delete </button>
        </div>
    )
}
    
export default Product;