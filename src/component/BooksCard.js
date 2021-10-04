import React from 'react';
import { Link } from 'react-router-dom';
import book_list from './fakedata';

export default function BooksCard() {
    return (
        <div>
            <div className="card-group">
                {
                    book_list.map(book => (
                    <div key= {book.id} className="card">
                        <img src={book.image} className="card-img-top" alt="..." />
                        <div className="card-body">
                        <Link to = {`/book-details/${book.id}`}>
                            <h5 className="card-title">Name:  {book.name} </h5>
                        </Link>
                        <p className="card-text"> <strong>Price:  {book.price} </strong> </p>
                        </div>
                    </div>
                    ))
                }
            </div>
        </div>
    )
}
