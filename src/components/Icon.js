const Icon = ({icon,className}) => {
  return (
    <svg className={`${className??''}`}>
      <use href={`./assets/sprite.svg#${icon}`}></use>
    </svg>
  );
};

export default Icon;
