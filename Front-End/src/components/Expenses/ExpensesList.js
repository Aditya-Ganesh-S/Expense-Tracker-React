
import ExpenseItem from './ExpenseItem';
import './ExpensesList.css';

function ExpensesList(props) {
    let expensesContent = <h2 className="expenses-list__fallback">No expenses Found.</h2>

    if (props.items.length > 0) {
        expensesContent = props.items.map(expense =>
            <ExpenseItem
                key={expense.id}
                title={expense.title}
                amount={expense.amount}
                date={expense.date}
            />)
    }


    return (
        <div>
            {expensesContent}
        </div>
    )
}

export default ExpensesList;