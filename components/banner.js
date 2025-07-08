export default function Banner() {
  return (
    <div className="fixed z-[100] h-[60px] md:h-[50px] top-0 w-full bg-black text-black overflow-hidden flex items-center justify-center">
      <div className="w-full max-w-[1300px] flex flex-col lg:flex-row gap-x-[10px] px-[10px]">
        <p className="font-medium font-[Inter] text-white text-xs sm:text-sm">Building something that you just can't put down?</p>
        <p className="text-white font-light text-xs sm:text-sm">I'm open to new opportunities and excited to design, build, and scale. If you have something in mind, <a href="https://calendly.com/drebarrera/chat" className="text-[#93EDFF] hover:underline">let's talk.</a></p>
      </div>
    </div>
  );
}