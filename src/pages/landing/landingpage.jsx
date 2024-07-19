import React from 'react'
// import NAVBAR from '../../layouts/navbar/navbar'
import FoodMenu from '../../layouts/foodMenu/foodMenu'
import PersonalizedWebsiteSection from '../../layouts/personalizedWebsiteSection/personalizedWebsiteSection'
import NewsletterSignup from '../../layouts/newsletterSignup/newsletterSignup'
import Testimonials from '../../layouts/testimonials/testimonials'
import RiderVendorSignup from '../../layouts/riderVendorSignup/riderVendorSignup'
import OurVendors from '../../layouts/ourVendors/ourVendors'
import HomePage from '../../layouts/homePage/homePage'
import FoodBuddy from '../../layouts/foodBuddy/foodBuddy'
// import OrderQuickFood from '../../layouts/orderQuickFood/orderQuickFood'


export default function landingpage() {
  return (
    <div>
       <HomePage />
       {/* <OrderQuickFood /> */}
       <FoodMenu />
       <OurVendors />
       <FoodBuddy />
       <RiderVendorSignup />
       <Testimonials />
       <PersonalizedWebsiteSection />
       <NewsletterSignup />
    </div>
  )
}
