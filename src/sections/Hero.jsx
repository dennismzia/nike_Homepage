import Button from "../components/Button";
import  {arrowRight} from '../assets/icons';
import { statistics} from '../constants';

const Hero = () => (
  <section 
  id="home"
  className="w-full xl:flex-row flex-col justify-center min-h-screen gap-10 max-container  p-2"
  >
    <div className="relative xl:w-2/5 flex flex-col justify-center items-start w-full max-xl:padding-x pt-28">
       <p className="text-xl font-montserrat text-coral-red" >Our summer Collection</p>
       <h1 className="mt-10 font-palanquin text-8xl max-sm:text-[72px] max-sm:leading-[82] font-bold">
        <span className="xl:bg-white xl:whitespace-nowrap relative z-10 pr-10"> The New Arrival</span>
        <br />
        <span className="text-coral-red inline-block mt-3">Nike </span> Shoes
       </h1>
       <p className="font-montserrat text-slate-gray">
        Discover stylish Nike arrivals, quality comfort, and innovation for your active life.
       </p>
        
       <Button label="Shop now"
       iconURL={arrowRight} />

       <div className="flex justify-start items-start flex-wrap w-full mt-20 gap-16">
        {statistics.map((stat) => (
          <div key={stat.label}>
            <p>{stat.value}</p>
            <p>{stat.label}</p>
          </div>
        ))}

       </div>

    </div>

  </section>
)

export default Hero