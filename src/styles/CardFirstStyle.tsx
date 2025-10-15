
type CardContainerArgs = {
  children: React.ReactNode;
  className?: string;
}

const CardFirstStyle = ({children, className=""}: CardContainerArgs) => {
  return (
    <div className={`${className} w-full min-w-[300px] max-w-md md:max-w-none 
    bg-transparent  border border-gray-400/50 p-2 rounded-2xl`}>
      {children}
    </div>
  )
}

export default CardFirstStyle
