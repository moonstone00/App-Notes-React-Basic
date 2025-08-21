
export default function Card({ title, body, createdAt }) {
    return (
        <div className='border' >
            <p>{title}</p>
            <p>{body}</p>
            <p>{createdAt}</p>  
        </div>
    )
}