import Image, { ImageProps } from 'next/image'

export default function CustomeImage ({src, ...rest}: ImageProps) {
	const basePath = process.env.basePath
	return (
		<Image src={`${basePath || ''}${src}`} {...rest}></Image>
	)
}