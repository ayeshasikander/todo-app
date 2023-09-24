import React from 'react'
import { useTaskCount } from './TaskCountContext';
const Header = () => {
    const { taskCount } = useTaskCount();
    return (
        <div>
            <div className="container">
                <header className="d-flex flex-wrap justify-content-center py-3 mb-4 border-bottom">
                    <a href="/" className="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-dark text-decoration-none">
                        <span className="fs-4">ToDo's</span>
                    </a>

                    <ul className="nav nav-pills">
                        <button type="button" className="btn btn-primary">
                            TaskCount <span className="badge text-bg-secondary">{taskCount}</span>
                        </button>
                    </ul>
                </header>
            </div>
        </div>
    )
}

export default Header
