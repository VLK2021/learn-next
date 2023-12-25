import Link from "next/link";


export default function Home() {
    return (
        <main>
            <h1>hello from client</h1>
            <Link href={'/'}>Home</Link>
            <Link href={'/client/123'}>Client/123</Link>
        </main>
    )
}
