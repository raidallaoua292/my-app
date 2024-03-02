import next from "next";
import PostDetails from "@/app/components/postDetails";
import { Suspense } from "react";

export default async function PostDetailsPage({ params }) {
    const { postId } = params;
    return (
        <div className="h-screen flex flex-col items-center p-28">
            <h1 className="text-4xl font-bold mb-5">Post Details</h1>
            <Suspense>
                <PostDetails postID={postId} />
            </Suspense>
            
            {/* <p>{props.params.postId}</p> */}
        </div>
    );
}