import { useParams } from "react-router-dom";
import useFetch from "./useFetch";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

const BlogDetails = () => {


    const { id } = useParams();
    const {data:blog,error,isPending} = useFetch('http://localhost:8000/blogs/' + id);
    const history = useHistory();
    const handleDelete = () => {
    
        fetch('http://localhost:8000/blogs/' + blog.id, {
            method:'DELETE'
        })
        .then(() => {
            history.push('/')
        })

        
    }

    return ( 
        <div className="blog-details">
           {isPending && <div>Loading...</div>}
           {error && <div>{error} </div>}
           {blog && (
            <article>
                <h2>{blog.title} </h2> 
                 <h3>{blog.author} </h3>
                 <p>{blog.body} </p>
                 <button onClick={handleDelete}>Delete</button>
            </article>
           ) }
        </div>
     );
}
 
export default BlogDetails;