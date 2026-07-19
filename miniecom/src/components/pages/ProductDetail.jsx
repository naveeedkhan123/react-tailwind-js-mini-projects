import { FiArrowLeft, FiHeart, FiShoppingBag, FiStar } from 'react-icons/fi'
import { Link, useParams } from 'react-router'
import { products } from './Product'
import axios from 'axios'
import { useEffect, useState } from 'react'

export default function ProductDetail({ apiProduct = false }) {
  const { pid } = useParams()
  const [product, setProduct] = useState(apiProduct ? null : products.find((item) => item.id === Number(pid)))
  const [loading, setLoading] = useState(apiProduct)

  useEffect(() => {
    if (!apiProduct) return

    setLoading(true)
    axios.get(`https://dummyjson.com/products/${pid}`)
      .then((response) => setProduct(response.data))
      .catch(() => setProduct(null))
      .finally(() => setLoading(false))
  }, [apiProduct, pid])

  if (loading) {
    return <main className="grid min-h-[60vh] place-items-center bg-[#f8f7f4] px-5">Loading product...</main>
  }

  const productName = apiProduct ? product?.title : product?.name
  const productImage = apiProduct ? product?.thumbnail : product?.image
  const productPrice = apiProduct ? `$${product?.price}` : product?.price
  const productCategory = product?.category
  const colors = apiProduct ? ['bg-stone-900', 'bg-stone-300', 'bg-[#8b5e3c]'] : product?.colors
  const backLink = apiProduct ? '/product-api' : '/product'

  if (!product) {
    return <main className="grid min-h-[60vh] place-items-center bg-[#f8f7f4] px-5"><div className="text-center"><h1 className="text-3xl font-semibold">Product not found</h1><Link to={backLink} className="mt-4 inline-block font-semibold text-amber-700">Back to products</Link></div></main>
  }

  return (
    <main className="min-h-screen bg-[#f8f7f4] px-5 py-10 text-stone-900 sm:px-8 lg:px-12">
      <section className="mx-auto max-w-6xl">
        <Link to={backLink} className="mb-8 inline-flex items-center gap-2 text-sm font-semibold text-stone-600 transition hover:text-stone-900"><FiArrowLeft /> Back to products</Link>
        <div className="grid overflow-hidden rounded-3xl bg-white shadow-sm ring-1 ring-stone-200 lg:grid-cols-2">
          <div className="min-h-96 bg-stone-100"><img src={productImage} alt={productName} className="size-full object-cover" /></div>
          <div className="p-8 sm:p-12">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-amber-700">{productCategory}</p>
            <div className="mt-4 flex items-start justify-between gap-4"><h1 className="text-3xl font-semibold tracking-tight sm:text-4xl">{productName}</h1><button aria-label={`Save ${productName}`} className="grid size-11 shrink-0 place-items-center rounded-full border border-stone-200 text-stone-700 transition hover:bg-stone-900 hover:text-white"><FiHeart size={19} /></button></div>
            <div className="mt-5 flex items-center gap-2 text-sm text-stone-600"><span className="flex items-center gap-1 text-amber-500"><FiStar className="fill-current" /> 4.9</span><span>•</span><span>128 reviews</span></div>
            <p className="mt-7 text-2xl font-semibold">{productPrice}</p>
            <p className="mt-6 leading-7 text-stone-600">{apiProduct ? product.description : 'A carefully considered essential designed for comfort, durability, and the rhythm of everyday life.'}</p>
            <div className="mt-8"><p className="text-sm font-semibold">Choose a color</p><div className="mt-3 flex gap-3">{colors.map((color, index) => <button key={index} aria-label={`Color ${index + 1}`} className={`size-8 rounded-full ${color} ${index === 0 ? 'ring-2 ring-stone-900 ring-offset-2' : ''}`} />)}</div></div>
            <button type="button" className="mt-9 flex w-full items-center justify-center gap-2 rounded-xl bg-stone-900 py-4 font-semibold text-white transition hover:bg-amber-700"><FiShoppingBag size={18} /> Add to bag</button>
          </div>
        </div>
      </section>
    </main>
  )
}
