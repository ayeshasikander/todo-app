import React, { useEffect, useState } from 'react'
import TodoItem from './TodoItem';
import { useTaskCount } from './TaskCountContext';
import Label from './Label';
import Textarea from './Textarea';
import Button from './Button';
import CompletedTodoList from './CompletedTodoList';

const Addtodo = () => {
    const [isCompleteScreen, setIscompleteScreen] = useState(false);
    const [allTodos, setTodos] = useState([])
    const [newTitle, setNewTitle] = useState("")
    const [desc, setDesc] = useState("")
    const [completeTodo, setCompleteTodo] = useState([])
    const { incrementTaskCount, decrementTaskCount } = useTaskCount();
    const handleAddTodo = (e) => {
        e.preventDefault();
        if (!newTitle || !desc) {
            alert("Title or Description not be blank");
        }
        else {
            let newTodo = {
                title: newTitle,
                desc: desc
            }

            let updatedTodoArr = [...allTodos];
            updatedTodoArr.push(newTodo);
            setTodos(updatedTodoArr);

            setNewTitle("");
            setDesc("");
            incrementTaskCount();
            localStorage.setItem('todolist', JSON.stringify(updatedTodoArr))
        }
    };
    const handleDeleteTodo = (index) => {
        let removeTodoArr = [...allTodos];
        removeTodoArr.splice(index, 1);
        localStorage.setItem('todolist', JSON.stringify(removeTodoArr));
        setTodos(removeTodoArr);
        decrementTaskCount();
    }
    const handleCompleteTodo = (index) => {
        let now = new Date();
        let dd = now.getDate();
        let mm = now.getMonth() + 1;
        let yyyy = now.getFullYear();
        let hr = now.getHours();
        let min = now.getMinutes();
        let sec = now.getSeconds();
        let completedOn = dd + "/" + mm + "/" + yyyy + " at " + hr + ":" + min + ":" + sec;

        let filteredItem = {
            ...allTodos[index],
            completedOn: completedOn
        }
        let updateCompletedArr = [...completeTodo];
        updateCompletedArr.push(filteredItem);
        setCompleteTodo(updateCompletedArr);
        handleDeleteTodo(index);
        localStorage.setItem('completeTodo', JSON.stringify(updateCompletedArr))
    }

    useEffect(() => {
        let savedTodo = JSON.parse(localStorage.getItem('todolist'));
        let savedCompleteTodo = JSON.parse(localStorage.getItem('completeTodo'));
        if (savedTodo) {
            setTodos(savedTodo);
        }
        if (savedCompleteTodo) {
            setCompleteTodo(savedCompleteTodo)
        }
    }, [])

    return (
        <div className='container'>
            <div className='text-center'><Label text="Add ToDo's" fontSize="35px" /></div>
            <form className="row g-3" >
                <div className="col-md-6">
                    <Label text="Title" />
                    <Textarea value={newTitle} onChange={(e) => setNewTitle(e.target.value)} placeholder="what's the task title?" />
                </div>
                <div className="col-md-6">
                    <Label text="Description" />
                    <Textarea value={desc} onChange={(e) => setDesc(e.target.value)} placeholder="what's the task description?" />
                </div>
                <div className="col-12 d-flex" style={{ justifyContent: "flex-end" }}>
                    <Button type="submit" label="Add Todo" onClick={handleAddTodo} />

                </div>
            </form>
            <hr />
            <div className='text-center'>
                <Button label="Todo" isActive={!isCompleteScreen} onClick={() => setIscompleteScreen(false)} />
                <Button label="Complete Task" isActive={!isCompleteScreen} onClick={() => setIscompleteScreen(true)} />
            </div>
            <hr />
            <div className='list'>
                <div className='text-center'><Label text="ToDo's List" fontSize="35px" /></div>
                {isCompleteScreen === false && (allTodos.length === 0 ? (
                    <p className='text-center p-4 m-4'>No Todo work to display</p>
                ) : (
                    allTodos.map((item, index) => (
                        <TodoItem
                            key={index}
                            item={item}
                            index={index}
                            onDelete={handleDeleteTodo}
                            onComplete={handleCompleteTodo}
                        />
                    ))
                ))}
            </div>

            {isCompleteScreen === true && <CompletedTodoList completeTodo={completeTodo} />}

        </div >
    )
}

export default Addtodo
