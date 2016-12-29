import React, {Component} from 'react';

import './ListTransactionSidebar.scss';

const ListTransactionSidebar = props => {
    const {list} = props;

    return (
        <div className="list__sidebar">
            <b>Selected transaction's ids:</b>
            <ul>
                {
                    list.map(item => (
                            <li key={item.id}>
                                {item.id}
                            </li>
                        )
                    )
                }
            </ul>
        </div>
    );
};

ListTransactionSidebar.propTypes = {
    list: React.PropTypes.array.isRequired,
};

export default ListTransactionSidebar;