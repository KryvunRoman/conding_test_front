import React, {Component} from 'react';

import TransactionsTableRow from './TransactionsTableRow.jsx';
import TransactionsTableHeader from './TransactionsTableHeader.jsx';

import './TransactionsTable.scss';

export default class TransactionsTable extends Component {
    static propTypes = {
        selectedCollection: React.PropTypes.array,
        collection: React.PropTypes.array,
        onSelectedTransactions: React.PropTypes.func.isRequired
    };

    state = {
        sortBy: 'created_at',
        isSortASC: true
    };

    handleSetSort = sortBy => {
        const isSortASC = sortBy === this.state.sortBy ? !this.state.isSortASC : true;

        this.setState({sortBy, isSortASC});
    };

    sortAmount = (a, b) => a.amount - b.amount;

    sortAttachements = (a, b) => a.attachements.length - b.attachements.length;

    sortDate = (a, b) => new Date(a.created_at) - new Date(b.created_at);

    sortText = (a, b, key) => {
        if (a[key] < b[key]) return -1;
        if (a[key] > b[key]) return 1;
        return 0;
    };

    isSelectedTask = itemId => this.props.selectedCollection.some(item => item.id === itemId);

    render() {
        const {
            collection
        } = this.props;

        const {
            sortBy,
            isSortASC
        } = this.state;

        const colectionForView = [...collection];

        return (
            <div className="content__center">
                <div className="content__top"/>

                <div className="content__body">
                    <table>
                        <TransactionsTableHeader
                            sortBy={sortBy}
                            isSortASC={isSortASC}
                            onSetSort={this.handleSetSort}
                        />

                        <tbody>
                        {
                            colectionForView
                                .sort((a, b) => {
                                    switch (sortBy) {
                                        case 'amount':
                                            return isSortASC ? this.sortAmount(a, b) : this.sortAmount(b, a);
                                        case 'attachements':
                                            return isSortASC ? this.sortAttachements(a, b) : this.sortAttachements(b, a);
                                        case 'created_at':
                                            return isSortASC ? this.sortDate(a, b) : this.sortDate(b, a);
                                        case 'counterparty_name':
                                        case 'operation_type':
                                            return isSortASC ? this.sortText(a, b, sortBy) : this.sortText(b, a, sortBy);
                                    }
                                })
                                .map(item =>
                                    <TransactionsTableRow
                                        key={item.id}
                                        item={item}
                                        amount={item.amount}
                                        attachements={item.attachements}
                                        counterparty_name={item.counterparty_name}
                                        credit={item.credit}
                                        currency={item.currency}
                                        date={item.created_at}
                                        isSelected={this.isSelectedTask(item.id)}
                                        operation_type={item.operation_type}
                                        onSelectedTransactions={this.props.onSelectedTransactions}
                                    />
                                )
                        }
                        </tbody>
                    </table>
                </div>
            </div>
        );
    }
};