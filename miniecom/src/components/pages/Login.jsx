import { FiArrowRight, FiLock, FiShoppingBag } from 'react-icons/fi'

export default function Login() {
  return (
    <main className="grid min-h-screen bg-[#f8f7f4] lg:grid-cols-2">
      <section className="relative hidden overflow-hidden bg-stone-900 p-12 text-white lg:flex lg:flex-col lg:justify-between">
        <div className="absolute -left-20 top-20 size-80 rounded-full bg-amber-500/20 blur-3xl" />
        <div className="absolute -bottom-24 right-0 size-96 rounded-full bg-orange-300/10 blur-3xl" />
        <div className="relative flex items-center gap-3 text-lg font-semibold"><span className="grid size-10 place-items-center rounded-xl bg-amber-500 text-stone-900"><FiShoppingBag size={20} /></span>everyday.</div>
        <div className="relative max-w-lg">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-amber-300">Welcome back</p>
          <h1 className="mt-5 text-5xl font-semibold leading-tight tracking-tight">Good things are waiting for you.</h1>
          <p className="mt-6 max-w-md text-lg leading-8 text-stone-300">Sign in to keep track of your favorites, orders, and the pieces you’ve been saving.</p>
        </div>
        <p className="relative text-sm text-stone-400">Thoughtfully made essentials for everyday living.</p>
      </section>

      <section className="flex items-center justify-center px-5 py-12 sm:px-8">
        <div className="w-full max-w-md">
          <div className="mb-10 flex items-center justify-between lg:hidden"><div className="flex items-center gap-2 text-lg font-semibold"><span className="grid size-9 place-items-center rounded-lg bg-stone-900 text-white"><FiShoppingBag size={18} /></span>everyday.</div><a href="#shop" className="text-sm font-medium text-stone-600 hover:text-stone-900">Shop</a></div>
          <span className="grid size-12 place-items-center rounded-2xl bg-amber-100 text-amber-700"><FiLock size={21} /></span>
          <h2 className="mt-6 text-3xl font-semibold tracking-tight">Sign in to your account</h2>
          <p className="mt-2 text-stone-600">Enter your details to continue your journey.</p>
          <form className="mt-8 space-y-5">
            <label className="block text-sm font-medium text-stone-700">Email address<input type="email" placeholder="you@example.com" className="mt-2 w-full rounded-xl border border-stone-200 bg-white px-4 py-3.5 outline-none transition placeholder:text-stone-400 focus:border-amber-600 focus:ring-4 focus:ring-amber-100" /></label>
            <label className="block text-sm font-medium text-stone-700">Password<input type="password" placeholder="Enter your password" className="mt-2 w-full rounded-xl border border-stone-200 bg-white px-4 py-3.5 outline-none transition placeholder:text-stone-400 focus:border-amber-600 focus:ring-4 focus:ring-amber-100" /></label>
            <div className="flex items-center justify-between text-sm"><label className="flex cursor-pointer items-center gap-2 text-stone-600"><input type="checkbox" className="size-4 rounded border-stone-300 accent-stone-900" />Remember me</label><a href="#forgot-password" className="font-semibold text-amber-700 hover:text-amber-800">Forgot password?</a></div>
            <button type="button" className="flex w-full items-center justify-center gap-2 rounded-xl bg-stone-900 px-5 py-3.5 font-semibold text-white transition hover:bg-amber-700">Sign in <FiArrowRight size={18} /></button>
          </form>
          <div className="my-7 flex items-center gap-4 text-xs uppercase tracking-[0.14em] text-stone-400"><span className="h-px flex-1 bg-stone-200" />or continue with<span className="h-px flex-1 bg-stone-200" /></div>
          <button type="button" className="flex w-full items-center justify-center gap-3 rounded-xl border border-stone-200 bg-white px-5 py-3.5 font-semibold text-stone-700 transition hover:border-stone-400 hover:bg-stone-50"><span className="text-lg font-bold text-red-500">G</span>Google</button>
          <p className="mt-8 text-center text-sm text-stone-600">New to everyday.? <a href="#create-account" className="font-semibold text-amber-700 hover:text-amber-800">Create an account</a></p>
        </div>
      </section>
    </main>
  )
}
