import { Suspense } from 'react'
import './App.css'
import Countries from './components/countries/countries'
import Country from './components/Country'

function App() {
  const countriesPromise = fetch("https://openapi.programming-hero.com/api/all")
    .then(res => res.json())
  

  return (
    <>
      <Suspense fallback={<p>Countries are loading....</p>}>
        <Countries countriesPromise={countriesPromise}></Countries>
      </Suspense>
      <Country></Country>
    </>
  )
}

export default App
