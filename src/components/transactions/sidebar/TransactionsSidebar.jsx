import React, {Component} from 'react';

import EmptyTransactionSidebar from './EmptyTransactionSidebar.jsx';
import SingleTransactionSidebar from './SingleTransactionSidebar.jsx';
import ListTransactionSidebar from './ListTransactionSidebar.jsx';

import './TransactionsSidebar.scss';

const TransactionsSidebar = props => {
    const {collection} = props;

    const isEmptyList = collection.length === 0;
    const isSingleList = collection.length === 1;
    const isMultiList = collection.length > 1;

    return (
        <div className="content__right">
            <div className="content__top"/>
            <div className="content__body">
                {
                    isEmptyList &&
                    <EmptyTransactionSidebar/>
                }
                {
                    isSingleList &&
                    <SingleTransactionSidebar data={collection[0]}/>
                }
                {
                    isMultiList &&
                    <ListTransactionSidebar list={collection}/>
                }
            </div>
        </div>
    );
};

TransactionsSidebar.propTypes = {
    collection: React.PropTypes.array
};

export default TransactionsSidebar;