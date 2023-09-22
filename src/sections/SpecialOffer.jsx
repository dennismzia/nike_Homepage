import {} from '../constants';
import {offer} from '../assets/images';
import Button from '../components/Button';


const SpecialOffer = () => {
  return (
    <section className="flex justify-wrap items-center max-xl:flex-col-reverse gap-10 max-container">
       <div className="flex-1">
        <img src={offer} alt="" width={773} height={687} className="object-contain w-full"/>
        
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

   </div>
   </div>

    </section>
  )
}

export default SpecialOffer