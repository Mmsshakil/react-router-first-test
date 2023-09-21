

const User = ({user}) => {

    const {id, name, email, phone} = user;

    return (
        <div>
            <h2>{name}</h2>
            <p>Email: {email}</p>
            <p>Phone: {phone}</p>
            
        </div>
    );
};

export default User;