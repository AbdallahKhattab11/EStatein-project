/* eslint-disable react/prop-types */


const Client = ({title, desc, stars, img, name, address}) => {
  return (
    <div className="client border-1 border-gray15 rounded-xl p-5 flex flex-col gap-7 min-h-[390px]">
      <div className="stars flex gap-2">
      {[...Array(5)].map((_, index) => (
        <span className="size-[38px] border-1 border-gray15 bg-gray10 rounded-full flex items-center justify-center" key={index}>{stars}</span>
      ))}
      </div>
      <div className="">
        <h2 className="text-white text-[clamp(18px,2vw,20px)] font-semibold mb-4">{title}</h2>
        <p className="text-gray60 text-[clamp(14px,2vw,16px)] font-medium leading-7">{desc}</p>
      </div>
      <div className="flex items-center gap-2.5">
        <div className="img">
          <img src={img}className="size-[50px]" alt="" />
        </div>
        <div className="">
          <h2 className="text-white text-[16px] font-medium ">{name}</h2>
          <p className="text-gray60 text-[14px] font-medium mt-1.5">{address}</p>
        </div>
      </div>
    </div>
  )
}

export default Client