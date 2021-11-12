import axios from 'axios'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router'
import { useHistory } from 'react-router'
import { Link } from 'react-router-dom'

const Edit = (props) => {
    const [title, setTitle] = useState("")
    const [price, setPrice] = useState(0)
    const [description, setDescription] = useState("")
    const { id } = useParams();
    const history = useHistory();

    useEffect(() => {
        axios.get('http://localhost:8000/api/products/' + id)
            .then(res => {
                console.log(res.data.product)
                setTitle(res.data.product.title)
                setPrice(res.data.product.price)
                setDescription(res.data.product.description)
            })
            .catch(err => console.error(err));
    }, [id]);
// useEffect, axios.get is getting the specific id and information that i need

    const submit = (e) => {
        e.preventDefault();
        const updateOldProduct = {
            title: title,
            price: price,
            description: description
        }
        axios.put('http://localhost:8000/api/products/' + id, updateOldProduct)
        .then(res => {
            history.push('/products')
        })
        .catch(err => console.log(err))
    }
// axios.put is updating that specific id 

    return(
        <div>
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
                <button style={{marginTop: "20px", marginBottom: "20px", height: "30px", width: "100px", border: "2px solid black", boxShadow: "3px 3px 3px black"}}>Edit👽</button>
            </form>
            <Link to='/products'>Home</Link>
        </div>
    )

}

export default Edit;