import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Ridma Kanchana Atgukorala - Full Stack Developer',
  description: 'Senior Software Engineer specializing in PHP Laravel, JavaScript, React, Next.js, Node.js, and AWS. Head of Department at Xess Global with expertise in payment gateway integrations and full-stack development.',
  keywords: 'Full Stack Developer, PHP Laravel, JavaScript, React, Next.js, Node.js, AWS, Payment Gateways, Software Engineer',
  authors: [{ name: 'Ridma Kanchana Atgukorala' }],
  viewport: 'width=device-width, initial-scale=1',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="antialiased">{children}</body>
    </html>
  )
}