import { useState } from "react";
import { addPost } from "../API"; 

export default function CreatePost({token}){
    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('')
    const [price, setPrice] = useState('')
    const [location, setLocation] = useState('')
    const [willDeliver, setWillDeliver] = useState('false')

    async function handleSubmit(e) {
        e.preventDefault();
        await addPost(title,description,price,location,willDeliver,token);
     
      }


    return (
        <form on onSubmit={handleSubmit}>
            <label htmlFor="title">Title</label>
            <input 
            type="text" 
            id="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            />
            <label htmlFor="description">Description</label>
            <input 
            type="text" 
            id="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            />
            <label htmlFor="price">Price</label>
            <input 
            type="text" 
            id="price"
            value={price}
            onChange={(e) => setPrice(e.target.value)}            
            />
            <label htmlFor="location">Location</label>
            <input 
            type="text" 
            id="location"
            value={location}
            onChange={(e) => setLocation(e.target.value)}            
            />
            <label htmlFor="willDeliver">Will Deliver</label>
            <input 
            type="checkbos" 
            id="willDeliver"
            value={willDeliver}
            onChange={(e) => setWillDeliver(e.target.value)}            
            />
            <button type="submit">Create Post</button>
        </form>
    )
}