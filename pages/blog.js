function Blog({ posts }) {
    return (
        <ul>
            {posts.map((post) => (
                <li>
                    {post.title}
                    {post.body}
                </li>
            ))}
        </ul>
    )
}

export async function getStaticProps() {
    // const res = await fetch('http://.../posts')
    // const posts = await res.json()

    const posts = [
        {
            title:"みちるん",
            body:"紹介文"
        },
        {
            title:"もんちゃん",
            body:"紹介文"
        },
        {
            title:"きのぴー",
            body:"紹介文"
        },
    ]

    return{
        props: {
            posts,
        },
    }
}

export default Blog