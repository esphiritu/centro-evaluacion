'use client'
import { useState, useEffect } from 'react'
import { useTheme } from 'next-themes'

const ThemeSwitch = () => {
  const [mounted, setMounted] = useState(false)
  const { theme, setTheme } = useTheme()


  // useEffect only runs on the client, so now we can safely show the UI
  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return null
  }

  return (
    <select value={theme} onChange={e => setTheme(e.target.value)} className="border-none rounded p-2">
      <option value="system" className='py-2'>System</option>
      <option value="dark" className='py-2'>Dark</option>
      <option value="light" className='py-2'>Light</option>
    </select>
  )
}

export default ThemeSwitch