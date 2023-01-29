import React, { useState } from 'react'
import Card from '../../Card/Card'
import Data from "../../../components/main_page/data.json"
import './Style.css'

function Extra() {

  const [rValue ,setRValue] = useState()
 // const result = rValue.split(","); 
  console.log(rValue)
  return (
    <div className='extra-container'>
      <section>
        <h1>Pasteries</h1>
      {
        Data.Pasteries.map(record => {
          return(
            <Card key={record.title} name={record.title} url={record.url} price={record.price} cardvalue={setRValue}/>
          )
        })
      }
      </section>
      <section>
        <h1>Donuts</h1>
      {
        Data.Donuts.map(record => {
          return(
            <Card key={record.title} name={record.title} url={record.url} price={record.price} cardvalue={setRValue}/>
          )
        })
      }
      </section>
    </div>
  )
}

export default Extra