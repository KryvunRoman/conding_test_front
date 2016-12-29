import React, {Component} from 'react';
import FontAwesome from 'react-fontawesome';

import TransactionsTableHeaderCell from './TransactionsTableHeaderCell.jsx';

const COLUMN_LABELS = [
    {
        id: 0,
        label: 'Date',
        element: <span>Date</span>
    }, {
        id: 1, label: 'Counterparty Name',
        element: <span>Counterparty Name</span>
    }, {
        id: 2,
        label: 'Payment type',
        element: <span>Payment type</span>
    }, {
        id: 3,
        label: 'Amount',
        element: <span>Amount</span>
    }, {
        id: 4,
        label: '',
        element: (
            <span className="attachements__icon">
                <FontAwesome name="paperclip" rotate={90}/>
            </span>
        )
    },
];

export default class TransactionsTable extends Component {

    static propTypes = {
        isSortASC: React.PropTypes.bool,
        sortBy: React.PropTypes.string,
        onSetSort: React.PropTypes.func.isRequired,
    };

    render() {
        const {
            isSortASC,
            sortBy,
            onSetSort
        } = this.props;

        return (
            <thead>
            <tr>
                {
                    COLUMN_LABELS.map(item =>
                        <TransactionsTableHeaderCell
                            key={item.id}
                            label={item.label}
                            element={item.element}
                            sortBy={sortBy}
                            isSortASC={isSortASC}
                            onSetSort={onSetSort}
                        />
                    )
                }

            </tr>
            </thead>
        );
    }
};