import stars from "/src/assets/svg/Featured-Properties-stars.svg";


const Titles = ({h,p}) => {
  return (
    <div className="">
      <img src={stars} alt="Stars" className="mb-3 -ml-3" />
      <h1 className="text-white text-[clamp(28px,2vw,48px)] font-semibold mb-5 leading-11">
        {h}
      </h1>
      <p className="text-gray60 font-medium text-[clamp(14px,2vw,18px)] leading-7">
        {p}
      </p>
    </div>
  )
}

export default Titles
