import Link from 'next/link'

interface NavigationButtonInterface {
  title: string
  class?: string
  path: string
}

function NavigationButton(props: NavigationButtonInterface) {
  return (
    <Link href={props.path} passHref>
      <span className={props.class}>{props.title}</span>
    </Link>
  )
}

export default NavigationButton
