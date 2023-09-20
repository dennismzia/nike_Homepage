import Button from "../components/Button";
import  {arrowRight} from '../assets/icons';
import { statistics} from '../constants';

const Hero = () => (
  <section 
  id="home"
  className="w-full xl:flex-row flex-col justify-center min-h-screen gap-10 max-container  border-2 border-red-500 p-2"
  >
    <div className="relative xl:w-2/5 flex flex-col justify-center items-start w-full max-xl:padding-x pt-28">
       <p className="text-xl font-montserrat text-coral-red" >Our summer Collection</p>
       <h1>
        <span>The New Arrival</span>
        <br />
        <span>Nike </span>
        Shoes
       </h1>
       <p>
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