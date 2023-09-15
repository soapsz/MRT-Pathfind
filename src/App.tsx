import { useState } from 'react'
/*
function App() {

}

export default App
*/

const MyComponent: React.FC = () => {
    const [count, setCount] = useState<number>(0)

    return (
        <div>
            <p>Count: {count}</p>
            <button onClick={() => setCount(count + 1)}>Increment</button>
        </div>
    )
}

export default MyComponent
