import './globals.css'
import type { Metadata } from 'next'
import { Press_Start_2P } from 'next/font/google'
import Link from 'next/link';

const pressStart2P = Press_Start_2P({
  weight: '400',
  subsets: ['latin']
});

export const metadata: Metadata = {
  title: 'Vim Invaders - Leaderboard',
  description: 'The leaderboard for vim-invaders, a game designed to have fun playing asteroids while learning vim',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={pressStart2P.className + ' text-white'}>
        <div className='w-screen min-h-screen m-0 py-8 px-16 bg-black flex flex-col items-center'>
          <h1 className="text-5xl mb-16"><Link href="/">Vim Invaders</Link></h1>
          {children}
        </div>
      </body>
    </html>
  )
}
