import React, {Component} from 'react';
import FontAwesome from 'react-fontawesome';

import './TransactionsTableRow.scss';

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

export default class TransactionsTableRow extends Component {
    static propTypes = {
        amount: React.PropTypes.string.isRequired,
        attachements: React.PropTypes.array.isRequired,
        currency: React.PropTypes.string.isRequired,
        credit: React.PropTypes.string.isRequired,
        counterparty_name: React.PropTypes.string.isRequired,
        date: React.PropTypes.string.isRequired,
        isSelected: React.PropTypes.bool.isRequired,
        item: React.PropTypes.object.isRequired,
        operation_type: React.PropTypes.string.isRequired,
        onSelectedTransactions: React.PropTypes.func.isRequired,
    };

    constructor(props) {
        super(props);

        this.state = {
            selected: false
        };
    }

    handleClick = event => {
        this.props.onSelectedTransactions(this.props.item, event.shiftKey);

        this.setState({selected: !this.state.selected});
    };

    render() {
        const {
            amount,
            attachements,
            currency,
            credit,
            counterparty_name,
            date,
            isSelected,
            operation_type,
        } = this.props;

        return (
            <tr
                onClick={this.handleClick}
                className={isSelected ? 'selected': ''}
            >
                <td>{parseDate(date)}</td>
                <td>{counterparty_name}</td>
                <td>{operation_type}</td>
                <td>
                    {amount}{currency}
                    {
                        credit === 'true'
                            ?
                            < FontAwesome
                                className="credit"
                                name="caret-up"
                            />
                            :
                            < FontAwesome
                                className="debit"
                                name="caret-down"
                            />
                    }

                </td>
                <td>
                    {
                        attachements.map((attachement, index) =>
                            <a
                                key={index}
                                className="attachements__icon"
                                href={attachement.url}
                                target="_blank"
                                title="Open attachements in new tab"
                            >
                                <FontAwesome
                                    name="paperclip"
                                    rotate={90}
                                />
                            </a>
                        )
                    }

                    <span className="attachements__count">{attachements.length}</span>
                </td>
            </tr>

        );
    }
};