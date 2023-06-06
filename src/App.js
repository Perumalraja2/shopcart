import React,{useState} from "react";
import Card from "./component/Card";
import NavBar from "./component/NavBar";
import Header from "./component/Header";

function App() {
  let data = [{
    product:"Fancy product",
    price:"$40 - $80"
  },
  {
    product:"Special Item",
    price:"$25"
  },
  {
    product:"Sale item",
    price:"$18"
  },
  {
    product:"Popular item",
    price:"$45"
  }
]
  let[cartvalue,setCartvalue]=useState(0);
  return <>
<NavBar cartvalue={cartvalue}/>
<Header/>
<section className="py-5">
            <div className="container px-4 px-lg-5 mt-5">
                <div className="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center">
<Card setCartvalue={setCartvalue} pro={data[0].product}  pri ={data[0].price }/>
<Card setCartvalue={setCartvalue} pro={data[1].product}  pri ={data[1].price }/>
<Card setCartvalue={setCartvalue} pro={data[2].product}  pri ={data[2].price }/>
<Card setCartvalue={setCartvalue} pro={data[3].product}  pri ={data[3].price }/>

</div>
</div>
</section>

</>    
}

export default App;
