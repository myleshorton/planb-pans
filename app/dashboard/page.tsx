import { redirect } from 'next/navigation'

// Memorable shortcut: planbforpans.com/dashboard → the founder Signals dashboard
// (gated behind admin-login on the app domain).
export default function DashboardRedirect() {
  redirect('https://app.planbforpans.com/admin/signals')
}
