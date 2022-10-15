import './CommentList.css' 
function СommentList (props) {
    return(
        <div className={props.id===0? "newComment":""}>
            {props.comment}
        </div>
    )
}

export default СommentList