import { FiHeart, FiShoppingBag, FiStar } from 'react-icons/fi'

const products = [
  {
    name: 'Everyday Essential Tee', category: 'Men’s apparel', price: '$32.00',
    image: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&w=900&q=85',
    colors: ['bg-stone-900', 'bg-stone-300', 'bg-[#8b5e3c]'],
  },
  {
    name: 'Structured Carryall', category: 'Accessories', price: '$148.00',
    image: 'https://images.unsplash.com/photo-1584917865442-de89df76afd3?auto=format&fit=crop&w=900&q=85',
    colors: ['bg-[#a27250]', 'bg-stone-900'],
  },
  {
    name: 'Classic Leather Sneaker', category: 'Footwear', price: '$96.00',
    image: 'https://images.unsplash.com/photo-1549298916-b41d501d3772?auto=format&fit=crop&w=900&q=85',
    colors: ['bg-white ring-1 ring-stone-300', 'bg-stone-900'],
  },
]

function ProductCard({ product, featured }) {
  return (
    <article className="group overflow-hidden rounded-2xl bg-white shadow-sm ring-1 ring-stone-200 transition duration-300 hover:-translate-y-1 hover:shadow-xl">
      <div className="relative aspect-[4/5] overflow-hidden bg-stone-100">
        {featured && <span className="absolute left-4 top-4 z-10 rounded-full bg-stone-900 px-3 py-1 text-xs font-semibold text-white">New arrival</span>}
        <button aria-label={`Save ${product.name}`} className="absolute right-4 top-4 z-10 grid size-10 place-items-center rounded-full bg-white/90 text-stone-700 shadow-sm transition hover:bg-stone-900 hover:text-white"><FiHeart size={18} /></button>
        <img src={product.image} alt={product.name} className="size-full object-cover transition duration-500 group-hover:scale-105" />
        <button className="absolute inset-x-4 bottom-4 flex translate-y-16 items-center justify-center gap-2 rounded-xl bg-stone-900 py-3 text-sm font-semibold text-white opacity-0 transition duration-300 group-hover:translate-y-0 group-hover:opacity-100"><FiShoppingBag size={16} /> Add to bag</button>
      </div>
      <div className="p-5">
        <div className="mb-2 flex items-center justify-between gap-4"><p className="text-xs font-medium uppercase tracking-[0.15em] text-stone-500">{product.category}</p><div className="flex items-center gap-1 text-xs text-amber-500"><FiStar className="fill-current" /> 4.9</div></div>
        <div className="flex items-start justify-between gap-4"><h2 className="text-lg font-semibold leading-snug text-stone-900">{product.name}</h2><span className="whitespace-nowrap text-base font-semibold text-stone-900">{product.price}</span></div>
        <div className="mt-4 flex gap-2" aria-label="Available colors">{product.colors.map((color, index) => <span key={index} className={`size-4 rounded-full ${color}`} />)}</div>
      </div>
    </article>
  )
}

export default function Product() {
  return (
    <main className="min-h-screen bg-[#f8f7f4] px-5 py-12 text-stone-900 sm:px-8 lg:px-12">
        <section className="mx-auto max-w-6xl">
          <header className="mb-10 flex flex-col gap-5 border-b border-stone-200 pb-7 sm:flex-row sm:items-end sm:justify-between">
            <div><p className="mb-2 text-sm font-semibold uppercase tracking-[0.2em] text-amber-700">The latest edit</p><h1 className="text-3xl font-semibold tracking-tight sm:text-4xl">Made for everyday.</h1></div>
            <a href="#shop" className="inline-flex items-center text-sm font-semibold underline decoration-stone-400 underline-offset-4 transition hover:decoration-stone-900">Shop all essentials</a>
          </header>
          <div id="shop" className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">{products.map((product, index) => <ProductCard key={product.name} product={product} featured={index === 0} />)}</div>
        </section>
    </main>
  )
}
