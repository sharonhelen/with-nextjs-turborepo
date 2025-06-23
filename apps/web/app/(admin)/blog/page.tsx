import Link from '@repo/ui/link'
export default function Page () {
	return (
		<div className="w-sm bg-red-300">
			<p className='mb-10'>
				Welcome to my portfolio page! 
				Here you will find a carefully curated collection of my work and accomplishments. 
				Through this portfolio, I'm to showcase my expertise, creativity, and the value I can bring to your projects.
			</p>
			<div className="grid grid-cols-1 justify-items-start gap-3 md:grid-cols-2 xl:grid-cols-3">
        {Array.from(Array.from({ length: 6 }).keys()).map(elt => (
          <Link
            className="hover:text-blue-700"
            key={elt}
            href={`/blog/${elt}`}
          >
						blog {elt}
          </Link>
        ))}
      </div>
		</div>
	)
}

