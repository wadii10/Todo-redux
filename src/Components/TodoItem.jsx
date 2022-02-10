import { IconButton } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import React from 'react';
import { useDispatch } from 'react-redux';
import { completeTask, deleteTask } from '../redux/action';
import './TodoItem.css'

const TodoItem = ({ task }) => {

    const dispatch = useDispatch()

    return <div className='oneTask' >

        <div>
            <IconButton
                onClick={() => dispatch(completeTask(task.id))}
            >
                {task.isDone ? <CheckCircleOutlineIcon sx={{ color: "green" }} /> : <CheckCircleOutlineIcon />}
            </IconButton>
        </div>

        <div>
            <p>{task.action}</p>
        </div>

        <div>
            <IconButton
                onClick={() => dispatch(deleteTask(task.id))}
            >
                <DeleteIcon />
            </IconButton>
        </div>

    </div>;
};

export default TodoItem;
