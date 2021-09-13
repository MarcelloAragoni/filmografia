import  "./Link.scss"

export default function Link({href,children}) {
  return (
    <a className="links" href={href}>{children}</a>
  )
}