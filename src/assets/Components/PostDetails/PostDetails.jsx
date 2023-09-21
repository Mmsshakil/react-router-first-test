import { useLoaderData } from "react-router-dom";


const PostDetails = () => {

    const post = useLoaderData();
    const { id, title, body } = post;

    const detailStyle = {
        border: '5px solid blue',
        padding: '10px',
        margin: '20px 300px',
        borderRadius: '5px'
    }

    return (
        <div style={detailStyle}>
            <h3>Post ID: {id}</h3>
            <h5>{title}</h5>
            <p>{body}</p>
        </div>
    );
};

export default PostDetails;