import { ReactNode } from "react"
import { Head } from "blitz"

type LayoutProps = {
  title?: string
  children: ReactNode
}

const Layout = ({ title, children }: LayoutProps) => {
  return (
    <>
      <Head>
        <title>{title || "blitzTodoApp"}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <ul>
        <li><a href="/">Home</a></li>
        <li><a href="/projects">Projects</a></li>
      </ul>
      {children}
    </>
  )
}

export default Layout
