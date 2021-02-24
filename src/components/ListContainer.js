import React, { Component } from 'react';
import { ToDoList } from '../components/ToDoList';
import { Button } from 'react-bootstrap';

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

        this.onAddList = this.onAddList.bind(this);
    }

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
        // hard-coded
        let { lists } = this.state;
        const newList = {
            'title': 'Work',
            'itemList': {
                'Call Jen': false,
                'Respond to team lead': false,
                'Meeting at 4:30': false
            }
        };
        lists.push(newList);
        this.setState( { lists: lists } );
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
            </div>
        )
    }
}

export default ListContainer
