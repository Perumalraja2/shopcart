import React,{useState} from 'react'

function Card({setCartvalue,pro,pri}) {
  
  let [toggle,setToggle]=useState(true);
  return <>
<div className="col mb-5">
<div className="card h-100">
<img className="card-img-top" src="https://dummyimage.com/450x300/dee2e6/6c757d.jpg" alt="..." />
<div className="card-body p-4">
<div className="text-center">
<h5 className="fw-bolder">{pro}</h5>
{pri}
</div>
</div>
<div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
<div className="text-center">
{
 toggle?<button className="btn btn-outline-dark mt-auto"  onClick={()=>{
  setCartvalue(e=>e+1)
  setToggle(false)
}} >Add to cart</button>:
<button className="btn btn-outline-dark mt-auto"  onClick={()=>{
  setCartvalue(e=>e-1)
  setToggle(true)
}} >remove</button>





}

</div>
</div>

</div>
</div>
    
  </>
}

export default Card