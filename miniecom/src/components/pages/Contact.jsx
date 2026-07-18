import { FiArrowUpRight, FiClock, FiMail, FiMapPin, FiPhone } from 'react-icons/fi'
import Header from '../common/Header'
import Footer from '../common/Footer'

const contactDetails = [
  { icon: FiMail, label: 'Email us', value: 'hello@everyday.co', note: 'We reply within one business day.' },
  { icon: FiPhone, label: 'Call us', value: '+1 (415) 555-0198', note: 'Monday–Friday, 9am–5pm PST.' },
  { icon: FiMapPin, label: 'Visit the studio', value: '148 Market Street, San Francisco', note: 'Open for walk-ins on Saturdays.' },
]

export default function Contact() {
  return (
    <div className="min-h-screen bg-[#f8f7f4] text-stone-900">
     
      <main className="px-5 py-12 sm:px-8 lg:px-12 lg:py-16">
        <section className="mx-auto max-w-6xl">
          <div className="grid overflow-hidden rounded-3xl bg-stone-900 shadow-xl lg:grid-cols-[0.9fr_1.1fr]">
            <aside className="relative overflow-hidden p-8 text-white sm:p-12">
              <div className="absolute -left-24 top-12 size-64 rounded-full bg-amber-500/20 blur-3xl" />
              <div className="absolute -bottom-28 right-0 size-72 rounded-full bg-orange-300/10 blur-3xl" />
              <div className="relative">
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-amber-300">Get in touch</p>
                <h1 className="mt-4 max-w-md text-4xl font-semibold leading-tight tracking-tight sm:text-5xl">Let’s make something good together.</h1>
                <p className="mt-5 max-w-sm leading-7 text-stone-300">Have a question about an order, a product, or working with us? Send us a note and our team will be glad to help.</p>
                <div className="mt-12 space-y-7">
                  {contactDetails.map(({ icon: Icon, label, value, note }) => (
                    <div key={label} className="flex gap-4"><span className="grid size-10 shrink-0 place-items-center rounded-xl bg-white/10 text-amber-300"><Icon size={19} /></span><div><p className="text-sm text-stone-400">{label}</p><p className="mt-1 font-medium">{value}</p><p className="mt-1 text-sm text-stone-400">{note}</p></div></div>
                  ))}
                </div>
                <div className="mt-12 flex items-center gap-3 border-t border-white/10 pt-6 text-sm text-stone-300"><FiClock className="text-amber-300" /> Typical response time: under 24 hours</div>
              </div>
            </aside>
            <section className="bg-white p-8 sm:p-12">
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-amber-700">Send a message</p>
              <h2 className="mt-2 text-3xl font-semibold tracking-tight">How can we help?</h2>
              <form className="mt-8 space-y-5">
                <div className="grid gap-5 sm:grid-cols-2">
                  <label className="block text-sm font-medium">First name<input type="text" placeholder="Alex" className="mt-2 w-full rounded-xl border border-stone-200 bg-stone-50 px-4 py-3 outline-none transition placeholder:text-stone-400 focus:border-amber-600 focus:ring-4 focus:ring-amber-100" /></label>
                  <label className="block text-sm font-medium">Last name<input type="text" placeholder="Morgan" className="mt-2 w-full rounded-xl border border-stone-200 bg-stone-50 px-4 py-3 outline-none transition placeholder:text-stone-400 focus:border-amber-600 focus:ring-4 focus:ring-amber-100" /></label>
                </div>
                <label className="block text-sm font-medium">Email address<input type="email" placeholder="alex@example.com" className="mt-2 w-full rounded-xl border border-stone-200 bg-stone-50 px-4 py-3 outline-none transition placeholder:text-stone-400 focus:border-amber-600 focus:ring-4 focus:ring-amber-100" /></label>
                <label className="block text-sm font-medium">What can we help with?<select defaultValue="" className="mt-2 w-full rounded-xl border border-stone-200 bg-stone-50 px-4 py-3 text-stone-600 outline-none transition focus:border-amber-600 focus:ring-4 focus:ring-amber-100"><option value="" disabled>Select a topic</option><option>Order support</option><option>Product question</option><option>Partnerships</option><option>Something else</option></select></label>
                <label className="block text-sm font-medium">Message<textarea rows="5" placeholder="Tell us a little more..." className="mt-2 w-full resize-none rounded-xl border border-stone-200 bg-stone-50 px-4 py-3 outline-none transition placeholder:text-stone-400 focus:border-amber-600 focus:ring-4 focus:ring-amber-100" /></label>
                <button type="button" className="flex w-full items-center justify-center gap-2 rounded-xl bg-stone-900 px-5 py-3.5 font-semibold text-white transition hover:bg-amber-700">Send message <FiArrowUpRight size={18} /></button>
              </form>
            </section>
          </div>
        </section>
      </main>
   
    </div>
  )
}
