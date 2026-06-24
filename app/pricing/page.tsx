import { redirect } from 'next/navigation'

// /pricing is merged into /packages (the single canonical pricing page).
// This redirect kills the old $49/mo subscription content and points all
// "Pricing" links at one place.
export default function PricingRedirect() {
  redirect('/packages')
}
