import { useLoaderData } from "react-router-dom";


const UserDetails = () => {

    const user = useLoaderData();
    console.log(user);
    const {name, phone, email, website} = user;
    return (
        <div>
            <h2>{name}</h2>
            <p>Phone: {phone}</p>
            <p>Email: {email}</p>
            <p>Website: {website}</p>
        </div>
    );
};

export default UserDetails;