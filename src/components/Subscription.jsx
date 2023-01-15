import React from 'react'
import { subscriptions } from '../constants'
import styles from '../style'
import ItemCard from './ItemCard'

const Subscription = () => {
  return (
    <section id='subscriptions'>
      <div className={`flex flex-col ${styles.paddingY} items-center`} >
        <h2 className={`${styles.heading2} text-center w-full`} >Remember, Order only what you need!</h2>
        <p className={`${styles.paragraph} mt-5 text-center`}>We don't want any of the goodies to go to waste.
          Subscribe to our services that cater your needs.
        </p>
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