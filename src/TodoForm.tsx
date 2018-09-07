// import FormHelperText from '@material-ui/core/FormHelperText';
import Button from '@material-ui/core/Button';
import FormControl from '@material-ui/core/FormControl';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import * as React from 'react';
import { connect } from 'react-redux';
import * as  todosActions from './store/actions';
import { RootState } from './store/index';
interface IProps {
    addTodo: (title: string) => any;
};
interface IState {
    title: string;
};

class TodoForm extends React.Component<IProps, IState> {
    public readonly state: Readonly<IState> = { title: '' };

    public render() {
        const { title } = this.state;

        return (
            <form>
                <FormControl>
                    <InputLabel htmlFor="title-simple">Title</InputLabel>
                    <Input id="title-simple" value={this.state.title} onChange={this.handleTitleChange} />
                </FormControl>
                <Button type="button" onClick={this.handleAdd} disabled={!title}>Add</Button>
            </form>
        );
    }

    protected handleTitleChange: React.ChangeEventHandler<HTMLTextAreaElement | HTMLInputElement> = ev => {
        this.setState({ title: ev.currentTarget.value });
    };

    protected handleAdd = () => {
        this.props.addTodo(this.state.title);
        this.setState({ title: '' });
    };
}

const mapStateToProps = (state: RootState) => ({});

export default connect(mapStateToProps, {
    addTodo: (title: string) => todosActions.add({ title }),
})(TodoForm);