import PropTypes from 'prop-types';

const Card = ({title,desc,BColor,icon}) => {
  return (
    <div className={`mt-12 bg-neutral-Very_Light_Gray shadow-xl  border-t-4 ${BColor} w-[400px] max-[1280px]:w-[350px] max-[960px]:w-[400px] h-[300px] text-left py-10 px-8 rounded-md relative`}>
        <h1 className="font-semibold text-[26px] text-neutral-Very_Dark_Blue">{title}</h1>
        <p className="text-text text-neutral-Grayish_Blue font-light mt-3  ">
            {desc}
        </p> 
        <img src={icon}  className="absolute bottom-8 right-8"  alt="photo" />
    </div>
  )
}

Card.propTypes = {
    title: PropTypes.string.isRequired,
    desc: PropTypes.string.isRequired,
    BColor: PropTypes.string.isRequired,
    icon: PropTypes.string.isRequired,
  };

export default Card