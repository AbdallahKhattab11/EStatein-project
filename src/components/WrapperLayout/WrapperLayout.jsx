/* eslint-disable react/prop-types */



const WrapperLayout = ({wrapperData, customCard}) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
      {wrapperData.map((obj)=> {
        return <div key={obj.id} className="card p-10 border border-gray15 rounded-xl flex flex-col gap-5">
          <div className="icon-title flex items-center gap-4">
            <img src={obj.icon} alt={obj.title} className="size-[40px] lg:size-[60px]" />
            <h3 className="text-[clamp(18px,1.5vw,24px)] font-semibold">{obj.title}</h3>
          </div>
          <p className="text-gray60 text-[clamp(14px,1vw,18px)] font-medium leading-6">{obj.description}</p>
        </div>
      })}
      <div className="custom-card bg-gray10 rounded-xl p-10 col-span-1 md:col-span-2 flex flex-col gap-5 relative z-0">
        <div className="svg w-full h-full absolute top-0 left-0 z-[-1] "><img className="w-full h-full object-cover object-left" src={customCard.svg} alt={customCard.title} /></div>
        <div className="titles-button w-full flex flex-col md:flex-row md:justify-between md:items-center gap-5">
          <h3 className="text-[clamp(20px,1.5vw,28px)] font-semibold leading-7">{customCard.title}</h3>
          <button type="button" className="bg-gray8 text-[14px] cursor-pointer tracking-wide border border-gray15 rounded-lg p-4 w-full md:w-auto">Learn More</button>
        </div>
        <p className="text-gray60 text-[clamp(14px,1vw,18px)] font-medium leading-6">{customCard.description}</p>
      </div>
    </div>
  )
}



export default WrapperLayout