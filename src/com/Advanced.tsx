
//? Container in main on the right side
const Advanced = () => {
  return (
    // 
    <section className="w-full md:pt-6 min-w-[300px] max-w-md md:max-w-none md:flex-[2]
    flex flex-col gap-8">
      <div className="bg-transparent  border border-gray-400/50 p-6 rounded-2xl">
      <div className="flex flex-col gap-8 text-white">
        <h2 className="font-extrabold text-4xl">Advanced</h2>
        <hr className="w-full border-t border-gray-300 dark:border-gray-600" />
        <div className="flex flex-col gap-4">
          <h3 className="font-extrabold text-xl">Get new features!</h3>
          <div>
            <ol className="text-[15px] text-gray-400">
              <li>• Ad free</li>
              <li>• Severe weather notifications</li>
              <li>• More detailed weather infos</li>
            </ol>
        </div>
        </div>
       
        <div className="w-full flex flex-row justify-center">
          <button className="w-[80%] text-center text-nowrap py-4  px-6 md:px-32
           bg-transparent font-extrabold
          border border-gray-400/50 rounded-2xl text-2xl
          hover:bg-white/5 hover:scale-105 hover:shadow-md transition-transform duration-200 ease-in-out">$5.99
          <span className="text-sm text-gray-400">
            /month
            </span></button>
        </div>
        
      </div>
      </div>
         <div className="bg-transparent  border border-gray-400/50 p-6 rounded-2xl">
       <div className="flex flex-col gap-8 text-white">
        <h2 className="font-extrabold text-2xl">Never forget your umbrella!</h2>
        <hr className="w-full border-t border-gray-300 dark:border-gray-600" />
        <p className="md:w-[60%]">Sign up for our daily weather newsletter made just for you!</p>
         <div className="w-full flex flex-row justify-center">
          <button className="w-[80%] text-nowrap py-4  px-6 md:px-32 bg-violet-400 font-extrabold
          border border-gray-400/50 rounded-2xl text-2xl
          hover:bg-white/5 hover:scale-105 hover:shadow-md transition-transform duration-200 ease-in-out">Sign up</button>
        </div>
      </div>

      
        </div>
    </section>
  )
}

export default Advanced
