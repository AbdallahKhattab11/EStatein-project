/* eslint-disable react/prop-types */

const Question = ({title, desc}) => {
  return (
    <div className="Question py-5 px-7 flex flex-col justify-center gap-6 border-1 border-gray15 rounded-xl h-[320px]">
      <h3 className="text-white text-[clamp(18px,2vw,20px)] font-semibold leading-7">{title}</h3>
      <p className="text-gray60 text-[clamp(14px,2vw,16px)] font-medium leading-7">{desc}</p>
      <button type="button" className="w-[107px] h-[46px] border-1 border-gray15 bg-gray10 rounded-lg text-[14px] text-white">Read More</button>
    </div>
  )
}

export default Question