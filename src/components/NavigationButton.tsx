import Link from 'next/link'

interface NavigationButtonInterface {
  title: string
  class?: string
  path: string
}

function NavigationButton(props: NavigationButtonInterface) {
  return (
    <Link href={props.path} passHref>
      <div className={props.class}>{props.title}</div>
    </Link>
  )
}

export default NavigationButton
