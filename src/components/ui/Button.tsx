import React from 'react'

interface ButtonProps {
  children: React.ReactNode
  variant?: 'primary' | 'primaryLight' | 'secondary' | 'outline'
  size?: 'sm' | 'md' | 'lg'
  className?: string
  onClick?: () => void
}

export default function Button({ 
  children, 
  variant = 'primary', 
  size = 'md',
  className = '',
  onClick 
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
      className={`${baseStyles} ${variants[variant]} ${sizes[size]} text-button ${className}`}
      onClick={onClick}
      aria-label={typeof children === 'string' ? children : undefined}
    >
      {children}
    </button>
  )
}
