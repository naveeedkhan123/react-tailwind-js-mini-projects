import { FiArrowLeft, FiCompass, FiShoppingBag } from 'react-icons/fi'

export default function Error404() {
  return (
    <main className="relative grid min-h-screen place-items-center overflow-hidden bg-[#f8f7f4] px-5 py-12 text-stone-900">
      <div className="absolute -left-24 top-12 size-80 rounded-full bg-amber-300/30 blur-3xl" />
      <div className="absolute -bottom-32 -right-20 size-96 rounded-full bg-orange-200/40 blur-3xl" />
      <section className="relative w-full max-w-2xl text-center">
        <a href="#home" className="absolute -top-16 left-0 inline-flex items-center gap-2 text-sm font-semibold text-stone-600 transition hover:text-stone-900"><FiShoppingBag />everyday.</a>
        <div className="mx-auto grid size-16 place-items-center rounded-2xl bg-stone-900 text-amber-300 shadow-lg"><FiCompass size={28} /></div>
        <p className="mt-10 text-[9rem] font-semibold leading-none tracking-[-0.1em] text-stone-900 sm:text-[13rem]">404</p>
        <p className="mt-3 text-sm font-semibold uppercase tracking-[0.22em] text-amber-700">Lost in the good stuff</p>
        <h1 className="mt-4 text-3xl font-semibold tracking-tight sm:text-4xl">This page has wandered off.</h1>
        <p className="mx-auto mt-4 max-w-md leading-7 text-stone-600">The page you’re looking for doesn’t exist, may have moved, or is taking a well-deserved break.</p>
        <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
          <a href="#home" className="inline-flex items-center justify-center gap-2 rounded-xl bg-stone-900 px-5 py-3.5 font-semibold text-white transition hover:bg-amber-700"><FiArrowLeft /> Back to home</a>
          <a href="#shop" className="inline-flex items-center justify-center rounded-xl border border-stone-300 bg-white px-5 py-3.5 font-semibold text-stone-800 transition hover:border-stone-900">Browse the shop</a>
        </div>
        <p className="mt-10 text-sm text-stone-500">Need a hand? <a href="#contact" className="font-semibold text-amber-700 hover:text-amber-800">Contact our team</a></p>
      </section>
    </main>
  )
}
