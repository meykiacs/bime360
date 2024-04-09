import React from 'react'

export default function Header({ children, className = '', ...delegated }) {
  return (
    <header className={`h-[62px] bg-white rounded-2xl ${className}`}>
      {children}
    </header>
  )
}
