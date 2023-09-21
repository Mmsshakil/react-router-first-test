import { useLoaderData } from "react-router-dom";
import Post from "../Post/Post";


const Posts = () => {
    const posts = useLoaderData();
    console.log(posts);
    return (
        <div>
            <p>Posts: {posts.length}</p>
            {
                posts.map(posts => <Post key={posts.id} post={posts}></Post>)
            }
        </div>
    );
};

export default Posts;