'use client'
import Link from "@repo/ui/components/ui/link";
import {
  SignInButton,
  SignUpButton,
  SignedIn,
  SignedOut,
  UserButton,
} from "@clerk/nextjs";
import { usePathname } from 'next/navigation'
import ToggleTheme from '@/components/toggle-theme'
const navigation = [
  { title: "Home", path: "/" },
  { title: "Blog", path: "/blog" },
  { title: "About", path: "/about" },
];
export default function CustomHeader () {
	const pathname = usePathname()
	return (
		<nav className="flex items-center justify-between mb-5 text-base shadow-none border-b-1 border-gray-200 pb-1.5">
			<div className="flex justify-center items-center gap-x-8">
				{navigation.map((item, idx) => {
					return (
						<Link href={item.path} key={idx}  className={`text-base hover:text-blue-700 leading-6 ${pathname === item.path ? 'text-blue-700 border-b-2 border-color-700' : ''}`} >
							{item.title}
						</Link>
					);
				})}
			</div>
			<div className="gap-x-6 flex items-center justify-center">
				<ToggleTheme />
				<SignedOut>
					<div className="gap-x-1 py-2 px-4 text-white font-medium bg-gray-800 hover:bg-gray-700 active:bg-gray-900 rounded-full inline-flex cursor-pointer">
						<SignInButton />
					</div>
					<SignUpButton />
				</SignedOut>
				<SignedIn>
					<UserButton />
				</SignedIn>
			</div>
		</nav>
	)
}