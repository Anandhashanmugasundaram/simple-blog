import { Link } from "react-router-dom/cjs/react-router-dom";

const NotFound = () => {
    return ( 
        <div className="not-found">
            <h3>Sorry</h3>
            <h4>This Page Doesn't Exist</h4>
           <Link to={"/"} >Home Page</Link>
        </div>
     );
}
 
export default NotFound;