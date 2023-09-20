import {LiaFacebookF} from "react-icons/lia"
import {FaGithubSquare} from "react-icons/fa"
import {FaTwitter} from "react-icons/fa"
import {FiInstagram} from "react-icons/fi"

const Smedia = () => {
  return (
    <div>
        <footer className=" flex justify-center items-center gap-4 text-[25px] pt-[110px] md:pt-[170px] md:gap-5  ">
            <LiaFacebookF className="text-white hover:text-slate-400 cursor-pointer"/>
            <FaGithubSquare  className="text-white hover:text-slate-400 cursor-pointer"/>
            <FaTwitter className="text-white hover:text-slate-400 cursor-pointer"/>
            <FiInstagram  className="text-white hover:text-slate-400 cursor-pointer"/>
        </footer>
    </div>
  )
}

export default Smedia