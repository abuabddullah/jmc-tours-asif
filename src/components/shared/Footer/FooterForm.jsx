import { FaRegCheckCircle } from "react-icons/fa";

const FooterForm = () => {
  return (
    <form action="" className="flex flex-col gap-3">
      <input type="email" name="email" id="" placeholder="Email Address" className="text-center rounded-lg p-4 bg-black" />
      <button type="submit" className="p-4 rounded-lg bg-[#DD7364]">Subscribe</button>
      <p className="flex gap-1 items-center text-sm lg:text-base"><FaRegCheckCircle /><span className="hover:text-[#DD7364] cursor-pointer">I agree to all terms and policies</span></p>
    </form>
  );
};

export default FooterForm;
