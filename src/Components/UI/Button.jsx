import PropTypes from 'prop-types';

const Button = ({
    id,
    type,
    name,
    buttonClassName,
    buttonOnClick,
    disabled,
}) => {
    return (
        <button
            id={id}
            type={type}
            name={name}
            className={buttonClassName}
            onClick={buttonOnClick}
            disabled={disabled}
        >
            {name}
        </button>
    );
};

Button.propTypes = {
    id: PropTypes.string,
    type: PropTypes.string,
    name: PropTypes.string.isRequired,
    buttonClassName: PropTypes.string,
    buttonOnClick: PropTypes.func,
    disabled: PropTypes.bool,
};

Button.defaultProps = {
    id: '',
    type: 'button',
    buttonClassName: 'btn',
    buttonOnClick: () => {},
    disabled: false,
};

export default Button;
