import React, { useState } from 'react'
import FoodItems from './FoodItems';
const FoodApp = () => {
  const YOUR_APP_ID = "a462cfbb";
  const YOUR_APP_KEY ="5e4686d1283fad139516cb556cdf31d9";
    const[search,setSearch]=useState('');
    const[data,setData]=useState([])
    const SubmitHandler = e =>{
        e.preventDefault();
        // console.log(search)
        fetch(`https://api.edamam.com/search?q=${search}&app_id=${YOUR_APP_ID}&app_key=${YOUR_APP_KEY}&from=0&to=30&calories=591-722&health=alcohol-free`)
        .then(
          response=>response.json()
        ).then(
          data=>setData(data.hits)
        )
    }
  return (
    <div className='text-center container-fluid'>
        <h1 className='text-white  mb-3 bg-dark'>Food Recipe App</h1>
        <hr className='mt-5'/>
        <form onSubmit={SubmitHandler}>
            <input type="text" value={search} onChange={(e)=>setSearch(e.target.value)} className='form-control-lg'  placeholder='Search.....'/>  <br/>
            <input type="Submit" value='search' className='btn btn-primary mb-3 mt-4 btn-lg' />
        </form>
        <hr className='mb-5'/>
        {
 
          data.length>1 ? <FoodItems data={data}/> :null
        }
    </div>
  )
}

export default FoodApp