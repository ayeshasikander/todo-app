import React, { createContext, useContext, useState, useEffect } from 'react';

const TaskCountContext = createContext();

export function useTaskCount() {
    return useContext(TaskCountContext);
}

export function TaskCountProvider({ children }) {
    const [taskCount, setTaskCount] = useState(() => {
        const savedTaskCount = localStorage.getItem('taskCount');
        return savedTaskCount ? parseInt(savedTaskCount) : 0;
    });

    useEffect(() => {
        localStorage.setItem('taskCount', taskCount);
    }, [taskCount]);

    const incrementTaskCount = () => {
        setTaskCount((prevCount) => prevCount + 1);
    };

    const decrementTaskCount = () => {
        setTaskCount((prevCount) => Math.max(0, prevCount - 1));
    };

    return (
        <TaskCountContext.Provider value={{ taskCount, incrementTaskCount, decrementTaskCount }}>
            {children}
        </TaskCountContext.Provider>
    );
}
