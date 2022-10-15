import './CommentList.css' 
import {useEffect, useState} from 'react'


function СommentAdd (props) {
    const [commentInput, setCommentInput] = useState('')

    const handleChange = (e) => {
        setCommentInput(e.currentTarget.value);
    }

    
    const addComment = () => {
        props.addComment(commentInput);
        setCommentInput("");
    }

    const handleKeyDown = (e) => {
        if (e.key === 'Enter') {
            addComment();
        }
    }

    return(
        <div>
            <input onKeyDown={handleKeyDown}
                value ={commentInput}
                type="text"
                onChange = {handleChange}
                placeholder = "Введите комментарий"
            />
            <button className="bn632-hover bn24" onClick={addComment}>Добавить</button>
        </div>
    )

}

export default СommentAdd