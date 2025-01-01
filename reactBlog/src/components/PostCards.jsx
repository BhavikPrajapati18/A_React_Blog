import React from 'react'
import appwriteService from '../appwrite/config'
import {Link} from 'react-router-dom'

function PostCards({
  featuredImage,
  $id,
  title
}) {
  return (
    <div>
      <div>
        <Link to={`/post/${$id}`}>
        <img src={appwriteService.getFilePreview(featuredImage)} alt="" />
        </Link>
      </div>    
      <div>
        <h1>{title}</h1>
      </div>
    </div>
  )
}


export default PostCards
