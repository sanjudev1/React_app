// Write your code here
import {Component} from 'react'

import './index.css'

import DenominationItem from '../DenominationItem'

class CashWithdrawal extends Component {
  state = {balanceAmount: 2000}

  onUpdateBalance = value => {
    this.setState(prevState => ({
      balanceAmount: prevState.balanceAmount - value,
    }))
  }

  render() {
    const {balanceAmount} = this.state

    const {denominationsList} = this.props

    return (
      <div className="container">
        <div className="card">
          <div className="name">
            <p className="logo">s</p>
            <h1>Sarah Williams</h1>
          </div>
          <div className="balance">
            <p>Your Balance</p>
            <div>
              <p className="styling">{balanceAmount}</p>
              <p>In Rupees</p>
            </div>
          </div>
          <p className="styling">Withdraw</p>
          <p>CHOOSE SUM (IN RUPEES)</p>
          <ul className="btnContainer">
            {denominationsList.map(widthDraw => (
              <DenominationItem
                withDrawAmount={widthDraw}
                key={widthDraw.id}
                onUpdateBal={this.onUpdateBalance}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}
export default CashWithdrawal
