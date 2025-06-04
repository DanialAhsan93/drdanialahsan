import {
  Footer,
  FooterBrand,
  FooterCopyright,
  FooterDivider,
  FooterIcon,
  FooterLink,
  FooterLinkGroup,
  FooterTitle,
} from "flowbite-react";
import { BsDribbble, BsFacebook, BsGithub, BsInstagram, BsTwitter } from "react-icons/bs";
import { useSelector } from "react-redux";
import { Link, useLocation } from "react-router-dom";
import { logoDark, logo } from "../../data";
import { useEffect, useState } from "react";
function Footercomp() {
  const [tab, settab] = useState('')
  const location = useLocation();

  useEffect(() => {
    const urlParam = new URLSearchParams(location.search);
    const service = urlParam.get('service')
    settab(service);

    console.log(service);

  }, [location.search])


  const { theme } = useSelector(state => state.theme);

  return (
    <Footer container className={`${theme === 'light' ? 'bg-[#102F5F]' : 'dark:bg-[rgb(16,23,42)]'}`}>
      <div className={`w-full `}>
        <div className='grid w-full justify-between sm:flex md:flex-row flex-col sm:justify-start md:flex md:grid-cols-1 '>
          <div className="lg:w-[30%] md:w-[46%] w-full">
            <Link to={'/'} className='self-center whitespace-nowrap text-sm sm:text-xl font-semibold flex items-center space-x-2'>
              <img src={theme === 'light' ? logoDark : logoDark} alt="logo" className='w-[40px] h-[40px] rounded-full' />
              <div className='text-white dark:text-gray-200'>
                Pain <span className='text-[#06CCEC]'>Care</span> Clinic
              </div>
            </Link>
            <div className='w-full'>
              <div to={'/'} className='md:text-4xl text-2xl font-bold text-white
              mt-2'>

                Dr
                <span className='px-2 bg-gradient-to-r from-indigo-500
             first-letter: via-purple-500 to-pink-500 rounded-lg text-white ml-1'>
                  Danyal Ahsan
                </span>

              </div>
            </div>
          </div>
          <div className="lg:w-[70%] md:w-[55%] w-full flex flex-wrap sm:gap-10 lg:px-10 md:ps-5 lg:mx-10 md:mx-0 sm:space-y-0 space-y-2">
            <div className="lg:w-[28%] md:w-[40%] w-full">
              <FooterTitle title="About" className="text-gray-400" />
              <FooterLinkGroup col>
                <p className="text-gray-400">Pain Care clinic is specialized in treating conditions causing pain to Spine, Knee, Shoulder & ROM problems </p>
                <FooterLink href="#" className="text-gray-400">Tailwind CSS</FooterLink>
              </FooterLinkGroup>
            </div>
            <div className="lg:w-[28%] md:w-[40%] w-full ">
              <FooterTitle title="Services" className="text-gray-400" />
              <FooterLinkGroup col>
                <Link to={'/services?service=ozonetherapy'} className={`${tab === 'ozonetherapy' ? 'text-[#06CCEC]' : 'text-gray-400'}`}>
                  Ozone Therapy</Link>
                <Link to={'/services?service=prptherapy'} className={`${tab === 'prptherapy' ? 'text-[#06CCEC]' : 'text-gray-400'}`}>
                  Prp Therapy</Link>
                <Link to={'/services?service=biogeltherapy'} className={`${tab === 'biogeltherapy' ? 'text-[#06CCEC]' : 'text-gray-400'}`}>
                  Biogel Therapy</Link>
                <Link to={'/services?service=lasertherapy'} className={`${tab === 'lasertherapy' ? 'text-[#06CCEC]' : 'text-gray-400'}`}>
                  Laser Therapy</Link>
                <Link to={'/services?service=physiotherapy'} className={`${tab === 'physiotherapy' ? 'text-[#06CCEC]' : 'text-gray-400'}`}>
                  Physio Therapy</Link>

              </FooterLinkGroup>
            </div>
            <div className="lg:w-[28%] md:w-[23%] w-full ">
              <FooterTitle title="Legal" className="text-gray-400" />
              <FooterLinkGroup col>
                <FooterLink href="#" className="text-gray-400">Privacy Policy</FooterLink>
                <FooterLink href="#" className="text-gray-400">Terms &amp; Conditions</FooterLink>
              </FooterLinkGroup>
            </div>
          </div>
        </div>
        <FooterDivider />
        <div className="w-full sm:flex sm:items-center sm:justify-between ">
          <FooterCopyright href="#" by="danial" year={2025} />
          <div className="mt-4 flex space-x-6 sm:mt-0 sm:justify-center">
            <FooterIcon href="#" icon={BsFacebook} />
            <FooterIcon href="#" icon={BsInstagram} />
            <FooterIcon href="#" icon={BsTwitter} />
            <FooterIcon href="#" icon={BsGithub} />
            <FooterIcon href="#" icon={BsDribbble} />
          </div>
        </div>
      </div>
    </Footer>
  );
}
export default Footercomp;