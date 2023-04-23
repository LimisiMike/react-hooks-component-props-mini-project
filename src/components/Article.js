const Article = ({ posts }) => {
  return (
    <article>
      {posts.map((post) => (<h3 key = {post.id}>{post.title}, {post.date}, {post.preview}, {post.minutes}</h3>))}
    </article>
  )
}

export default Article
