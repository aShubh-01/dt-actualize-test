import Header from '@/components/Header'
import React from 'react'

const layout = ({children}: Readonly<{children: React.ReactNode}>) => {
  return (
    <>
    <Header />
    <main>{children}</main>
    </>
  )
}

export default layout