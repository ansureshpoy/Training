import React, { useState } from 'react';
import axios from 'axios';
 
const AddBook = () => {
    const [title, setTitle] = useState('');
    const [author, setAuthor] = useState('');
 
    const handleAddBook = async () => {
        const query = `
            mutation AddBook($book: BookInput!) {
                addBook(input: $book) {
                    id
                    title
                    author
                }
            }
        `;
 
        const variables = {
            book: {
                title,
                author
            }
        };
 
        try {
            const response = await axios.post('http://localhost:4000/graphql', {
                query,
                variables
            });
            console.log('Book added:', response.data);
            alert('Book added successfully!');
        } catch (error) {
            console.error('Error adding book:', error);
            alert('Failed to add book.');
        }
    };
 
    return (
        <div style={{ margin: '20px' }}>
            <div>
                <label htmlFor="title">Title:</label>
                <input
                    type="text"
                    id="title"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    style={{ margin: '5px' }}
                />
            </div>
            <div>
                <label htmlFor="author">Author:</label>
                <input
                    type="text"
                    id="author"
                    value={author}
                    onChange={(e) => setAuthor(e.target.value)}
                    style={{ margin: '5px' }}
                />
            </div>
            <button onClick={handleAddBook} style={{ marginTop: '10px', padding: '5px 10px' }}>
                Add Book
            </button>
        </div>
    );
};
 
export default AddBook;
 