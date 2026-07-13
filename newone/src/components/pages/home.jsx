import React from 'react';

export default function Home() {

let [count, setCount] = React.useState(1);

let changeCount = () => {
   setCount(count + 1);
}
    return (
        <section className="px-4 py-8 sm:px-6 lg:px-8 lg:py-12 align-center">
            <h1 className="text-4xl font-bold text-center pt-10 pb-6 ">Celebrate  Wear for   Women {count}</h1>

            <button onClick={changeCount} className='block mx-auto p-4 m-4 bg-blue-300 text-bold  hover:bg-blue-500 flex items-center justify-center rounded-lg shadow-md transition duration-300'>
                Change Count
            </button>

            <p className="text-lg text-center max-w-2xl mx-auto px-4 pb-4">
                Welcome to our Women fashion collection, where style meets sophistication. Explore our curated selection of clothing and accessories designed to elevate your wardrobe.
            </p>

            <div className='max-w-[1320px] mx-auto grid grid-cols-4 gap-5'>
                <ProductCard />
                <ProductCard />
                <ProductCard />
                <ProductCard />
                <ProductCard />
                <ProductCard />
                <ProductCard />
                <ProductCard />
            </div>

            <h1 className="text-4xl font-bold text-center pt-10 pb-6">Celebrate  Wear for   Men</h1>

            <p className="text-lg text-center max-w-2xl mx-auto px-4 pb-4">
                Welcome to our Men fashion collection, where style meets sophistication. Explore our curated selection of clothing and accessories designed to elevate your wardrobe.
            </p>

            <div className='max-w-[1320px] mx-auto grid grid-cols-4 gap-5'>
                <ProductCard />
                <ProductCard />
                <ProductCard />
                <ProductCard />
                <ProductCard />
                <ProductCard />
                <ProductCard />
                <ProductCard />
            </div>

        </section>
    );
}

function ProductCard() {
    return (
        <div>
            <div className="bg-neutral-primary-soft block max-w-sm p-6 border border-default rounded-base shadow-xs mb-10 mt-8">
                <a href="#">
                    <img className="rounded-base" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQq5N0n3Yrk0anZOSrLNdkB3Pa7NhqlQ0ZbpkCTN--IeA&s=10" alt="" />
                </a>
                <a href="#">
                    <h5 className="mt-6 mb-2 text-2xl font-semibold tracking-tight text-heading">
                        Streamlining your design process today.
                    </h5>
                </a>
                <p className="mb-6 text-body">
                    In today’s fast-paced digital landscape, fostering seamless collaboration
                    among Developers and IT Operations.
                </p>
                <a
                    href="#"
                    className="inline-flex items-center text-body bg-neutral-secondary-medium box-border border border-default-medium hover:bg-neutral-tertiary-medium hover:text-heading focus:ring-4 focus:ring-neutral-tertiary shadow-xs font-medium leading-5 rounded-base text-sm px-4 py-2.5 focus:outline-none"
                >
                    Read more
                    <svg
                        className="w-4 h-4 ms-1.5 rtl:rotate-180 -me-0.5"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        width={24}
                        height={24}
                        fill="none"
                        viewBox="0 0 24 24"
                    >
                        <path
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M19 12H5m14 0-4 4m4-4-4-4"
                        />
                    </svg>
                </a>
            </div>

        </div>
    )
}    