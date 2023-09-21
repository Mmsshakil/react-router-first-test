import { useRouteError } from "react-router-dom";


const ErrorPage = () => {

    const error = useRouteError();
    console.error(error);

    return (
        <div>
            <h2>Oopsss....!!!</h2>
            <p><i>{error.data || error.statusText}  </i></p>
        </div>
    );
};

export default ErrorPage;