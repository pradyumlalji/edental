
import BlogLeftContainer from '../BlogLeftContainer/BlogLeftContainer';
import BlogRightContainer from '../BlogRightContainer/BlogRightContainer';



import './Blog.css';

function Blog() {
    return (
      <div className="blogMainBody">
      <h2 className="Heading" >Learn more about your oral Health</h2>
      <div className="BlogBody" >
           <BlogLeftContainer/>
          <BlogRightContainer/>
    </div>
    <div className="BlogBody see-tickets" >
    <div className="Arrow">

      <button>see all tickets <span className="ArrowBtn">→</span></button>
   
      
    </div>
    </div>

    
    
      
    </div>
      
      
    );
  }

  export default Blog;
