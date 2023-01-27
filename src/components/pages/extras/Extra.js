import React from 'react'
import Card from '../../Card/Card'
import Data from "../../../components/main_page/data.json"
import './Style.css'

function Extra() {
  return (
    <div className='extra-container'>
      <section>
        <h1>Pasteries</h1>
      {
        Data.Pasteries.map(record => {
          return(
            <Card name={record.title} url={record.url} price={record.price}/>
          )
        })
      }
      </section>
      <section>
        <h1>Donuts</h1>
      {
        Data.Donuts.map(record => {
          return(
            <Card name={record.title} url={record.url} price={record.price}/>
          )
        })
      }
      </section>
    </div>
  )
}

export default Extra