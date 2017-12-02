import React from 'react';
import {Link} from 'react-router-dom';

const ExpenseListItem = ({ description, amount, id, createdAt }) => (
    <div>
        <Link to={`/edit/${id}`}>{ description }</Link>
        { amount }, { createdAt }
    </div>
);

export default ExpenseListItem;