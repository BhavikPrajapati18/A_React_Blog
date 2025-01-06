import React,  { useEffect , useState } from 'react'
import { Container, PostCards } from '../components'
import { AppwriteService } from '../appwrite/config'

function AllPosts() {
    const [AllPosts, setAllPosts] = useState(null)
    useEffect(() => {
      AppwriteService.getPosts([]).then((post) => { 
        if ( post ){
          setAllPosts(post.documents)
        }
      });
    }, [])
    
  return (
    <div className='py-8'>
      <Container>
      <div> 
        {post.map((post) =>  (
          <div key={post.$id}>
            <PostCard post = {post}/>
          </div>
        ))}
      </div>
      </Container>
      
    </div>
  )
}

export default AllPosts
