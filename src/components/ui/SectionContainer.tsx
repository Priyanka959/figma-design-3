import React from 'react'

interface SectionContainerProps {
  children: React.ReactNode
  className?: string
  maxWidth?: 'sm' | 'md' | 'lg' | 'xl' | '2xl' | 'full'
}

export default function SectionContainer({ 
  children, 
  className = '',
  maxWidth = 'xl'
}: SectionContainerProps) {
  const maxWidthClasses = {
    sm: 'max-w-2xl',
    md: 'max-w-4xl',
    lg: 'max-w-5xl',
    xl: 'max-w-7xl',
    '2xl': 'max-w-full',
    'full': 'max-w-full'
  }
  
  return (
    <div className={`mx-auto ${maxWidthClasses[maxWidth]} ${className}`}>
      {children}
    </div>
  )
}
