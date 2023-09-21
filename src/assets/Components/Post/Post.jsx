import { Link } from "react-router-dom";


const Post = ({post}) => {

    const postStyle ={
        border: '2px solid blue',
        padding: '10px',
        margin: '10px'
    }


    const {id, title , body} = post;
    return (
        <div style={postStyle}>
            <h3>Post ID: {id}</h3>
            <p>{title}</p>
            <Link to={`/post/${id}`}>Details</Link>

        </div>
    );
};

export default Post;