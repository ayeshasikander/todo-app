const CompletedTodoList = ({ completeTodo }) => {
    return (
        <div className="list">
            <div className="text-center">
                <h2>Completed Tasks List</h2>
            </div>
            {completeTodo.map((item, index) => (
                <div className="container todo-list" key={index}>
                    <div>
                        <h1>{item.title}</h1>
                        <p>{item.desc}</p>
                        <p>
                            <small>Completed on: {item.completedOn}</small>
                        </p>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default CompletedTodoList;
