import React from 'react';

const Button = ({ type = 'button', className, clickHandler, children }) => {
	return (
		<button type={type} className={` px-4 text-base gap-2 ${className}`} onClick={clickHandler}>
			{children}
		</button>
	);
};

export default Button;