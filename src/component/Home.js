import React from 'react';
import BooksCard from './BooksCard';
export default function Home() {
    return (
        <div style={{minHeight: '100px'}}>
            <h1>Choose Your books</h1>
            <BooksCard />
        </div>
    )
}
