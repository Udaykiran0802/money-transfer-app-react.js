import {Component} from 'react'
import './index.css'

class MoneyDetails extends Component {
  calculatedIncome = () => {
    const {transactionList} = this.props
    let incomeAmount = 0
    transactionList.forEach(each => {
      if (each.optionId === 'Income') {
        incomeAmount += each.amountInput
      }
    })
    return incomeAmount
  }

  calculatedExpenses = () => {
    const {transactionList} = this.props
    let expensesAmount = 0
    transactionList.forEach(each => {
      if (each.optionId === 'Expenses') {
        expensesAmount += each.amountInput
      }
    })
    return expensesAmount
  }

  render() {
    const incomeAmount = this.calculatedIncome()
    const expensesAmount = this.calculatedExpenses()
    const balance = incomeAmount - expensesAmount

    return (
      <div className="money-detail-container">
        <div className="card balance-card">
          <div className="image-container">
            <img
              src="https://assets.ccbp.in/frontend/react-js/money-manager/balance-image.png "
              alt="balance"
              className="image-edit"
            />
          </div>
          <div className="balance-amount-container">
            <p className="balance-type">Your Balance</p>
            <p className="amount" testid="balanceAmount">
              Rs {balance}
            </p>
          </div>
        </div>
        <div className="card income-card">
          <div className="image-container">
            <img
              src="https://assets.ccbp.in/frontend/react-js/money-manager/income-image.png"
              alt="income"
              className="image-edit"
            />
          </div>
          <div className="balance-amount-container">
            <p className="balance-type">Your Income</p>
            <p className="amount" testid="incomeAmount">
              Rs {incomeAmount}
            </p>
          </div>
        </div>
        <div className="card expense-card">
          <div className="image-container">
            <img
              src="https://assets.ccbp.in/frontend/react-js/money-manager/expenses-image.png "
              alt="expenses"
              className="image-edit"
            />
          </div>
          <div className="balance-amount-container">
            <p className="balance-type">Your Expenses</p>
            <p className="amount" testid="expensesAmount">
              Rs {expensesAmount}
            </p>
          </div>
        </div>
      </div>
    )
  }
}
export default MoneyDetails
