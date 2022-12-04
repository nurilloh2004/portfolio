

const LinkArrow = ({children,className,color}) => {
  return <a className={`link link--arrow ${color?'link--'+color:''} ${className??''}`} href="./">
    {children}
    <svg className="icon">
        <use href="./assets/sprite.svg#arrow_forward"></use>
    </svg>
  </a>
}

export default LinkArrow;