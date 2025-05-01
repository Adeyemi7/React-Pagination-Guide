import PropTypes from 'prop-types';

const InputField = ({
    label,
    type,
    placeholder,
    className,
    error,
    ...rest
}) => {
    return (
        <div className="mb-6">
            <label className="font-bold text-[#261000]  text-xs block mb-2 sm:text-base ">
                {label}
            </label>
            <input
                {...rest}
                type={type}
                placeholder={placeholder}
                className={className}
            />
            {error && (
                <div className="text-[#FF3B30] text-xs mt-2">{error}</div>
            )}
        </div>
    );
};

InputField.propTypes = {
    label: PropTypes.string.isRequired,
    type: PropTypes.string,
    placeholder: PropTypes.string,
    className: PropTypes.string,
    error: PropTypes.string,
};

InputField.defaultProps = {
    type: 'text',
    placeholder: '',
    className: 'form-input',
    error: null,
};

export default InputField;
