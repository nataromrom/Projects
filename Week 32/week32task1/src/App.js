import {useState, useEffect} from 'react'
import './App.css';
import СommentList from './СommentList';
import СommentAdd from './СommentAdd';

function App() {
    const [comments, setComments] = useState([])


        const addComment = (commentInput) => {
            commentInput = commentInput.replace(/viagra/ig,"***"); 
            commentInput = commentInput.replace(/XXX/ig,"***"); 
            
            if(commentInput){
                const newComment = {
                    text: commentInput,
                }

                setComments([newComment, ...comments ])
            }
        }

  return (
    <div className="App">
        <h1>Комментарии:</h1>

        {comments.map((comment, index )=>{
            return(
                <СommentList
                comment= {comment.text}
                key={index}
                id={index} />
            )
        }) }
        <СommentAdd addComment={addComment}/>
    </div>
  );
}

export default App;
