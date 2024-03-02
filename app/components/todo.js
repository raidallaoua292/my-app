// use client side fetch to get data from server

"use client";

import { useState, useEffect } from "react";
export default function Todo () {
    const [todo, setTodo] = useState({});
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/todos/1',
        {
            next:{
                revalidate: 120
            }
        }
        )
            .then(response => response.json())
            .then(data => setTodo(data));
    }, []);
     
    return (
        <div>
            <h1>{todo.title}</h1>
            <p>Todo page</p>
        </div>
    );
}