import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router'

export default function ProductApi() {
let [count,setCount] = useState(0)
let [product,setProduct] =useState([])
let [category,setcategory] =useState([])

    let getCategory =() => {
axios.get(`https://dummyjson.com/products/categories`)
.then((res) =>{
    setcategory(res.data)
})
    }

    let getProducts=()=>{
axios.get(`https://dummyjson.com/products`)
.then((apiRes) => {
    

    let {products} = apiRes.data
    //console.log(products);
    setProduct(products)
})
    }
 
   
    useEffect(() => {
 getCategory()
    getProducts()

    },[])

  return (
  <section className='py-10'>
    <h1 className='text-center font-bold text-4xl'>Our Products</h1>
    <div className='max-w-[1320px] mx-auto mt-7 grid grid-cols-[20%_auto] gap-5'>
        <aside>
<h2 className="text-lg font-semibold leading-snug text-stone-900">Category</h2>
<ul>
    {
        category.map((obj,index) =>{
return(
    <li key={index}>{obj.name}</li>
)
        })
    }
    
</ul>
        </aside>

        <article className='border-1 grid grid-cols-4 gap-6'>

{
    product.map((obj,index)=><ProductCard data ={obj} key={index}/> )
}


        </article>
    </div>
    <button onClick={()=>setCount(count+1)}>Change Count {count}</button>
  </section>
  )
}


function ProductCard ({data}){
    let {id,title,price,description,thumbnail} = data
return (
    <Link to={`/product-details/api/${id}`} className='block overflow-hidden border shadow-lg transition hover:-translate-y-1 hover:shadow-xl'>
<img src={thumbnail} alt="" />

<div className='p-4'>
    <h2 className="text-lg font-semibold leading-snug text-stone-900">{title}</h2>
    <p>{`$${price}`}</p>
    <p className='mt-3 text-sm leading-6 text-slate-600 '>
      {description}
    </p>
</div>
    </Link>
)
}
