import { useState } from 'react'
import './index.css'

function App() {
  const [count, setCount] = useState(0)
  const [isDarkMode, setIsDarkMode] = useState(true)

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode)
  }

  return (
    <div className={`min-h-screen transition-all duration-500 ${
      isDarkMode 
        ? 'bg-gradient-to-br from-gray-900 via-purple-900 to-violet-900' 
        : 'bg-gradient-to-br from-blue-50 to-indigo-100'
    } flex items-center justify-center p-4`}>
      <div className={`rounded-2xl shadow-2xl p-8 max-w-lg w-full backdrop-blur-sm border transition-all duration-500 ${
        isDarkMode 
          ? 'bg-gray-800/80 border-gray-700/50 shadow-purple-500/20' 
          : 'bg-white/90 border-white/20 shadow-blue-500/20'
      }`}>
        {/* Header Section */}
        <div className="text-center mb-8">
          <div className="flex items-center justify-center mb-4">
            <div className={`w-16 h-16 rounded-full flex items-center justify-center text-2xl transition-all duration-300 ${
              isDarkMode ? 'bg-gradient-to-r from-purple-500 to-pink-500' : 'bg-gradient-to-r from-blue-500 to-cyan-500'
            }`}>
              🚀
            </div>
          </div>
          <h1 className={`text-4xl font-bold mb-3 transition-colors duration-300 ${
            isDarkMode ? 'text-white' : 'text-gray-800'
          }`}>
            Vite + React + Tailwind CSS v4.1
          </h1>
          <p className={`text-lg transition-colors duration-300 ${
            isDarkMode ? 'text-gray-300' : 'text-gray-600'
          }`}>
            Modern web development stack with dark theme
          </p>
        </div>
        
        {/* Interactive Section */}
        <div className="text-center mb-8">
          <div className="flex gap-4 justify-center mb-6">
            <button
              onClick={() => setCount((count) => count + 1)}
              className={`font-semibold py-3 px-6 rounded-xl transition-all duration-200 transform hover:scale-105 shadow-lg ${
                isDarkMode 
                  ? 'bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white shadow-purple-500/25' 
                  : 'bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 text-white shadow-blue-500/25'
              }`}
            >
              Count: {count}
            </button>
            <button
              onClick={toggleTheme}
              className={`font-semibold py-3 px-6 rounded-xl transition-all duration-200 transform hover:scale-105 border-2 ${
                isDarkMode 
                  ? 'border-gray-600 text-gray-300 hover:bg-gray-700 hover:text-white' 
                  : 'border-gray-300 text-gray-700 hover:bg-gray-100'
              }`}
            >
              {isDarkMode ? '☀️ Light' : '🌙 Dark'}
            </button>
          </div>
        </div>
        
        {/* Tech Stack Cards */}
        <div className="space-y-4 mb-8">
          <div className={`flex items-center justify-between p-4 rounded-xl transition-all duration-300 ${
            isDarkMode ? 'bg-gray-700/50 border border-gray-600/30' : 'bg-gray-50 border border-gray-200'
          }`}>
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 bg-blue-500 rounded-lg flex items-center justify-center text-white font-bold text-sm">
                R
              </div>
              <span className={isDarkMode ? 'text-gray-200' : 'text-gray-700'}>React</span>
            </div>
            <span className="font-semibold text-blue-500">v19.1.1</span>
          </div>
          
          <div className={`flex items-center justify-between p-4 rounded-xl transition-all duration-300 ${
            isDarkMode ? 'bg-gray-700/50 border border-gray-600/30' : 'bg-gray-50 border border-gray-200'
          }`}>
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 bg-green-500 rounded-lg flex items-center justify-center text-white font-bold text-sm">
                V
              </div>
              <span className={isDarkMode ? 'text-gray-200' : 'text-gray-700'}>Vite</span>
            </div>
            <span className="font-semibold text-green-500">v7.1.4</span>
          </div>
          
          <div className={`flex items-center justify-between p-4 rounded-xl transition-all duration-300 ${
            isDarkMode ? 'bg-gray-700/50 border border-gray-600/30' : 'bg-gray-50 border border-gray-200'
          }`}>
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 bg-purple-500 rounded-lg flex items-center justify-center text-white font-bold text-sm">
                T
              </div>
              <span className={isDarkMode ? 'text-gray-200' : 'text-gray-700'}>Tailwind CSS</span>
            </div>
            <span className="font-semibold text-purple-500">v4.1.0</span>
          </div>
        </div>
        
        {/* Footer */}
        <div className="text-center">
          <p className={`text-sm transition-colors duration-300 ${
            isDarkMode ? 'text-gray-400' : 'text-gray-500'
          }`}>
            Edit <code className={`px-2 py-1 rounded font-mono text-xs ${
              isDarkMode ? 'bg-gray-700 text-purple-300' : 'bg-gray-100 text-purple-600'
            }`}>src/App.jsx</code> and save to test HMR
          </p>
        </div>
      </div>
    </div>
  )
}

export default App