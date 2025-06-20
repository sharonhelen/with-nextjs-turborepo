import Link from 'next/link'
import type { LinkProps } from 'next/link'

export default function CustomLink ({href, ...rest}: LinkProps){
	return (
		<Link
			href={href}
			{...rest}
		/>
	)
}

