import Link from "next/link";

import './globals.css';


const NotFoundPage = () => {

    return (
        <div className={'not-found-page'}>
            <h1>Ups.....</h1>
            <h2>Not found Page(!!!!!</h2>
            <p>Go to <Link href={'/'}>general page</Link></p>
        </div>
    )
}

export default NotFoundPage;