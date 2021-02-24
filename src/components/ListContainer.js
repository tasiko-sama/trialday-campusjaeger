import React, { Component } from 'react';
import { ToDoList } from '../components/ToDoList';
import { Button, Badge } from 'react-bootstrap';

import './ListContainer.css';

export class ListContainer extends Component {

    constructor(props) {
        super(props);

        this.state = {
            lists: [
                {
                    'title': 'Groceries',
                    'itemList': {
                        'Apples': false,
                        'Eggs': false,
                        'Salad': false,
                        'Tuna': false,
                        'Butter': false,
                    },
                },
                {
                    'title': 'Uni',
                    'itemList': {
                        'Get books': false,
                        'Attend Math101': false,
                        'Check grades': false,
                        'Finish assignment': false,
                    },
                },
                {
                    'title': 'Other',
                    'itemList': {
                        'Cras justo odio': false,
                        'Dapibus ac facilisis in': false,
                        'Morbi leo risus': false,
                        'Porta ac conectetur': false,
                        'Vestibilum at eros': false
                    },
                },
            ],

        };
    }

    // onEditList(incrementer) {
    //     let { numOfLists } = this.state;
    //     numOfLists = numOfLists + 1 * incrementer;
    //     this.setState({ numOfLists: numOfLists });
    // }

    onSwitchCols(col) {
        let { lists } = this.state;
        let tmp = lists[col];
        lists[col] = lists[col+1];
        lists[col+1] = tmp;
        this.setState( { lists: lists } );
    }

    onHandleRemove(i) {
        let { lists } = this.state;
        lists.splice(i, 1);
        this.setState( { lists: lists } );
    }

    onAddList() {
        
    }

    render() {
        let s = this.state;
        const { lists } = s;

        const generatedLists = [];
        for (let i = 0; i < lists.length; i++) {
            generatedLists.push(<ToDoList key={i} lists={lists[i]} index={i} onRemove={() => this.onHandleRemove(i)}/>);
            if (i!== lists.length-1) generatedLists.push(<Button variant="light" onClick={() => this.onSwitchCols(i)}> &lt; &gt; </Button>);
        }

        return (
            <div className="container">
                <Button variant="success" onClick={this.onAddList}>Create New List</Button>
                <div className="container-lists">
                    {generatedLists}
                </div>
                {/* <Button style={{ height: '60px' }} onClick={() => this.onEditList(1)}>Add List</Button> */}
            </div>
        )
    }
}

export default ListContainer
