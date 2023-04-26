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
  return (
    <main>
      <p />
      <div style={{
        position: 'absolute',
        backgroundColor: '#09f',
        borderRadius: '50%',
        opacity: 0.8,
        pointerEvents: 'none',
        left: -20,
        top: -20,
        width: 40,
        height: 40,
        transform: `translate(${position.x}px, ${position.y}px)`,
        zoom: 1
      }}
      />
      <button onClick={() => setEnabled(!enabled)}>{buttonText}</button>
    </main>
  )
}

export default App
