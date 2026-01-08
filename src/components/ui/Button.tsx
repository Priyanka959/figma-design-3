import React from 'react'

interface ButtonProps {
  children: React.ReactNode
  variant?: 'primary' | 'primaryLight' | 'secondary' | 'outline'
  size?: 'sm' | 'md' | 'lg'
  className?: string
  onClick?: () => void
  arrow?: boolean
}

export default function Button({ 
  children, 
  variant = 'primary', 
  size = 'md',
  className = '',
  onClick 
  , arrow = false
}: ButtonProps) {
  const baseStyles = 'inline-flex items-center justify-center font-medium rounded-full transition-all duration-200'
  
  const variants = {
    primary: 'bg-sage-600 text-white hover:bg-sage-400',
    // light sage default, darker sage on hover
    primaryLight: 'bg-sage-300 text-sage-900 hover:bg-sage-700 hover:text-white',
    secondary: 'bg-gray-900 text-white hover:bg-gray-700 hover:opacity-80',
    outline: 'border-2 border-sage-500 text-sage-700 hover:text-sage-500 hover:border-sage-400'
  }
  
  const sizes = {
    sm: 'px-4 py-3 text-xs',
    md: 'px-6 py-3 text-sm',
    lg: 'px-8 py-4 text-base'
  }
  
  return (
    <button 
      className={`${baseStyles} ${variants[variant]} ${sizes[size]} text-button group ${className}`}
      onClick={onClick}
      aria-label={typeof children === 'string' ? children : undefined}
    >
      <span className="inline-flex items-center">
        {children}
        {arrow && (
          <svg xmlns="http://www.w3.org/2000/svg" className="w-3 h-3 transform transition-transform duration-200 group-hover:-translate-y-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" aria-hidden="true">
            <path strokeLinecap="round" strokeLinejoin="round" d="M7 17L17 7" />
            <path strokeLinecap="round" strokeLinejoin="round" d="M7 7h10v10" />
          </svg>
        )}
      </span>
    </button>
  )
}
