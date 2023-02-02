import React from 'react'
import './Style.css'

function Checkout() {


  function allStorage() {

    var archive = {}, // Notice change here
        keys = Object.keys(localStorage),
        i = keys.length;

    while ( i-- ) {
        archive[ keys[i] ] = localStorage.getItem( keys[i] );
    }

    return archive;
}

  //console.log(allStorage())
  const new_string = allStorage()
  console.log(new_string)
  console.log(Object.keys(new_string))
  console.log(JSON.parse(new_string.Espresso))
  // for(let i =0 ; i<new_string.length;i++){
  //   console.log(new_string[i])
  // }
  // console.log(new_string.Espresso.replace('"quantity":','').replace(',"price":',' ').replace('{','').replace('}','').replace('"','').split(' '))

  // var retrive1 = JSON.parse(localStorage.getItem('Americano'))
  return (
    <div className='checkout-container'>
      <div className='checkout-left'>
        <div className='item-container'>
          <ul>
            <h2>List of Items</h2>
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