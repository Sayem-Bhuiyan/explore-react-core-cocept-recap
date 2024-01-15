import './Post.css'

export default function Post({post_info}){
    const {id, body, title, userId} = post_info;
    return(
        <div className='post'>
            <h3>Title: {title}</h3>
            <p>User Id: {id} </p>
            <p>Post Id: {userId} </p>
            <p>{body}</p>
        </div>
    )
}