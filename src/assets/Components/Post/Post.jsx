

const Post = ({post}) => {
    const {id, title , body} = post;
    return (
        <div>
            <h3>{title}</h3>
            <p>{body}</p>
            
        </div>
    );
};

export default Post;