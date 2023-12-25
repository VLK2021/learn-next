import Link from "next/link";

const Post = ({post}) => {
    const {id, title, body, userId} = post;


    return (
        <div>
            <Link href={'/'}>Go Back</Link><br/>
            <h1>{id}</h1>
            <h2>{title}</h2>
            <p>{body}</p>
            <strong>Avtor ID: {userId}</strong>
        </div>
    );
};

export default Post;