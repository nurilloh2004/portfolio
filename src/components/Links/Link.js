

const Link = ({children,className,color}) => {
  return <a className={`link ${className??''} ${color??''}`} href="./">{children}</a>
}

export default Link;