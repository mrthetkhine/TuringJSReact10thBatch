export const dynamic = 'force-dynamic'
export default async function Page() {
    //console.log('call vercel blog');
    const data = await fetch('https://api.vercel.app/blog')
    const posts = await data.json()
    return (
        <ul>
            {posts.map((post:any) => (
                <li key={post.id}>{post.title}</li>
            ))}
        </ul>
    )
}