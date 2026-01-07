import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="bg-white border-t border-gray-200 pt-16 pb-1">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="flex flex-col space-y-12">
          {/* Navigation Links */}
          <div className="flex items-center space-x-8 text-sm">
            <Link href="#benefits" className="text-gray-900 hover:text-gray-500 transition-colors font-medium">
              Benefits
            </Link>
            <Link href="#specifications" className="text-gray-900 hover:text-gray-500 transition-colors font-medium">
              Specifications
            </Link>
            <Link href="#howto" className="text-gray-900 hover:text-gray-500 transition-colors font-medium">
              How-to
            </Link>
          </div>
          
          {/* Logo Icon, Copyright and All Rights Reserved - Single Line */}
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              {/* Walking Human Figure Icon */}
              <svg 
                className="w-20 h-20 text-gray-900" 
                viewBox="0 0 24 48" 
                fill="currentColor"
              >
                {/* Head */}
                <circle cx="12" cy="6" r="4" />
                {/* Body */}
                <rect x="10.5" y="11" width="3" height="14" rx="1.5" />
                {/* Left Leg - forward */}
                <rect x="7.5" y="25" width="2.8" height="13" rx="1.4" transform="rotate(-15 9 31.5)" />
                {/* Right Leg - backward */}
                <rect x="13.7" y="25" width="2.8" height="13" rx="1.4" transform="rotate(15 15 31.5)" />
              </svg>
              <p className="text-light-gray">
                © Area. {new Date().getFullYear()}
              </p>
            </div>
            
            <p className="text-light-gray font-medium">
              All Rights Reserved
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
