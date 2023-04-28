import { useState, useEffect } from 'react'

function App () {
  const [enabled, setEnabled] = useState(false)
  const [position, setPosition] = useState({ x: 0, y: 0 })
  const buttonText = enabled ? 'Deactivate' : 'Activate'
  // useffect with enabled
  useEffect(() => {
    const handleMove = (event) => {
      const { clientX, clientY } = event
      setPosition({ x: clientX, y: clientY })
    }
    // if enable suscribe listener
    enabled && window.addEventListener('pointermove', handleMove)
    // Clean useEffect
    return () => {
      window.removeEventListener('pointermove', handleMove)
    }
  }, [enabled])

  // Hide cursor when enable is true
  useEffect(() => {
    document.body.classList.toggle('no-cursor', enabled)

    return () => {
      document.body.classList.remove('no-cursor')
    }
  }, [enabled])

  return (
    <main>
      <p />
      <div
        style={{
          position: 'absolute',
          backgroundColor: 'rgba(0, 0, 0, 0.5)',
          border: '1px solid #fff',
          borderRadius: '50%',
          opacity: 0.8,
          pointerEvents: 'none',
          left: -25,
          top: -25,
          width: 50,
          height: 50,
          transform: `translate(${position.x}px, ${position.y}px)`
        }}
      />
      <button onClick={() => setEnabled(!enabled)}>{buttonText}</button>
    </main>
  )
}

export default App
