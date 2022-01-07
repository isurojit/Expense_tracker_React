import './ExpenseItem.css';

function ExpenseItem() {
  return (
    <div className='expense-item'>
      <div>January 6th 2022</div>
      <div className='expense-item__description'>
        <h2>Health Insurance</h2>
        <div className='expense-item__price'>&#8377; 15400</div>
      </div>
    </div>
  );
}

export default ExpenseItem;
