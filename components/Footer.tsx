export default function Footer() {
  return (
    <footer className="bg-black/50 backdrop-blur-md border-t border-white/10 py-8 mt-20">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div>
            <p className="text-sm text-gray-400">© 2024 Just Because Labs LLC. All rights reserved.</p>
            <p className="text-xs text-gray-500 mt-1">Because vibes are everything.</p>
          </div>
          <div className="flex gap-6">
            <a href="#" className="text-gray-400 hover:text-purple-400 transition-colors">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
              </svg>
            </a>
            <a href="#" className="text-gray-400 hover:text-purple-400 transition-colors">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
              </svg>
            </a>
            <a href="#" className="text-gray-400 hover:text-purple-400 transition-colors">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.441 8.633c.004.109.006.219.006.328 0 3.367-2.561 7.247-7.247 7.247-1.44 0-2.778-.421-3.905-1.144.199.024.402.036.609.036 1.196 0 2.296-.408 3.17-1.092-1.117-.021-2.06-.759-2.386-1.774.156.03.316.046.481.046.233 0 .459-.031.673-.089-1.168-.235-2.05-1.267-2.05-2.503v-.032c.344.191.738.306 1.156.319-.685-.458-1.136-1.239-1.136-2.125 0-.468.126-.906.346-1.283 1.26 1.545 3.141 2.561 5.264 2.668-.044-.187-.066-.381-.066-.58 0-1.408 1.141-2.549 2.549-2.549.733 0 1.396.31 1.86.806.58-.114 1.125-.326 1.617-.617-.19.595-.594 1.094-1.12 1.41.515-.062 1.006-.198 1.463-.401-.342.51-.774.958-1.271 1.317z"/>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}