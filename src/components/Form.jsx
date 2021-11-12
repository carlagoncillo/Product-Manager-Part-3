import axios from 'axios'
import { useState } from 'react'

const Form = (props) => {
    const [title, setTitle] = useState("")
    const [price, setPrice] = useState(0)
    const [description, setDescription] = useState("")

    const submit = (e) => {
        e.preventDefault();
        const newProduct = {
            title: title,
            price: price,
            description: description
        }
        axios.post('http://localhost:8000/api/products', newProduct)
        .then(res => console.log(res.data.product))
        .catch(err => console.log(err))
    }

    return (
        <div>
            <h1>Product Manager🚀</h1>
            <form onSubmit={submit}>
                <label>Title: </label>
                <input type="text" onChange={e => setTitle(e.target.value)} value={title} style={{marginTop: "10px"}}/>
                <br/>
                <label>Price: </label>
                <input type="Number" onChange={e => setPrice(e.target.value)} value={price} style={{marginTop: "10px", marginRight: "5px"}}/>
                <br/>
                <label style={{marginTop: "100px"}}>Description: </label>
                <input type="text" onChange={e => setDescription(e.target.value)} value={description} style={{marginTop: "10px", marginRight: "51px"}}/>
                <br/>
                <button style={{marginTop: "20px", marginBottom: "20px", height: "30px", width: "100px", border: "2px solid black", boxShadow: "3px 3px 3px black"}}>Create👽</button>
            </form>
        </div>
    )
}

export default Form