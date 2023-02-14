import Link from "next/link";
import { Work_Sans } from '@next/font/google'


const work_sans = Work_Sans({ subsets: ['latin'] })

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {

  const nav = (
    <div className="nav">
      <Link href='/' className="main-element">
        Euler
      </Link>
      <div className="directories">
        <a href="#">Articles</a>
        <a href="#">About</a>
      </div>
    </div>
  );

  const footer = (
    <footer>
      <p>este es un foooter</p>
    </footer>
  )

  return (
    <html lang="en">
      {/*
        <head /> will contain the components returned by the nearest parent
        head.tsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />
      <body className={work_sans.className}>
        {nav}
        {children}
        {footer}
        </body>
    </html>
  )
}
