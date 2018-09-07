// tslint:disable-next-line:ordered-imports
import Checkbox from '@material-ui/core/Checkbox';
import IconButton from '@material-ui/core/IconButton';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import CommentIcon from '@material-ui/icons/Comment';
import * as React from 'react';
import { connect } from 'react-redux';
import * as todoActions from './store/actions';
import { RootState } from './store/index';
import { Todo } from './store/models';
import * as selectors from './store/selectors';

const TodoList = ({ todos, toggleTodo }: { todos: Todo[]; toggleTodo: (id: string) => any }) => {
    const handleToggle = (event: React.ChangeEvent<HTMLElement>) => toggleTodo(event.target.id);
    return (
            <List>
                {todos && todos.map((todo) => {
                    return (
                        <ListItem key={todo.id}>
                            <Checkbox id={todo.id} checked={todo.done} onChange={handleToggle} />
                            <ListItemText primary={todo.title} />
                            <ListItemSecondaryAction>
                                <IconButton aria-label="Comments">
                                    <CommentIcon />
                                </IconButton>
                            </ListItemSecondaryAction>
                        </ListItem>
                    )
                })}
            </List>
    );
}

const mapStateToProps = (state: RootState) => ({
    todos: selectors.getFilteredTodos(state),
});

export default connect(mapStateToProps, {
    toggleTodo: (id: string) => todoActions.toggle({ id }),
})(TodoList);