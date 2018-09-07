
import Grid from '@material-ui/core/Grid';
import * as React from 'react';
import TodoForm from './TodoForm';
import TodoList from './TodoList';

const TodosPage = () => (
    <Grid container={true} spacing={24} direction="column" alignItems="center">
        <Grid item={true} xs={12}>
            <TodoForm />
        </Grid>
        <Grid item={true} xs={12}>
            <TodoList />
        </Grid>
    </Grid>
);

export default TodosPage;