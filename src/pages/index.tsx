import Header from '../components/layouts/header/header'
import DisneyLogo from '../../public/logo_disney_plus.svg'
import NavigationButton from '../components/NavigationButton'
export default function UnloggedHome() {
  return (
    <div className="bg-blackPearl w-screen h-full max-w-full">
      <Header />
      <main>
        <section className="text-white min-h-screen bg-no-repeat bg-[url('/background_unlogged_1.jfif')] bg-cover bg-top">
          <div className="p-28 z-1 h-screen max-w-[54rem] flex flex-col w-3/6 justify-center">
            <DisneyLogo className={`w-44  cursor-pointer mr-auto mb-9  `} />
            <h1 className="text-[2.7rem] leading-11.5 font-semibold mb-9">{`Les histoires que vous imaginez + Beaucoup d'autres`}</h1>
            <ul className="flex">
              <li className="basis-3/6 py-3 pr-3">
                <h3 className="text-3xl mb-1 ">
                  8.99 €
                  <i className="text-lg not-italic text-gray-400"> par mois</i>
                </h3>
                <p className="text-gray-400 text-[1.02rem] ">{`Sans engagement*. Voir conditions d'abonnement`}</p>
                <NavigationButton
                  title={`s'inscrire`}
                  path={'/sign-up'}
                  class={`flex justify-center items-center text-white bg-scienceBlue  w-auto h-16 uppercase hover:bg-blueRibbon rounded-ssm text-center tracking-wide   text-xl cursor-pointer mt-5 active:opacity-70`}
                />
              </li>
              <li className="basis-3/6 p-3">
                <h3 className="text-3xl mb-1">
                  89.90 €
                  <i className="text-lg not-italic text-gray-400"> par mois</i>
                </h3>
                <p className="text-gray-400 text-[1.02rem] w-60">{`Économisez plus de 15%**. Voir conditions d'abonnement.`}</p>
                <NavigationButton
                  title={`Économiser sur 12 mois`}
                  path={'/sign-up'}
                  class={`flex justify-center items-center text-white bg-scienceBlue  w-auto h-16 uppercase hover:bg-blueRibbon rounded-ssm text-center tracking-wide   text-xl cursor-pointer mt-5 active:opacity-70`}
                />
              </li>
            </ul>
            <p className="text-gray-400 text-[0.78rem]">{`* Résiliation effective à la fin de la période de facturation en cours. ** Comparatif entre 12 mois d'abonnement mensuel et l'abonnement annuel.`}</p>
            <p className="text-gray-400 text-[0.78rem] mt-5">
              Pam & Tommy disponible dès le 2 février
            </p>
          </div>
        </section>
        <div className="text-white min-h-screen ">asd</div>
      </main>
    </div>
  )
}
