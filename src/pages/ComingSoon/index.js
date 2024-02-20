function ComingSoon() {
    return (
        <div>
            <div
                className="relative h-screen w-full flex flex-col items-center justify-center text-center text-white bg-cover bg-center"
                style={{
                    backgroundImage:
                        'url(https://firebasestorage.googleapis.com/v0/b/psycteamv1.appspot.com/o/z5162180358756_d939b429c4106a23052d4b07b1c4dfa8.jpg?alt=media&token=9073d097-45db-4f67-b443-4f1251c35e92)',
                }}
            >
                <div className="absolute top-0 right-0 bottom-0 left-0 bg-gray-900 opacity-90" />
                <div className="z-10 text-sm">WE ARE COMING SOON!</div>
                <div className="flex items-end justify-center z-10">
                    <div className="m-2 sm:m-5">
                        <span className="text-indigo-600 font-bold text-xl sm:text-5xl">09</span>
                        <p>Days</p>
                    </div>
                    <div className="m-2 sm:m-5">
                        <span className="text-indigo-600 font-bold text-xl sm:text-5xl">13</span>
                        <p>Hours</p>
                    </div>
                    <div className="m-2 sm:m-5">
                        <span className="text-indigo-600 font-bold text-xl sm:text-5xl">47</span>
                        <p>Minutes</p>
                    </div>
                    <div className="m-2 sm:m-5">
                        <span className="text-indigo-600 font-bold text-xl sm:text-5xl">20</span>
                        <p>Seconds</p>
                    </div>
                </div>
                <div className="rounded-md shadow z-10 mt-5">
                    <a
                        href="/"
                        className="w-full px-8 py-3 border border-transparent text-base leading-6 font-light rounded-full text-white bg-indigo-600 hover:bg-indigo-500 focus:outline-none focus:border-indigo-700 focus:shadow-outline-indigo transition duration-150 ease-in-out md:py-4 md:text-md md:px-16"
                    >
                        <span>CKD</span>
                    </a>
                </div>
            </div>
        </div>
    );
}

export default ComingSoon;
