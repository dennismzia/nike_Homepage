const ShoeCard = ({imgURL, changeBigShoeImage, bigShoeImage}) => (
    <div className={`border-2 rounded-xl
        ${bigShoeImage === imgURL ? 'border-coral-red':'border-transparent'
        } cursor-pointer max-sm:flex-1
    `}>
        ShoeCard
    </div>
)

export default ShoeCard