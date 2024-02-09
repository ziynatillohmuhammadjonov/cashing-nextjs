async function getData(): Promise<Posts> {
  const res = await fetch('https://dummyjson.com/posts')

  if (!res.ok) {
    throw new Error('Failed to fetch data')
  }

  return res.json()
}

export default async function Page() {
  const data = await getData()

  return <main className=" container px-6 mx-auto grid grid-cols-3 mt-14 gap-x-6 items-start max-[1100px]:grid-cols-2 max-[600px]:grid-cols-1">
    {data.posts.map((post: Post) => (
      <article className="flex flex-col items-center justify-center" key={post.id}>
        <h2 className="my-4 text-2xl">
          {post.title}
        </h2>
        <p>{post.body}</p>
        <div className="flex gap-1 w-full text-left px-3 text-blue-500">
        {post.tags.map((tag)=>(
          <span key={tag}>#{tag}</span>
        ))}
        </div>
      </article>


    ))}

  </main>
}