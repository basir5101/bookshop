import React from 'react';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';
import book_list from './fakedata';


export default function BookDetails() {
    const {bookId} = useParams();
    console.log(bookId);
    const book = book_list.find(book => book.id == bookId);
    console.log(book);
    return (
        <div>
            <h1> Details of {book.name} </h1>
            <p>price: {book.price} taka </p>
            <p>writer: {book.writer} </p>
            <Link to ='/information'><button className="btn btn-success">Buy Now</button></Link>
        </div>
    )
}
