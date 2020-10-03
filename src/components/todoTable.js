/*
You should be able to:
Add a new task by clicking to the ADD button
View the list of the tasks
delete and edit tasks
*/
import React,{useState} from 'react'


const TodoTable = (props) => {
    const [task,setTask] = useState('');

    const  handleClick = (e) => {
        e.preventDefault();
        let li = document.createElement("li");
        let inputValue = document.getElementById("myInput").value;
        let t = document.createTextNode(inputValue);
        li.appendChild(t);
        if (inputValue === '') {
            alert("You must write something!");
        } else {
            document.getElementById("myUL").appendChild(li);
        }
        document.getElementById("myInput").value = "";

        let span = document.createElement("SPAN");
        let txt = document.createTextNode("\u00D7");
        span.className = "close";
        span.appendChild(txt);
        li.appendChild(span);

    
      }


    return (
        <>
            <div>
                <div id="myDIV" className="header">
                    <h2 style={{ margin: 5 }}>My To Do List</h2>
                    <input type="text" id="myInput" placeholder="Title..." />
                    <span onClick={handleClick} className="addBtn">Add</span>
                </div>
                    <ul id="myUL">
                    </ul>
            </div>

        </>
    )
}

export default TodoTable