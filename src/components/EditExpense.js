import React from 'react';

const EditExpense = (props) => (
    <div>
        Edit Expense! {props.match.params.id}
    </div>
);

export default EditExpense;