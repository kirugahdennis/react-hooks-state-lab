import React, {useState} from 'react'

const DarkModeToggle = () => {
  const [isDarkMode, setIsDarkMode] = useState(false)

  const handleClick = () => {
    setIsDarkMode(!isDarkMode)
  }

  return (
    <button onClick ={handleClick}>{isDarkMode ? 'Light' : 'Dark'}</button>
  )
}

export default DarkModeToggle
