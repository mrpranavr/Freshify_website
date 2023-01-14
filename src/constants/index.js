import { fresh, organic, twoMilk, fourMilk, milkChicken  } from "../assets"


export const navLinks = [
    {
        id: 'about',
        title: 'About'
    },
    {
        id: 'download',
        title: 'Download'
    },
    {
        id: 'subscriptions',
        title: 'Subscriptions'
    },
    {
        id: 'contact',
        title: 'Contact Us'
    },
]

export const benefits = [
    {
        id: "benefit-1",
        icon: organic,
        title: "Organic",
        content: "No preservatives, No hormones, Just 100% organic goodness. We take special care and completely avoid and preservatives or hormones."
    },
    {
        id: "benefit-2",
        icon: fresh,
        title: "Fresh",
        content: "Pure freshness, just the thing you people deserve. We make sure our products are just out of nature and straight to you."
    },
    {
        id: "benefit-3",
        icon: organic,
        title: "Fast Delivery",
        content: "We make sure you get your freshness right on time, every time. No delays here !"
    },
]

export const subscriptions = [
    {
        id: 'subsription-1',
        name: 'Weekly milk pack',
        amount: '₹ 825',
        days: 15,
        image: twoMilk
    },
    {
        id: 'subsription-2',
        name: 'Monthly milk pack',
        amount: '₹ 1560',
        days: 31,
        image: fourMilk
    },
    {
        id: 'subsription-3',
        name: 'Weekly Combo pack',
        amount: '₹ 825',
        days: 7,
        image: milkChicken
    }
]