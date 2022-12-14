import './style.css'
export const PostCard = ( {post} ) => (
        <div className='post'>
            <div key={post.id} className="post-content">
                <h2>{post.title}</h2>
                <p>{post.body}</p>
            </div>
        </div>
    );
