import Link from '@repo/ui/components/ui/link'

export default function CustomFooter () {
	return (
    <footer>
      <div className="mb-4 flex flex-col items-center">
        <div className="mb-2 flex space-x-2 text-sm text-gray-500 dark:text-gray-400">
            <div>Sharon Wang</div>
            <div>{` • `}</div>
            <div>{`© ${new Date().getFullYear()}`}</div>
            <div>{` • `}</div>
            <Link href="/">Started monorepo with turbopack</Link>
          </div>
          <div className="mb-8 text-sm text-gray-500 dark:text-gray-400">
            <Link href="https://github.com/">
              Tailwind Nextjs Theme
            </Link>
          </div>
      </div>
    </footer>)
}