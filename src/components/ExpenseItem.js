import "./ExpenseItem.css";
import ExpenseDate from "./ExpenseDate";

//components can's just use data stored in other componenets
// so these functions can have attributes which become the attributes of the html elements
function ExpenseItem(props) {
  // You can just return one root element i.e you can just return one div

  const expenseTitle = props.title;
  const expenseAmount = props.amount;

  //html class are called class name in jsx although class can be used but class name is good practice
  return (
    <div className="expense-item">
      <ExpenseDate date={props.date}></ExpenseDate>
      <div className="expense-item__description">
        <h2>{expenseTitle}</h2>
        <div className="expense-item__price">${expenseAmount}</div>
      </div>
    </div>
  );
}

export default ExpenseItem;
