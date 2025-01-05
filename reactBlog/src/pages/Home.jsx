import React,  { useEffect , useState } from 'react'
import { Container, PostCards } from '../components'
import { AppwriteService } from '../appwrite/config'

function Home() {
  const [posts , setPosts] = useState()

  useEffect(() => {
    AppwriteService.getPosts().then((post) => {
      if ( post ){
        setPosts(post)
      }
    })
  }, [])
  
  if (posts.length === 0) {
    return (
        <div className="w-full py-8 mt-4 text-center">
            <Container>
                <div className="flex flex-wrap">
                    <div className="p-2 w-full">
                        <h1 className="text-2xl font-bold hover:text-gray-500">
                            Login : No posts to Read 
                        </h1>
                    </div>
                </div>
            </Container>
        </div>
    )
}

return (
  <div>
    <Container>
      <div>
        {posts.map((post) => ( 
          <div key={post.$id}>
              <PostCards {...post} />
          </div>
        ))}
      </div>
    </Container>
  </div>
)}


export default Home