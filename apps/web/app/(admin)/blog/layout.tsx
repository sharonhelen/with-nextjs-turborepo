
import Link from '@repo/ui/link'
export default function RootLayout({ children, tags, categories }: Readonly<{
  children: React.ReactNode,
  tags: React.ReactNode,
  categories: React.ReactNode
}>) {

  return (
    <html lang="en">
      <head></head>
      <body>
        <Link href="/blog/setting" className="text-blue-500 hover:underline hover:underline-offset-1">导航到settings页面</Link>
        <div className="h-full flex align-center justify-around ">
          <aside>{categories}</aside>
          <main>{children}</main>
          <aside>{tags}</aside>
        </div>
      </body>
    </html>
  );
}