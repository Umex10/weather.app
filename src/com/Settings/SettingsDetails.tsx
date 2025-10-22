import Advanced from "../Advanced"
import Settings from "../Settings"


const SettingsDetails = () => {
  return (
    <section className="w-full flex flex-col items-center md:items-start md:flex-row 
     gap-8 pt-[2rem] md:pt-0">
      <Settings></Settings>
      <Advanced></Advanced>
   
    </section>
  )
}

export default SettingsDetails
