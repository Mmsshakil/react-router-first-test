import { useLoaderData } from "react-router-dom";


const UserDetails = () => {
    const detailStyle ={
        border: '5px solid green',
        padding: '10px',
        margin: '20px',
        borderRadius: '5px'
    }

    const user = useLoaderData();
    console.log(user);
    const {name, phone, email, website} = user;
    return (
        <div style={detailStyle}>
            <h2>{name}</h2>
            <p>Phone: {phone}</p>
            <p>Email: {email}</p>
            <p>Website: {website}</p>
        </div>
    );
};

export default UserDetails;