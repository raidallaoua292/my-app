import next from "next";

export default async function PostDetails({ postID }) {
    await new Promise((resolve) => {
        setTimeout(() => {
            resolve();
        }, 5000);
    })
    
    const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${postID}`,
    {
        next:{
            revalidate: 120
        }
    }
    );
    const post = await response.json();
    return (
        <div >
            <h2 className="text-2xl font-bold mb-3">{post.title}</h2>
            <p>{post.body}</p>
            {/* <p>{props.params.postId}</p> */}
        </div>
    );
}