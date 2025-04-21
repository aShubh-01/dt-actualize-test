import MainHeader from '@/components/MainHeader'
import React from 'react'

const layout = ({children}: Readonly<{children: React.ReactNode}>) => {
  return (
    <>
    <MainHeader />
    <main>{children}</main>
    </>
  )
}

export default layout