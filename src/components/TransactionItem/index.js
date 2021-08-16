import './index.css'

const TransactionItem = props => {
  const {transactionItem, onDeleteImg} = props
  const {transactionId, titleInput, amountInput, optionId} = transactionItem

  const deleteTransaction = () => {
    onDeleteImg(transactionId)
  }

  return (
    <li className="item-container">
      <p className="item">{titleInput}</p>
      <p className="item">{amountInput}</p>
      <p className="item">{optionId}</p>

      <button
        type="button"
        className="delete-button"
        onClick={deleteTransaction}
        testid="delete"
      >
        <img
          src="https://assets.ccbp.in/frontend/react-js/money-manager/delete.png"
          alt="delete"
          className="delete-img"
        />
      </button>
    </li>
  )
}
export default TransactionItem
