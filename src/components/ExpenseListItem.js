import React from 'react';

const ExpenseListItem = (props) => (
    <div>
        { console.log(props.description) }
        { props.description } , { props.amount }
    </div>
);

export default ExpenseListItem;