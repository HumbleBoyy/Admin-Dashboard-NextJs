import BackButton from '@/components/backbutton/BackButton'
import PostPagenation from '@/components/posts/PostPagenation'
import PostsTable from '@/components/posts/PostsTable'


const PostPage = () => {
  return (
    <>
      <BackButton text='Go Back'/>
      <PostsTable title='Posts'/>
      <PostPagenation/>
    </>
    
  )
}

export default PostPage