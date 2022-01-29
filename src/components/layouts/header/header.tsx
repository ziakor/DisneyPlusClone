import Link from 'next/link'
import DisneyLogo from '../../../../public/logo_disney_plus.svg'
import NavigationButton from '../../NavigationButton'

function Header() {
  return (
    <div className="w-full bg-blackPearl h-[4.4rem] z-4 px-16 flex fixed top-0 ">
      <Link href={'/'} passHref>
        <DisneyLogo className="w-20 pt-1 cursor-pointer mr-auto pointer-events-none" />
      </Link>
      <NavigationButton
        title={`s'inscrire`}
        path={'/sign-up'}
        class="text-white bg-scienceBlue  w-34 h-12 uppercase hover:bg-blueRibbon rounded-ssm text-center tracking-wide  leading-[2.9rem] text-xl cursor-pointer mt-2 active:opacity-70 pointer-events-none"
      />
      <NavigationButton
        title={`s'identifier`}
        path={'/sign-up'}
        class="text-white border-1 ml-3 bg-black w-40 h-12 uppercase hover:bg-white  hover:text-black rounded-ssm text-center tracking-wide  leading-[2.9rem] text-xl cursor-pointer mt-2 active:opacity-70"
      />
    </div>
  )
}

export default Header
