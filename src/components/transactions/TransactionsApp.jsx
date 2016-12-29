import React, {Component} from "react";
import axios from 'axios';

import Navbar from './../navbar/Navbar.jsx';
import TransactionsTable from "./TransactionsTable.jsx";
import TransactionsSidebar from "./sidebar/TransactionsSidebar.jsx";


export default class TransactionsApp extends Component {
    state = {
        loadingPage: true,
        selectedTransactions: [],
        transactions: []
    };

    componentDidMount() {
        axios
            .get(`http://private-5d708-interviewfront.apiary-mock.com/transactions`)
            .then(
                result => this.setState({transactions: result.data.transactions})
            )
            .then(
                () => this.setState({loadingPage: false})
            );
    }

    handleSelectedTransactions = (transaction, shiftKeyPressed) => {
        const selectedTransactions = this.state.selectedTransactions;

        const isExistItem = selectedTransactions.some(item => item.id === transaction.id);

        let newList;

        if (shiftKeyPressed) {
            newList = !isExistItem ? [...selectedTransactions, transaction] : selectedTransactions.filter(item => item.id !== transaction.id);
        } else {
            newList = isExistItem ? [] : [transaction];
        }

        this.setState({selectedTransactions: newList});
    };

    render() {
        const {
            loadingPage,
            selectedTransactions,
            transactions
        } = this.state;

        return (
            <section className="container">
                <Navbar/>

                {
                    transactions.length > 0
                        ?
                        <div className="page__content">
                            <TransactionsTable
                                collection={transactions}
                                selectedCollection={selectedTransactions}
                                onSelectedTransactions={this.handleSelectedTransactions}
                            />

                            <TransactionsSidebar collection={selectedTransactions}/>
                        </div>
                        :
                        <h2 className="page__content__empty">
                            {loadingPage
                                ?
                                'Loading...'
                                :
                                'Transactions not found!'
                            }
                        </ h2 >
                }
            </section>

        );
    }

};