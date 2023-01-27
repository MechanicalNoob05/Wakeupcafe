import React from 'react'
import Card from '../../Card/Card'
import Data from "../../../components/main_page/data.json"
import './Style.css'

function Drinks() {
  return (
    <div className='drinks-container'>
      <section>
        <h1>Coffee</h1>
      {
        Data.Coffee.map(record => {
          return(
            <Card name={record.title} url={record.url} price={record.price}/>
          )
        })
      }
      </section>
      <section>
        <h1>Milkshakes</h1>
      {
        Data.Shakes.map(record => {
          return(
            <Card name={record.title} url={record.url} price={record.price}/>
          )
        })
      }
      </section>
    </div>
  )
}

export default Drinks