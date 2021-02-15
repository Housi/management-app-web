
import Image from 'next/image'

export const Logo = ({ width = 200, height = 31 }) => (
  <Image src="/management/logo.svg" width={width} height={height} />
)