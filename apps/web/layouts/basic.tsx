import {
  ClerkProvider,
} from "@clerk/nextjs";
import Footer from '@/components/footer'
import Header from '@/components/header'
export default function ToggleTheme ({children}: Readonly<{children: React.ReactNode }>) {
	return (
		<div className="px-1 text-gray-700 antialiased m-12 mt-6">
			<div className="mx-auto max-w-screen-lg ">
				<ClerkProvider>
					<div className="flex flex-col justify-between h-screen">
						<Header />
						<main className="flex-1">{children}</main>
						<Footer />
					</div>
				</ClerkProvider>
		</div>
	</div>
	)
}