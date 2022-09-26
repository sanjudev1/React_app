// Write your code here
import './index.css'

const DenominationItem = props => {
  const {withDrawAmount, onUpdateBal} = props
  const {value} = withDrawAmount

  const onUpdateBalAmount = () => {
    onUpdateBal(value)
  }

  return (
    <li>
      <button type="button" className="button" onClick={onUpdateBalAmount}>
        {value}
      </button>
    </li>
  )
}
export default DenominationItem
