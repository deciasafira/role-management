import React from 'react';

const InputField = ({ type = 'text', value, label, changeHandler, placeholder, className, name }) => {
	return (
		<label className='py-1 flex gap-2 justify-start items-start flex-col text-xl font-semibold '>
			{label}
			<input
				type={type}
				value={value}
				onChange={changeHandler}
				placeholder={placeholder}
				name={name}
				className={`px-4 text-lg font-normal rounded-md  shadow-lg border  ${className}`}
			/>
		</label>
	);
};

export default InputField;
