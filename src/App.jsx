import Card from "./components/Card"
import Supervisor from "./assets/images/icon-supervisor.svg"
import TeamBuilder from "./assets/images/icon-team-builder.svg"
import Karma from "./assets/images/icon-karma.svg"
import Calculator from "./assets/images/icon-calculator.svg"

const App = () => {
  return (
    <section className="py-20  px- max-[640px]:px-8 bg-neutral-Very_Light_Gray">
      <div className="w-full min-h-screen text-center font-poppins">
          <h2 className="text-[30px] max-[640px]:text-[26px] text-neutral-Grayish_Blue font-light">Reliable, efficient delivery</h2>
          <h1 className="text-[30px] max-[640px]:text-[26px] text-neutral-Very_Dark_Blue font-semibold">
            Powered by Technology
          </h1>
          <p className="text-text text-neutral-Grayish_Blue font-light mt-5 ">
           Our Artificial Intelligence powered tools use millions of project data <br className="max-[640px]:hidden"/>
           points to ensure that your project is successful
          </p>
          <div className="flex items-center justify-center max-[960px]:flex-col gap-x-8">
              <Card title={"Supervisor"} desc={"Monitors activity to identify project roadblocks"} BColor={"border-primary-cyan"} icon={Supervisor} />
              <div className="flex flex-col items-center justify-center ">
                  <Card title={"Team Builder"} desc={"Scans our talent network to create the optimal team for your project"} BColor={"border-primary-red"} icon={TeamBuilder} />
                  <Card title={"Karma"} desc={"Regularly evaluates our talent to ensure quality"} BColor={"border-primary-orange"} icon={Karma} />
              </div>
             <Card title={"Calculator"} desc={"Uses ciclta from past projects to provide better clalivery estimates"} BColor={"border-primary-blue"} icon={Calculator } />
          </div>
      </div>
    </section>
  )
}

export default App 
