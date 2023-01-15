import React from 'react'
import { subscriptions } from '../constants'
import styles from '../style'
import ItemCard from './ItemCard'

const Subscription = () => {
  return (
    <section>
      <div className={`flex flex-col ${styles.paddingY} items-center`} >
        <h2 className={`${styles.heading2} text-center w-full`} >Remember , Order only what you need !</h2>
      
        <div className={`flex flex-wrap w-full mt-10 gap-[50px] justify-center`}>
          {subscriptions.map((subs, index) => (
            <ItemCard key={subs.id} {...subs} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Subscription