// import { useState, useEffect } from "react";
import Todo from "../components/todo";
import Link from "next/link";


export default async function Posts() {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts')
    const posts = await response.json();

    const postJSX = posts.map(post => {
        return (
            <Link href={`/posts/${post.id}`} className="w-[70%]">
            <div className="w-full bg-white p-3 mt-10 rounded-lg text-neutral-900 cursor-pointer " key={post.id}>
                <h2 className="font-bold text-2xl" >{post.title}</h2>
                <p>{post.body}</p>
            </div>
            </Link>
        );
    });
    // console.log(posts);
    return (
        <>
            <div className="bg-teal-700">
                <h1>Posts</h1>
                {/* *** posts */}
                <div  className="flex flex-col items-center justify-center">
                    {postJSX}
                </div>
                {/* posts *** */}
            </div>
            
        </>
    );
}