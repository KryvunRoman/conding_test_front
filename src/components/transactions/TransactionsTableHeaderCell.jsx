import React, {Component} from 'react';
import FontAwesome from 'react-fontawesome';

import './TransactionsTableHeaderCell.scss';

const SORTED_KEYS = {
    'Amount': 'amount',
    'Counterparty Name': 'counterparty_name',
    'Date': 'created_at',
    'Payment type': 'operation_type',
    '': 'attachements'
};

export default class TransactionsTableHeaderCell extends Component {
    static propTypes = {
        element: React.PropTypes.node,
        label: React.PropTypes.string.isRequired,
        sortBy: React.PropTypes.string.isRequired,
        isSortASC: React.PropTypes.bool.isRequired,
        onSetSort: React.PropTypes.func.isRequired,
    };

    handleClick = () => {
        this.props.onSetSort(SORTED_KEYS[this.props.label]);
    };

    render() {
        const {
            element,
            label,
            sortBy,
            isSortASC
        } = this.props;

        const sortedByCurrenColumn = sortBy === SORTED_KEYS[label];

        return (
            <th onClick={this.handleClick} >
                {element ? element : label}
                {sortedByCurrenColumn
                    ? < FontAwesome className="caret__sort" name={(isSortASC ? 'caret-down': 'caret-up')} />
                    : <span className="caret__sort__empty"/>
                }
            </th>
        );
    }
};