
import BlogList from './BlogList';
import useFetch from './useFetch';
const Home = () => {

    const{data:blogs,error,isLoading} = useFetch('http://localhost:8000/blogs');
    
    return ( 
        <div className = "home">
            {error && <div><h2>{error} </h2></div>}
            {isLoading && <div><h3>Loading...</h3></div>}
           {blogs && <BlogList blogs={blogs} title={"All Blogs!"}/>} 
    
       
        </div>
     );
}
 
export default Home;