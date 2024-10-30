import Link from "next/link";

export default function Home() {

  
  return (
   <>
   <nav className="mx-[59px] h-[91px] px-[136]  flex justify-between items-center gap-x-20">
      <h3 className="text-2xl font-bold">BrandName </h3>

      <div className="grow flex items-center justify-between">
        <ul className="flex items-center gap-x-5">
          <li>Home</li>
          <li>Product</li>
          <li>Pricing</li>
          <li>Contact</li>
        </ul>

        <div className="flex items-center gap-x-11">
          <Link href="#" className="text-sm font-bold ">Login</Link>
          <button className="py-4 px-6 bg-[#23A6F0] rounded font-bold border-2-green ">Join Us</button>
        </div>
      </div>
    </nav>
    <main className="w-[1024] py-20 space-y-20 mx-auto">
     
<section className="max-w-4xl py-10 space-y-10 text-center mx-auto">
  <h5 className="font-bold text-[#23A6F0]">Welcome</h5>

  <h1 className="font-montserrat font-bold text-[58px] leading-[80px] tracking-[0.2px] text-center text-white  ">
  Selling on the internet like a pro
</h1>


  <h4 className="text-white text-xl">
    We know how large objects will act, but things on a small scale...
  </h4>
  <div className="space-x-2.5 "> 
            <button className="text-white bg-[#23A6F0] py-[15px] px-10 rounded">Get Quote Now</button>
            <button className="text-[23A6F0] font-bold py-[15px] px-10 border border-[#23A6F0] rounded">Learn More</button>          
          </div>


</section>
       
     <section className="  flex gap-5">
    
      <div className="w-[328px] h-[292px] px-[35px] py-[40] bg-white rounded-lg flex flex-col gap-5">
        <div className="w-12 h-12 bg-pink-200 rounded "></div>
        <h5 className=" font-montserrat font-bold text-[16px] leading-[24px] tracking-tightest text-[#252B42]">Training Courses</h5>
        <div className="w-[50px] h-[2px] bg-[#E74040]"></div>
        <p className=" font-montserrat font-normal text-[14px] leading-[20px] tracking-[0.2px] text-[#737373]">
          The gradual accumulation of information about atomic and small-scale behaviour.
        </p>
      </div>


      <div className="w-[328px] h-[292px] px-[35px] py-[40] bg-white rounded-lg flex flex-col gap-5">
        <div className="w-12 h-12 bg-[#B9EAA8] rounded "></div>
        <h5 className=" font-montserrat font-bold text-[16px] leading-[24px] tracking-tightest text-[#252B42]">2,769 online courses</h5>
        <div className="w-[50px] h-[2px] bg-[#E74040]"></div>
        <p className=" font-montserrat font-normal text-[14px] leading-[20px] tracking-[0.2px] text-[#737373]">
          The gradual accumulation of information about atomic and small-scale behaviour.
        </p>
      </div>

      <div className="w-[328px] h-[292px] px-[35px] py-[40] bg-[#23A6F0] rounded-lg flex flex-col gap-5">
        <div className="w-12 h-12 bg-[#ffffff] rounded "></div>
        <h5 className=" font-montserrat font-bold text-[16px] leading-[24px] tracking-tightest text-[#ffffff]">training Courses</h5>
        <div className="w-[50px] h-[2px] bg-[#ffffff]"></div>
        <p className=" font-montserrat font-normal text-[14px] leading-[20px] tracking-[0.2px] text-[#ffffff]">
          The gradual accumulation of information about atomic and small-scale behaviour.
        </p>
      </div>
      
      </section>
    </main>
    </>
     
  );
}
