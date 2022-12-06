import Icon from '../Icon';

const SliderButtons = ({className}) => {
  return (
    <div className={`splide__arrows slider__arrows ${className??''}`}>
      <button className="splide__arrow--prev slider__btn">
        <Icon icon="chevron_left" />
      </button>
      <button className="splide__arrow--next slider__btn">
        <Icon icon="chevron_right" />
      </button>
    </div>
  );
};

export default SliderButtons;
