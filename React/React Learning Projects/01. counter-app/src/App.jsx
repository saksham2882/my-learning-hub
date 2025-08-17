// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react'
import './App.css'

function App() {

  const [Counter, setCounter] = useState(0);

  return (
    <>
      <article>
        <header>Counter App</header>

        <section>
          <h1>{ Counter }</h1>

          <div className='buttons'>
            <button onClick={() => setCounter(Counter - 1)} disabled={Counter === 0} className='minus'>-</button>
            <button onClick={() => setCounter(Counter + 1)} className='plus'>+</button>
          </div>

        </section>

        <footer>&copy; All Rights Reserved By Saksham Agrahari</footer>
      </article>
    </>
  )
}

export default App
