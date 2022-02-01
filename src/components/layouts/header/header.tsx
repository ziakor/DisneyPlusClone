import Link from 'next/link'
import { useState, useEffect } from 'react'
import DisneyLogo from '../../../../public/logo_disney_plus.svg'
import NavigationButton from '../../NavigationButton'

function Header() {
  const [show, setShow] = useState(false)

  const controlNavbar = () => {
    if (window.scrollY > 200) {
      setShow(true)
    } else {
      setShow(false)
    }
  }

  useEffect(() => {
    window.addEventListener('scroll', controlNavbar)

    return () => {
      window.removeEventListener('scroll', controlNavbar)
    }
  }, [])

  return (
    <div
      className={`w-full ${
        show ? 'bg-blackPearl' : 'bg-transparent'
      } h-[4.4rem] z-4 px-12 flex fixed top-0 ease-out  duration-500`}
    >
      <Link href={'/'} passHref>
        <DisneyLogo
          className={`w-20 ml-3 cursor-pointer mr-auto pointer-events-none ease-out  duration-500 ${
            show ? 'opacity-100' : 'opacity-0'
          }`}
        />
      </Link>
      <NavigationButton
        title={`s'inscrire`}
        path={'/sign-up'}
        class={`text-white bg-scienceBlue ease-out duration-500 ${
          show ? 'opacity-100' : 'opacity-0'
        } w-34 h-12 uppercase hover:bg-blueRibbon rounded-ssm text-center tracking-wide  leading-[2.9rem] text-xl cursor-pointer mt-3 active:opacity-70 pointer-events-none`}
      />
      <NavigationButton
        title={`s'identifier`}
        path={'/sign-up'}
        class="text-white border-1 ml-3 bg-black w-40 h-12 uppercase hover:bg-white  hover:text-black rounded-ssm text-center tracking-wide  leading-[2.9rem] text-xl cursor-pointer mt-3 active:opacity-70"
      />
    </div>
  )
}

export default Header
