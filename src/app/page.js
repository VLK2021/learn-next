import Link from "next/link";


async function fetchData() {
    const res = await fetch('https://jsonplaceholder.typicode.com/posts');
    const result = await res.json();
    return result;
}

export default async function Home() {
    const posts = await fetchData();


    return (
        <main>
            {posts &&
            posts.map(obj =>
                <div key={obj.id} className={'post'}>
                    <h2>{obj.title}</h2>
                    <p>{obj.body}</p>
                    <Link href={'/post/' + obj.id}>Details</Link>
                </div>)
            }
        </main>
    )
}
