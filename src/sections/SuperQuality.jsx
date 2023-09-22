import Button from "../components/Button";
import {arrowRight} from '../assets/icons';
import { shoe8 } from "../assets/images";

const SuperQuality = () => {
  return (
    <section id="about-us" className="flex justify-between items-center max-lg:flex-col gap-10 w-full max-container">

    <div className="flex flex-1 flex-col">
    <h2 className="font-palanquin text-4xl capitalize font-bold lg:max-w-lg">
      We provide you
      <span className="text-coral-red">
      super
      </span> 
      <span className="text-coral-red">
      Quality
      </span>
      shoes
    </h2>

    <p className="mt-4 lg:max-w-lg info-text">
      Ensuring premium comfort and style, our meticulously crafted footwear is designed to elevate your experience, providing you with unmatched and  a touch of elegance
    </p>
  <p className="mt-6 lg:max-w-lg info-text"> 
    Our dedication t detail and excellence ensures your satisfaction
  </p>
    <div>
    <Button label="View details" />
    </div>

    <div className="flex-1 flex justify-center items-center">
      <img src={shoe8} alt="shoe8"
      width={570}
      height={522} className="object-contain" />

    </div>


    </div>

    </section>
  )
}

export default SuperQuality