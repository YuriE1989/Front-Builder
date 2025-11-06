import { useState } from 'react'

function App() {
    const [count, setCount] = useState(0)

    return (
        <div style={{
            width: "100%",
            height: "100vh",
            display: "flex",
            alignItems: "center",
            justifyContent: "center"
        }}>
            {
                (import.meta.env.VITE_IS_INCLUDE_LOGO === 'true') ? "LOGO" : "App"
            }
        </div>
    )
}

export default App
