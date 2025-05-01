import PropTypes from 'prop-types';
import { useState } from 'react';
import { FaEye, FaEyeSlash } from 'react-icons/fa';

const PasswordInputField = ({
    label,
    type,
    placeholder,
    className,
    error,
    ...rest
}) => {
    const [showPassword, setShowPassword] = useState(false);

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    return (
        <div className="mb-6 relative">
            <label className="font-bold text-[#261000] text-xs block mb-2 sm:text-base">
                {label}
            </label>
            <input
                {...rest}
                type={showPassword ? 'text' : type}
                placeholder={placeholder}
                className={className}
            />
            {type === 'password' && (
                <button
                    type="button"
                    className="absolute inset-y-0 right-0 pr-3 flex items-center"
                    onClick={togglePasswordVisibility}
                >
                    {showPassword ? (
                        <FaEyeSlash className="h-5 w-5 text-gray-500 absolute top-10 -left-4 " />
                    ) : (
                        <FaEye className="h-5 w-5 text-gray-500 absolute top-10 -left-4 " />
                    )}
                </button>
            )}
            {error && (
                <div className="text-[#FF3B30] text-xs mt-2">{error}</div>
            )}
        </div>
    );
};

PasswordInputField.propTypes = {
    label: PropTypes.string.isRequired,
    type: PropTypes.string,
    placeholder: PropTypes.string,
    className: PropTypes.string,
    error: PropTypes.string,
};

PasswordInputField.defaultProps = {
    type: 'password',
    placeholder: '',
    className: 'form-input',
    error: null,
};

export default PasswordInputField;
