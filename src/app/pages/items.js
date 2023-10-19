// pages/items.js
import { useState, useEffect } from 'react';
import axios from 'axios';

export default function Items() {
    const [items, setItems] = useState([]);
    const [name, setName] = useState("");

    useEffect(() => {
        async function fetchData() {
            const response = await axios.get('/api/items');
            setItems(response.data);
        }
        fetchData();
    }, []);

    const handleSubmit = async () => {
        const response = await axios.post('/api/items', { name });
        setItems([...items, response.data]);
        setName('');
    };

    return (
        <div>
            <h1>Items</h1>
            <ul>
                {items.map(item => (
                    <li key={item.id}>{item.name}</li>
                ))}
            </ul>
            <input
                value={name}
                onChange={e => setName(e.target.value)}
                placeholder="New item name"
            />
            <button onClick={handleSubmit}>Add Item</button>
        </div>
    );
}
