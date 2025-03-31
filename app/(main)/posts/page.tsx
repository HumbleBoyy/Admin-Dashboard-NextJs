import BackButton from '@/components/backbutton/BackButton'
import PostsTable from '@/components/posts/PostsTable'
import React from 'react'

const PostPage = () => {
  return (
    <>
      <BackButton text='Go Back'/>
      <PostsTable title='Posts'/>
    </>
    
  )
}

export default PostPage