import React, { Component } from 'react';
import { ListGroup, Form, Button, InputGroup, FormControl } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.css';
import './ListContainer.css';
import './ToDoList.css';

export class ToDoList extends Component {

    constructor(props) {
        super(props);

        this.state = {
            title: this.props.lists['title'],
            itemList: this.props.lists['itemList']
        }

        this.onEnterNew = this.onEnterNew.bind(this);
        this.onRemove = this.props.onRemove.bind(this);

    }

    onCheckItem(ind) {
        let itemList = this.props.lists['itemList'];
        itemList[Object.keys(itemList)[ind]] = !itemList[Object.keys(itemList)[ind]];
        this.setState({ itemList: itemList });
    }

    onEnterNew(e) {
        if (e.key === 'Enter') {
            e.preventDefault();
            let lists = this.props.lists['itemList'];
            let newTaskName = document.getElementById('newTask').value;
            if (newTaskName && newTaskName.length >= 1) {
                lists[newTaskName] = false;
                this.setState({ lists: lists });
                document.getElementById('newTask').value = '';
            }
        }

    }

    render() {
        let p = this.props;

        const itemList = p.lists['itemList'];
        const listTitle = p.lists['title'];

        let fullTable = [];

        const genList = Object.keys(itemList).map((i, ind) =>
            <ListGroup.Item as='li' action disabled={itemList[i]} style={{ display: 'flex', justifyContent: 'center' }}>
                <Form.Check type='checkbox' key={(ind + 1)} onClick={() => this.onCheckItem(ind)}/>
                <span style={{ textDecoration: itemList[Object.keys(itemList)[ind]] ? 'line-through' : null }}>{i}</span>
            </ListGroup.Item>);

        fullTable.push(
            <ListGroup as='ul'>
                <ListGroup.Item as='li' active >
                    {listTitle}
                    <Button variant='danger' onClick={this.onRemove} className="remButtons">Remove</Button>
                </ListGroup.Item>
                {genList}
                <ListGroup.Item variant='primary'>
                    <Form>
                        <Form.Label>Add new task</Form.Label>
                        <InputGroup>
                            <InputGroup.Prepend>
                                <FormControl
                                    id={`newTask`}
                                    placeholder="Enter task name"
                                    aria-label="Username"
                                    aria-describedby="basic-addon1"
                                    onKeyDown={this.onEnterNew}
                                />
                            </InputGroup.Prepend>
                        </InputGroup>
                    </Form>
                </ListGroup.Item>
            </ListGroup>
        );


        return (
            <div>
                {fullTable}
            </div>
        )
    }
}

export default ToDoList
