import React, {Component} from 'react';

import './SingleTransactionSidebar.scss';

const makeNumberToDigit = num => (num > 9 ? '' : '0') + num;

const parseDate = (dateString = '') => {
    const DATE = new Date(dateString);

    const year = DATE.getFullYear();

    const month = DATE.getMonth() + 1;
    const monthForView = makeNumberToDigit(month);

    const day = DATE.getDate();
    const dayForView = makeNumberToDigit(day);

    return `${dayForView}-${monthForView}-${year}`;
};

const SingleTransactionSidebar = props => {
    const {
        created_at,
        counterparty_name,
        debit,
        credit,
        amount,
        currency,
        operation_type
    } = props.data;

    return (
        <div className="single__sidebar">
            <b>Selected transaction</b>
            <ul>
                <li>Created at: {parseDate(created_at)}</li>
                <li>Counterparty name: {counterparty_name}</li>
                <li>Debit: {debit}</li>
                <li>Credit: {credit}</li>
                <li>Amount: {amount}</li>
                <li>Currency: {currency}</li>
                <li>Operation type: {operation_type}</li>
            </ul>
        </div>
    );

};

SingleTransactionSidebar.propTypes = {
    data: React.PropTypes.object.isRequired,
};

export default SingleTransactionSidebar;