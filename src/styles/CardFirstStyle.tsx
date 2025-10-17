

type CardContainerArgs = {
  children: React.ReactNode;
  className?: string;
}

/* This will be our styling class for the first com inside CurrentWeather
   In order to reuse this com efficiently */

const CardFirstStyle = ({children, className=""}: CardContainerArgs) => {
  return (
    <div className={`${className} w-full min-w-[300px] max-w-md md:max-w-none 
    bg-transparent  border border-gray-400/50 p-2 rounded-2xl`}>
      {children}
    </div>
  )
}

export default CardFirstStyle
