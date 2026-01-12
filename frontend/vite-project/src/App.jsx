import { useState, useEffect } from 'react'
import './App.css'

const App = () => {
  const [submit, setSubmit] = useState({details:''})

  const handleChange = (e)=>{
    setSubmit({...submit, details:e.target.value})
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      const response = await fetch('http://localhost:3000/settings1', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body:JSON.stringify(submit),
      });
      if(response.ok){
        const result = await response.json();
        console.log('Success', result)
        alert('Form Submission Success')
      }else{
        console.error('submission failed')
        alert('Form Submission Failed')
      }
    } catch (error) {
      console.error('Error Submitting Form', error)
    }
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input type='text' name="query" placeholder="Enter your Name" value={submit.details} onChange={handleChange} required/>
        {/* <input /> */}
        <button type="submit" >Submit</button>
      </form>
    </>
  )
}

export default App