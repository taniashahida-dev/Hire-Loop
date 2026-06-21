import 'server-only'

import Stripe from 'stripe'

export const stripe = new Stripe(process.env.STRIPE_SECRET_KEY)

export const PLAN_PRICE_ID= {
    seeker_pro : 'price_1TioM7HVJ9Y8kncw0BJD4VGq',
    seeker_premium : 'price_1TipbXHVJ9Y8kncwt60RZY45',

    recruiter_growth: 'price_1TipcWHVJ9Y8kncwlHLdcNpc',
    recruiter_enterprise:'price_1TipdOHVJ9Y8kncwAWo2vc2g',
}

