import React, { useState } from 'react'
import Card from '../../Card/Card'
import Data from "../../../components/main_page/data.json"
import './Style.css'

function Drinks() {
  const [rValue ,setRValue] = useState()
 // const result = rValue.split(","); 
  console.log(rValue)
  return (
    <div className='drinks-container'>
      <section>
        <h1>Coffee</h1>
      {
        Data.Coffee.map(record => {
          return(
            <Card key={record.title} name={record.title} url={record.url} price={record.price} cardvalue={setRValue}/>
          )
        })
      }
      </section>
      <section>
        <h1>Milkshakes</h1>
      {
        Data.Shakes.map(record => {
          return(
            <Card key={record.title} name={record.title} url={record.url} price={record.price} cardvalue={setRValue}/>
          )
        })
      }
      </section>
    </div>
  )
}

export default Drinks