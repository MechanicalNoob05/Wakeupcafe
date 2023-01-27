import React from 'react'
import './Style.css'

function Checkout() {
  return (
    <div className='checkout-container'>
      <div className='checkout-left'>
        <div className='item-container'>
          <ul>
            <h2>List of Items</h2>
            <li>item1</li>
            <li>item1</li>
            <li>item1</li>
          </ul>
        </div>
      </div>
      <div className='checkout-right'>
        <div className='item-container'>
        <div className='bill-details'>
        <ul className='total-ul'>
          <h2>Bill Amount</h2>
          <li><span>Total</span><span>Rs. 1231239</span></li>
          <li><span>GST</span><span>1 %</span></li>
          <li><span>Grand-Total</span><span>Rs. 1231239</span></li>
        </ul>
        </div>
        <div className='payment-info'>
            <h2>Payment Info</h2>
          <form>
            <input placeholder='Name'></input>
            <input placeholder='Email'></input>
            <input placeholder='Phone no.'></input>
            <div className='radios'>
              <ul>
                <h3>Payment Method</h3>
                <li><label>Cash</label><input type={'radio'}></input></li>
                <li><label>Card</label><input type={'radio'}></input></li>
                <li><label>UPI</label><input type={'radio'}></input></li>
              </ul>
            </div>
            <button>Pay</button>
          </form>
        </div>
        </div>
      </div>
    </div>
  )
}

export default Checkout