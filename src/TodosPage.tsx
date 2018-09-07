import Checkbox from '@material-ui/core/Checkbox';
import IconButton from '@material-ui/core/IconButton';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import CommentIcon from '@material-ui/icons/Comment';
import * as React from 'react';

const TodosPage = () => (
    <React.Fragment>
        <List>
            <ListItem><Checkbox checked={false} />
                <ListItemText primary={`Line item 1`} />
                <ListItemSecondaryAction>
                    <IconButton aria-label="Comments">
                        <CommentIcon />
                    </IconButton>
                </ListItemSecondaryAction></ListItem>
            <ListItem>Todos 22</ListItem>
            <ListItem>Todos3 3</ListItem>
        </List>
    </React.Fragment>
);

export default TodosPage;