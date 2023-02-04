import { Satisfy } from '@next/font/google'
const Banner = () => {
  return (
    <div className="hero min-h-[80vh] bg-base-200">
    <div className="hero-content flex-col lg:flex-row-reverse">
      <div className="w-2/3 bg-[#131926] p-4 rounded-xl">

      <img src="https://images.unsplash.com/photo-1513436539083-9d2127e742f1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxMTc3M3wwfDF8c2VhcmNofDI5fHxkcmVhbXxlbnwwfHx8fDE2NzE0MzA3MTU&ixlib=rb-4.0.3&q=80&w=600" className="rounded-lg w-full aspect-video object-" />
      </div>
      <div className="w-1/2">
        <h1 className={`text-5xl font-bold nav_head`}>Never let your memories be greater than your dreams</h1>
        <p className="py-6 pr-4 text-[18px]">
                                    Before long the searchlight discovered some distance away a schooner with all sails set, apparently the same vessel which had been noticed earlier in the evening. The wind had by...
                                </p>
        
      </div>
    </div>
  </div>
  )
}

export default Banner
