import React from 'react';
import { Link } from 'react-router-dom';

const ExpenseListItem = ({ description, amount, id, createdAt }) => (
    <div>
        <Link to={`/edit/${id}`}>{description}</Link>
        <p>
            {(amount / 100).toFixed(2) + ' Rs'}, {moment(createdAt).format('MMMM Do, YYYY')}
        </p>
    </div>
);

export default ExpenseListItem;