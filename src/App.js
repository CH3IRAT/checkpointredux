import {useState} from 'react'
import{useDispatch,useSelector} from 'react-redux'
import { addtask,donetask } from './js/actions/Action';
import {Card,Button} from "react-bootstrap"
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
const dispatch = useDispatch()
const todos = useSelector(state => state.todos)
const [text,setText] = useState('')
  return (
    <div  style={{display:'flex', flexWrap:'wrap'}} >

<Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src="https://cdn.pixabay.com/photo/2020/01/21/18/39/todo-4783676__340.png" />
  <Card.Body>
    <Card.Title>INPUT</Card.Title>
    <Card.Text>
    <input type='text' onChange={(e)=>setText({text:e.target.value,id:Math.random(),isDone:false})}/> 

    </Card.Text>
    <Button variant="primary"   onClick={()=> dispatch(addtask(text))}> Add
</Button>
  </Card.Body>
</Card>




{todos.map(el => <div> 
  <Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src="https://cdn.pixabay.com/photo/2020/01/21/18/39/todo-4783676__340.png"/>
  <Card.Body>
    <Card.Title>{el.text}</Card.Title>
    <Card.Text>
    </Card.Text>
    <Button variant="primary" onClick={()=> dispatch(donetask(el.id))}>  {el.isDone?"notDONE" : "done"} </Button>

  </Card.Body>
</Card>

 
 
  </div> )}

    




    </div>
  );
}

export default App;
