import { Breadcrumb } from 'flowbite-react';
import { HiHome } from 'react-icons/hi';
// index.css
import './index.css';


export const SkeletonBanner=()=>{
    
    return (
                       <div id="banner">
                    <div className="relative grid h-[40rem] mx-4 mt-4 overflow-hidden text-gray-700 bg-gray-300 bg-clip-border rounded-xl place-items-center animate-pulse">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth="2"
                            stroke="currentColor"
                            className="w-12 h-12 text-gray-500"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="m2.25 15.75 5.159-5.159a2.25 2.25 0 0 1 3.182 0l5.159 5.159m-1.5-1.5 1.409-1.409a2.25 2.25 0 0 1 3.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 0 0 1.5-1.5V6a1.5 1.5 0 0 0-1.5-1.5H3.75A1.5 1.5 0 0 0 2.25 6v12a1.5 1.5 0 0 0 1.5 1.5Zm10.5-11.25h.008v.008h-.008V8.25Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z"
                            ></path>
                        </svg>
                    </div>
                </div>

    )
}

export const SkeletonCate=()=>{
    const numberOfDivs = 5;
    const divsToRender = [];

    for (let i = 0; i < numberOfDivs; i++) {
        divsToRender.push(
            <div key={i} className="grid overflow-hidden text-gray-700 bg-gray-300 bg-clip-border rounded-full place-items-center h-56 animate-pulse">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={2}
                    stroke="currentColor"
                    className="w-12 h-12 text-gray-500"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="m2.25 15.75 5.159-5.159a2.25 2.25 0 0 1 3.182 0l5.159 5.159m-1.5-1.5 1.409-1.409a2.25 2.25 0 0 1 3.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 0 0 1.5-1.5V6a1.5 1.5 0 0 0-1.5-1.5H3.75A1.5 1.5 0 0 0 2.25 6v12a1.5 1.5 0 0 0 1.5 1.5Zm10.5-11.25h.008v.008h-.008V8.25Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z"
                    ></path>
                </svg>
            </div>
        );
    }
    return (
        <div id="slick_cate" className="p-5 main_fix pt-5 bg-white">
            
            <div className="grid grid-cols-5 gap-4 md:grid-cols-5 gap-4 lg:grid-cols-5 gap-4">
                {divsToRender}
            
            </div>
        </div>
    )
}

export const SkeletonProduct=()=>{
    const numberOfDivs = 3;
    const divsToRender = [];

    for (let i = 0; i < numberOfDivs; i++) {
        divsToRender.push(
            <div key={i} className="relative flex flex-col mt-6 text-gray-700 bg-white shadow-md bg-clip-border rounded-xl w-80 animate-pulse">
                                    
                <div className="relative grid h-56 mx-4 mt-4 overflow-hidden text-gray-700 bg-gray-300 bg-clip-border rounded-xl place-items-center">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={2}
                        stroke="currentColor"
                        className="w-12 h-12 text-gray-500"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="m2.25 15.75 5.159-5.159a2.25 2.25 0 0 1 3.182 0l5.159 5.159m-1.5-1.5 1.409-1.409a2.25 2.25 0 0 1 3.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 0 0 1.5-1.5V6a1.5 1.5 0 0 0-1.5-1.5H3.75A1.5 1.5 0 0 0 2.25 6v12a1.5 1.5 0 0 0 1.5 1.5Zm10.5-11.25h.008v.008h-.008V8.25Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z"
                        ></path>
                    </svg>
                </div>
                <div className="p-6">
                    <div className="block w-56 h-3 mb-4 font-sans text-5xl antialiased font-semibold leading-tight tracking-normal bg-gray-300 rounded-full text-inherit">
                        &nbsp;
                    </div>
                    <div className="block w-full h-2 mb-2 font-sans text-base antialiased font-light leading-relaxed bg-gray-300 rounded-full text-inherit">
                        &nbsp;
                    </div>
                    <div className="block w-full h-2 mb-2 font-sans text-base antialiased font-light leading-relaxed bg-gray-300 rounded-full text-inherit">
                        &nbsp;
                    </div>
                    <div className="block w-full h-2 mb-2 font-sans text-base antialiased font-light leading-relaxed bg-gray-300 rounded-full text-inherit">
                        &nbsp;
                    </div>
                    <div className="block w-full h-2 mb-2 font-sans text-base antialiased font-light leading-relaxed bg-gray-300 rounded-full text-inherit">
                        &nbsp;
                    </div>
                </div>
                <div className="p-6 pt-0">
                    <button
                        disabled=""
                        tabIndex={-1}
                        className="align-middle select-none font-sans font-bold text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-3 px-6 rounded-lg text-white shadow-gray-900/10 hover:shadow-gray-900/20 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none h-8 w-20 bg-gray-300 shadow-none hover:shadow-none"
                        type="button"
                    >
                        &nbsp;
                    </button>
                </div>
            </div>
        );
    }
    return (
        <div id="slick_cate" className="p-5 main_fix pt-5 bg-white">
            <div className="flex flex-row justify-center items-center">
                     <div className="basis-1/6 animate-pulse">
                             <div className="p-8 pt-0">
                                 <button
                                     disabled=""
                                     tabIndex={-1}
                                     className="align-middle select-none font-sans font-bold text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-6 px-12 rounded-lg text-white shadow-gray-900/10 hover:shadow-gray-900/20 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none h-8 w-20 bg-gray-300 shadow-none hover:shadow-none"
                                     type="button"
                                >
                                    &nbsp;
                                 </button>
                             </div>
                         </div>
                         <div className="basis-1/6 animate-pulse">
                             <div className="p-8 pt-0">
                                 <button
                                     disabled=""
                                     tabIndex={-1}
                                     className="align-middle select-none font-sans font-bold text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-6 px-12 rounded-lg text-white shadow-gray-900/10 hover:shadow-gray-900/20 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none h-8 w-20 bg-gray-300 shadow-none hover:shadow-none"
                                     type="button"
                                 >
                                     &nbsp;
                                </button>
                            </div>
                         </div>
                    </div>
            <div className="grid grid-cols-1 gap-4 md:grid-cols-3 gap-4 lg:grid-cols-3 gap-4">
                {divsToRender}
            </div>

            <div className="flex flex-row justify-center items-center pt-5">
                        <div className="basis-1/6 animate-pulse">
                            <div className="p-8 pt-0">
                                <button
                                    disabled=""
                                    tabIndex={-1}
                                    className="align-middle select-none font-sans font-bold text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-6 px-24 rounded-lg text-white shadow-gray-900/10 hover:shadow-gray-900/20 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none h-8 w-20 bg-gray-300 shadow-none hover:shadow-none"
                                    type="button"
                                >
                                    &nbsp;
                                </button>
                            </div>
                        </div>
                    </div>
        </div>
    )
}

export const SkeletonProducts = () => {
    const numberOfDivs = 9;
    const divsToRender = [];

    for (let i = 0; i < numberOfDivs; i++) {
        divsToRender.push(
            <div
                key={i}
                className="relative flex flex-col mt-6 text-gray-700 bg-white shadow-md bg-clip-border rounded-xl w-80 animate-pulse"
            >
                <div className="relative grid h-56 mx-4 mt-4 overflow-hidden text-gray-700 bg-gray-300 bg-clip-border rounded-xl place-items-center">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={2}
                        stroke="currentColor"
                        className="w-12 h-12 text-gray-500"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="m2.25 15.75 5.159-5.159a2.25 2.25 0 0 1 3.182 0l5.159 5.159m-1.5-1.5 1.409-1.409a2.25 2.25 0 0 1 3.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 0 0 1.5-1.5V6a1.5 1.5 0 0 0-1.5-1.5H3.75A1.5 1.5 0 0 0 2.25 6v12a1.5 1.5 0 0 0 1.5 1.5Zm10.5-11.25h.008v.008h-.008V8.25Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z"
                        ></path>
                    </svg>
                </div>
                <div className="p-6">
                    <div className="block w-56 h-3 mb-4 font-sans text-5xl antialiased font-semibold leading-tight tracking-normal bg-gray-300 rounded-full text-inherit">
                        &nbsp;
                    </div>
                    <div className="block w-full h-2 mb-2 font-sans text-base antialiased font-light leading-relaxed bg-gray-300 rounded-full text-inherit">
                        &nbsp;
                    </div>
                    <div className="block w-full h-2 mb-2 font-sans text-base antialiased font-light leading-relaxed bg-gray-300 rounded-full text-inherit">
                        &nbsp;
                    </div>
                    <div className="block w-full h-2 mb-2 font-sans text-base antialiased font-light leading-relaxed bg-gray-300 rounded-full text-inherit">
                        &nbsp;
                    </div>
                    <div className="block w-full h-2 mb-2 font-sans text-base antialiased font-light leading-relaxed bg-gray-300 rounded-full text-inherit">
                        &nbsp;
                    </div>
                </div>
                <div className="p-6 pt-0">
                    <button
                        disabled=""
                        tabIndex={-1}
                        className="align-middle select-none font-sans font-bold text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-3 px-6 rounded-lg text-white shadow-gray-900/10 hover:shadow-gray-900/20 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none h-8 w-20 bg-gray-300 shadow-none hover:shadow-none"
                        type="button"
                    >
                        &nbsp;
                    </button>
                </div>
            </div>,
        );
    }
    return (
        <div id="slick_cate" className="p-5 main_fix pt-5 bg-white">
            <div className="flex flex-row justify-center items-center">
                <div className="basis-1/6 animate-pulse">
                    <div className="p-8 pt-0">
                        <button
                            disabled=""
                            tabIndex={-1}
                            className="align-middle select-none font-sans font-bold text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-6 px-12 rounded-lg text-white shadow-gray-900/10 hover:shadow-gray-900/20 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none h-8 w-20 bg-gray-300 shadow-none hover:shadow-none"
                            type="button"
                        >
                            &nbsp;
                        </button>
                    </div>
                </div>
                <div className="basis-1/6 animate-pulse">
                    <div className="p-8 pt-0">
                        <button
                            disabled=""
                            tabIndex={-1}
                            className="align-middle select-none font-sans font-bold text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-6 px-12 rounded-lg text-white shadow-gray-900/10 hover:shadow-gray-900/20 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none h-8 w-20 bg-gray-300 shadow-none hover:shadow-none"
                            type="button"
                        >
                            &nbsp;
                        </button>
                    </div>
                </div>
            </div>
            <div className="grid grid-cols-1 gap-4 md:grid-cols-3 gap-4 lg:grid-cols-3 gap-4">{divsToRender}</div>

            <div className="flex flex-row justify-center items-center pt-5">
                <div className="basis-1/6 animate-pulse">
                    <div className="p-8 pt-0">
                        <button
                            disabled=""
                            tabIndex={-1}
                            className="align-middle select-none font-sans font-bold text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-6 px-24 rounded-lg text-white shadow-gray-900/10 hover:shadow-gray-900/20 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none h-8 w-20 bg-gray-300 shadow-none hover:shadow-none"
                            type="button"
                        >
                            &nbsp;
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export const SkeletonPromotion = () => {
    const numberOfDivs = 9;
    const divsToRender = [];

    for (let i = 0; i < numberOfDivs; i++) {
        divsToRender.push(
            <div
                key={i}
                className="relative flex flex-col mt-6 text-gray-700 bg-white shadow-md bg-clip-border rounded-xl w-80 animate-pulse"
            >
                <div className="relative grid h-56 mx-4 mt-4 overflow-hidden text-gray-700 bg-gray-300 bg-clip-border rounded-xl place-items-center">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={2}
                        stroke="currentColor"
                        className="w-12 h-12 text-gray-500"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="m2.25 15.75 5.159-5.159a2.25 2.25 0 0 1 3.182 0l5.159 5.159m-1.5-1.5 1.409-1.409a2.25 2.25 0 0 1 3.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 0 0 1.5-1.5V6a1.5 1.5 0 0 0-1.5-1.5H3.75A1.5 1.5 0 0 0 2.25 6v12a1.5 1.5 0 0 0 1.5 1.5Zm10.5-11.25h.008v.008h-.008V8.25Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0"
                        ></path>
                    </svg>
                </div>
                <div className="p-6">
                    <div className="block w-56 h-3 mb-4 font-sans text-5xl antialiased font-semibold leading-tight tracking-normal bg-gray-300 rounded-full text-inherit">
                        &nbsp;
                    </div>
                    <div className="block w-full h-2 mb-2 font-sans text-base antialiased font-light leading-relaxed bg-gray-300 rounded-full text-inherit">
                        &nbsp;
                    </div>
                    <div className="block w-full h-2 mb-2 font-sans text-base antialiased font-light leading-relaxed bg-gray-300 rounded-full text-inherit">
                        &nbsp;
                    </div>
                    <div className="block w-full h-2 mb-2 font-sans text-base antialiased font-light leading-relaxed bg-gray-300 rounded-full text-inherit">
                        &nbsp;
                    </div>
                    <div className="block w-full h-2 mb-2 font-sans text-base antialiased font-light leading-relaxed bg-gray-300 rounded-full text-inherit">
                        &nbsp;
                    </div>
                </div>
                <div className="p-6 pt-0">
                    <button
                        disabled=""
                        tabIndex={-1}
                        className="align-middle select-none font-sans font-bold text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-3 px-6 rounded-lg text-white shadow-gray-900/10 hover:shadow-gray-900/20 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none h-8 w-20 bg-gray-300 shadow-none hover:shadow-none"
                        type="button"
                    >
                        &nbsp;
                    </button>
                </div>
            </div>,
        );
    }
    return (
        <div id="slick_cate" className="p-5 main_fix pt-5 bg-white">
            <div className="flex flex-row justify-center items-center pt-5">
                <div className="basis-1/6 animate-pulse">
                    <div className="p-8 pt-0">
                        <button
                            disabled=""
                            tabIndex={-1}
                            className="align-middle select-none font-sans font-bold text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-6 px-24 rounded-lg text-white shadow-gray-
                            900/10 hover:shadow-gray-900/20 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none h-8 w-20 bg-gray-300 shadow-none hover:shadow-none"
                            type="button"
                        >
                            &nbsp;
                        </button>
                    </div>
                </div>
            </div>
            <div className="grid grid-cols-1 gap-4 md:grid-cols-3 gap-4 lg:grid-cols-3 gap-4">{divsToRender}</div>

            <div className="flex flex-row justify-center items-center pt-5">
                <div className="basis-1/6 animate-pulse">
                    <div className="p-8 pt-0">
                        <button
                            disabled=""
                            tabIndex={-1}
                            className="align-middle select-none font-sans font-bold text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-6 px-24 rounded-lg text-white shadow-gray-
                            900/10 hover:shadow-gray-900/20 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none h-8 w-20 bg-gray-300 shadow-none hover:shadow-none"
                            type="button"
                        >
                            &nbsp;
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export const SkeletonVideo = () => {
    return (
        <div className="main_fix pt-5">
            <div className="flex flex-row justify-center items-center pt-5">
                <div className="basis-1/6">
                    <div className="p-8 pt-0">
                        <button
                            disabled=""
                            tabIndex={-1}
                            className="align-middle select-none font-sans font-bold text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-6 px-24 rounded-lg text-white shadow-gray-900/10 hover:shadow-gray-900/20 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none h-8 w-20 bg-gray-300 shadow-none hover:shadow-none"
                            type="button"
                        >
                            &nbsp;
                        </button>
                    </div>
                </div>
            </div>
            <div className="grid h-full max-h-[1000px] min-h-[500px] w-full  animate-pulse place-items-center rounded-lg bg-gray-300">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="2"
                    stroke="currentColor"
                    className="w-12 h-12 text-gray-500"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="m15.75 10.5 4.72-4.72a.75.75 0 0 1 1.28.53v11.38a.75.75 0 0 1-1.28.53l-4.72-4.72M4.5 18.75h9a2.25 2.25 0 0 0 2.25-2.25v-9a2.25 2.25 0 0 0-2.25-2.25h-9A2.25 2.25 0 0 0 2.25 7.5v9a2.25 2.25 0 0 0 2.25 2.25Z"
                    ></path>
                </svg>
            </div>
        </div>
    );
};

export const SkeletonDetail = () => {
    return (
        <>
            <>
                <div className="container mx-auto my-12"></div>
                <div className="container mx-auto flex flex-col justify-between lg:flex-row gap-16 lg:items-center">
                    <div className="flex flex-col gap-6 lg:w-2/4">
                        <div
                            role="status"
                            className="flex items-center justify-center h-[42rem] bg-gray-300 rounded-lg animate-pulse dark:bg-gray-700"
                        >
                            <svg
                                className="w-10 h-10 text-gray-200 dark:text-gray-600"
                                aria-hidden="true"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="currentColor"
                                viewBox="0 0 16 20"
                            >
                                <path d="M5 5V.13a2.96 2.96 0 0 0-1.293.749L.879 3.707A2.98 2.98 0 0 0 .13 5H5Z" />
                                <path d="M14.066 0H7v5a2 2 0 0 1-2 2H0v11a1.97 1.97 0 0 0 1.934 2h12.132A1.97 1.97 0 0 0 16 18V2a1.97 1.97 0 0 0-1.934-2ZM9 13a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-2a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v2Zm4 .382a1 1 0 0 1-1.447.894L10 13v-2l1.553-1.276a1 1 0 0 1 1.447.894v2.764Z" />
                            </svg>
                            <span className="sr-only">Loading...</span>
                        </div>
                    </div>
                    <div className="flex flex-col gap-4 lg:w-2/4">
                        <div
                            role="status"
                            className="max-w-md p-4 space-y-4 border border-gray-200 divide-y divide-gray-200 rounded shadow animate-pulse dark:divide-gray-700 md:p-6 dark:border-gray-700"
                        >
                            <div className="flex items-center justify-between">
                                <div>
                                    <div className="h-2.5 bg-gray-300 rounded-full dark:bg-gray-600 w-24 mb-2.5"></div>
                                    <div className="w-32 h-2 bg-gray-200 rounded-full dark:bg-gray-700"></div>
                                </div>
                                <div className="h-2.5 bg-gray-300 rounded-full dark:bg-gray-700 w-12"></div>
                            </div>
                            <div className="flex items-center justify-between pt-4">
                                <div>
                                    <div className="h-2.5 bg-gray-300 rounded-full dark:bg-gray-600 w-24 mb-2.5"></div>
                                    <div className="w-32 h-2 bg-gray-200 rounded-full dark:bg-gray-700"></div>
                                </div>
                                <div className="h-2.5 bg-gray-300 rounded-full dark:bg-gray-700 w-12"></div>
                            </div>
                            <div className="flex items-center justify-between pt-4">
                                <div>
                                    <div className="h-2.5 bg-gray-300 rounded-full dark:bg-gray-600 w-24 mb-2.5"></div>
                                    <div className="w-32 h-2 bg-gray-200 rounded-full dark:bg-gray-700"></div>
                                </div>
                                <div className="h-2.5 bg-gray-300 rounded-full dark:bg-gray-700 w-12"></div>
                            </div>
                            <div className="flex items-center justify-between pt-4">
                                <div>
                                    <div className="h-2.5 bg-gray-300 rounded-full dark:bg-gray-600 w-24 mb-2.5"></div>
                                    <div className="w-32 h-2 bg-gray-200 rounded-full dark:bg-gray-700"></div>
                                </div>
                                <div className="h-2.5 bg-gray-300 rounded-full dark:bg-gray-700 w-12"></div>
                            </div>
                            <div className="flex items-center justify-between pt-4">
                                <div>
                                    <div className="h-2.5 bg-gray-300 rounded-full dark:bg-gray-600 w-24 mb-2.5"></div>
                                    <div className="w-32 h-2 bg-gray-200 rounded-full dark:bg-gray-700"></div>
                                </div>
                                <div className="h-2.5 bg-gray-300 rounded-full dark:bg-gray-700 w-12"></div>
                            </div>
                            <span className="sr-only">Loading...</span>
                        </div>
                        <div
                            role="status"
                            className="max-w-md p-4 space-y-4 border border-gray-200 divide-y divide-gray-200 rounded shadow animate-pulse dark:divide-gray-700 md:p-6 dark:border-gray-700"
                        >
                            <div className="flex items-center justify-between">
                                <div>
                                    <div className="h-2.5 bg-gray-300 rounded-full dark:bg-gray-600 w-24 mb-2.5"></div>
                                    <div className="w-32 h-2 bg-gray-200 rounded-full dark:bg-gray-700"></div>
                                </div>
                                <div className="h-2.5 bg-gray-300 rounded-full dark:bg-gray-700 w-12"></div>
                            </div>
                            <div className="flex items-center justify-between pt-4">
                                <div>
                                    <div className="h-2.5 bg-gray-300 rounded-full dark:bg-gray-600 w-24 mb-2.5"></div>
                                    <div className="w-32 h-2 bg-gray-200 rounded-full dark:bg-gray-700"></div>
                                </div>
                                <div className="h-2.5 bg-gray-300 rounded-full dark:bg-gray-700 w-12"></div>
                            </div>
                            <div className="flex items-center justify-between pt-4">
                                <div>
                                    <div className="h-2.5 bg-gray-300 rounded-full dark:bg-gray-600 w-24 mb-2.5"></div>
                                    <div className="w-32 h-2 bg-gray-200 rounded-full dark:bg-gray-700"></div>
                                </div>
                                <div className="h-2.5 bg-gray-300 rounded-full dark:bg-gray-700 w-12"></div>
                            </div>
                            <div className="flex items-center justify-between pt-4">
                                <div>
                                    <div className="h-2.5 bg-gray-300 rounded-full dark:bg-gray-600 w-24 mb-2.5"></div>
                                    <div className="w-32 h-2 bg-gray-200 rounded-full dark:bg-gray-700"></div>
                                </div>
                                <div className="h-2.5 bg-gray-300 rounded-full dark:bg-gray-700 w-12"></div>
                            </div>
                            <div className="flex items-center justify-between pt-4">
                                <div>
                                    <div className="h-2.5 bg-gray-300 rounded-full dark:bg-gray-600 w-24 mb-2.5"></div>
                                    <div className="w-32 h-2 bg-gray-200 rounded-full dark:bg-gray-700"></div>
                                </div>
                                <div className="h-2.5 bg-gray-300 rounded-full dark:bg-gray-700 w-12"></div>
                            </div>
                            <span className="sr-only">Loading...</span>
                        </div>
                    </div>
                </div>
                <div className="container mx-auto grid grid-cols-2 gap-4 dark:bg-gray-800 p-4 mt-5 rounded-lg">
                    {/* Left Column */}
                    <div
                        // căn giữa
                        className="flex flex-col justify-center items-center gap-4 p-4 bg-white rounded-lg "
                    >
                        <div role="status" className="space-y-2.5 animate-pulse max-w-lg">
                            <div className="flex items-center w-full">
                                <div className="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-32"></div>
                                <div className="h-2.5 ms-2 bg-gray-300 rounded-full dark:bg-gray-600 w-24"></div>
                                <div className="h-2.5 ms-2 bg-gray-300 rounded-full dark:bg-gray-600 w-full"></div>
                            </div>
                            <div className="flex items-center w-full max-w-[480px]">
                                <div className="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-full"></div>
                                <div className="h-2.5 ms-2 bg-gray-300 rounded-full dark:bg-gray-600 w-full"></div>
                                <div className="h-2.5 ms-2 bg-gray-300 rounded-full dark:bg-gray-600 w-24"></div>
                            </div>
                            <div className="flex items-center w-full max-w-[400px]">
                                <div className="h-2.5 bg-gray-300 rounded-full dark:bg-gray-600 w-full"></div>
                                <div className="h-2.5 ms-2 bg-gray-200 rounded-full dark:bg-gray-700 w-80"></div>
                                <div className="h-2.5 ms-2 bg-gray-300 rounded-full dark:bg-gray-600 w-full"></div>
                            </div>
                            <div className="flex items-center w-full max-w-[480px]">
                                <div className="h-2.5 ms-2 bg-gray-200 rounded-full dark:bg-gray-700 w-full"></div>
                                <div className="h-2.5 ms-2 bg-gray-300 rounded-full dark:bg-gray-600 w-full"></div>
                                <div className="h-2.5 ms-2 bg-gray-300 rounded-full dark:bg-gray-600 w-24"></div>
                            </div>
                            <div className="flex items-center w-full max-w-[440px]">
                                <div className="h-2.5 ms-2 bg-gray-300 rounded-full dark:bg-gray-600 w-32"></div>
                                <div className="h-2.5 ms-2 bg-gray-300 rounded-full dark:bg-gray-600 w-24"></div>
                                <div className="h-2.5 ms-2 bg-gray-200 rounded-full dark:bg-gray-700 w-full"></div>
                            </div>
                            <div className="flex items-center w-full max-w-[360px]">
                                <div className="h-2.5 ms-2 bg-gray-300 rounded-full dark:bg-gray-600 w-full"></div>
                                <div className="h-2.5 ms-2 bg-gray-200 rounded-full dark:bg-gray-700 w-80"></div>
                                <div className="h-2.5 ms-2 bg-gray-300 rounded-full dark:bg-gray-600 w-full"></div>
                            </div>
                            <span className="sr-only">Loading...</span>
                        </div>
                    </div>

                    {/* Right Column */}
                    {/* căn giữa */}
                    <div className=" flex flex-col justify-center  gap-4 p-4 bg-white rounded-lg">
                        <div role="status" className="space-y-2.5 animate-pulse max-w-lg">
                            <div className="flex items-center w-full">
                                <div className="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-32"></div>
                                <div className="h-2.5 ms-2 bg-gray-300 rounded-full dark:bg-gray-600 w-24"></div>
                                <div className="h-2.5 ms-2 bg-gray-300 rounded-full dark:bg-gray-600 w-full"></div>
                            </div>
                            <div className="flex items-center w-full max-w-[480px]">
                                <div className="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-full"></div>
                                <div className="h-2.5 ms-2 bg-gray-300 rounded-full dark:bg-gray-600 w-full"></div>
                                <div className="h-2.5 ms-2 bg-gray-300 rounded-full dark:bg-gray-600 w-24"></div>
                            </div>
                            <div className="flex items-center w-full max-w-[400px]">
                                <div className="h-2.5 bg-gray-300 rounded-full dark:bg-gray-600 w-full"></div>
                                <div className="h-2.5 ms-2 bg-gray-200 rounded-full dark:bg-gray-700 w-80"></div>
                                <div className="h-2.5 ms-2 bg-gray-300 rounded-full dark:bg-gray-600 w-full"></div>
                            </div>
                            <div className="flex items-center w-full max-w-[480px]">
                                <div className="h-2.5 ms-2 bg-gray-200 rounded-full dark:bg-gray-700 w-full"></div>
                                <div className="h-2.5 ms-2 bg-gray-300 rounded-full dark:bg-gray-600 w-full"></div>
                                <div className="h-2.5 ms-2 bg-gray-300 rounded-full dark:bg-gray-600 w-24"></div>
                            </div>
                            <div className="flex items-center w-full max-w-[440px]">
                                <div className="h-2.5 ms-2 bg-gray-300 rounded-full dark:bg-gray-600 w-32"></div>
                                <div className="h-2.5 ms-2 bg-gray-300 rounded-full dark:bg-gray-600 w-24"></div>
                                <div className="h-2.5 ms-2 bg-gray-200 rounded-full dark:bg-gray-700 w-full"></div>
                            </div>
                            <div className="flex items-center w-full max-w-[360px]">
                                <div className="h-2.5 ms-2 bg-gray-300 rounded-full dark:bg-gray-600 w-full"></div>
                                <div className="h-2.5 ms-2 bg-gray-200 rounded-full dark:bg-gray-700 w-80"></div>
                                <div className="h-2.5 ms-2 bg-gray-300 rounded-full dark:bg-gray-600 w-full"></div>
                            </div>
                            <span className="sr-only">Loading...</span>
                        </div>
                    </div>
                </div>

                {/* EditorTextParser căn giữa */}
                {/* <div className="container mx-auto">
                        <EditorTextParser data={data} />
                    </div> */}
            </>
        </>
    );
};


export const SkeletonReview = () => {
    return (
        // 
        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-4 2xl:grid-cols-4 gap-7 xl:gap-10">
           {/* dung for tao 10 ban review */}
           {Array.from({ length: 12 }).map((_, index) => (
                <div
                key={index}
                 role="status" class="flex items-center justify-center h-96 max-w-lg bg-gray-300 rounded-lg animate-pulse dark:bg-gray-700">
                <svg class="w-10 h-10 text-gray-200 dark:text-gray-600" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 16 20">
                <path d="M5 5V.13a2.96 2.96 0 0 0-1.293.749L.879 3.707A2.98 2.98 0 0 0 .13 5H5Z"/>
                <path d="M14.066 0H7v5a2 2 0 0 1-2 2H0v11a1.97 1.97 0 0 0 1.934 2h12.132A1.97 1.97 0 0 0 16 18V2a1.97 1.97 0 0 0-1.934-2ZM9 13a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-2a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v2Zm4 .382a1 1 0 0 1-1.447.894L10 13v-2l1.553-1.276a1 1 0 0 1 1.447.894v2.764Z"/>
              </svg>
                <span class="sr-only">Loading...</span>
            </div>
              ))}

        </div>
    
    );
}