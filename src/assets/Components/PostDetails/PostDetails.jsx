import { useLoaderData, useNavigate } from "react-router-dom";


const PostDetails = () => {

    const post = useLoaderData();
    const { id, title, body } = post;

    const navigate = useNavigate();

    const detailStyle = {
        border: '5px solid blue',
        padding: '10px',
        margin: '20px 300px',
        borderRadius: '5px'
    }

    const handleGoBack = () => {
        navigate(-1);
    }

    return (
        <div style={detailStyle}>
            <h3>Post ID: {id}</h3>
            <h5>{title}</h5>
            <p>{body}</p>
            <button onClick={handleGoBack}>Go Back</button>
        </div>
    );
};

export default PostDetails;