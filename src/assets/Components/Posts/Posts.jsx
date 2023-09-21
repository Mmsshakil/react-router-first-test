import { useLoaderData } from "react-router-dom";
import Post from "../Post/Post";


const Posts = () => {

    const posts = useLoaderData();
    console.log(posts);
    return (
        <div>
            <p>Posts: {posts.length}</p>
            <div  className="Users">
                {
                    posts.map(post => <Post key={post.id} post={post}></Post>)
                }
            </div>

        </div>
    );
};

export default Posts;