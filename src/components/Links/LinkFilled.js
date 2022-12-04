
const LinkFilled = ({children,className}) => {
  return <a className={`link link--filled ${className??''}`} href="./">
    {children}
  </a>
}

export default LinkFilled;