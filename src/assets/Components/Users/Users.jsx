import { useLoaderData } from "react-router-dom";


const Users = () => {

    const users = useLoaderData();
    console.log(users);

    return (
        <div>
            <h3>Users: {users.length}</h3>
        </div>
    );
};

export default Users;