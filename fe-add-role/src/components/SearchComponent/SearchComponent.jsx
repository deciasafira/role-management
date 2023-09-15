import React from 'react';
import { HiOutlineMagnifyingGlass } from 'react-icons/hi2';
import { useSelector } from 'react-redux';
import { cn } from '../../utils/cn';

const SearchComponent = ({ value, onChange }) => {
	const darkMode = useSelector((state) => state.darkMode);

	return (
		<div
			className={cn(
				'flex justify-start items-center gap-2 border w-[25rem] rounded-md px-3 py-[0.6rem] focus:border-blue-500',
				darkMode ? 'bg-[#353648E5] border-white text-white' : 'bg-white border-black'
			)}>
			<HiOutlineMagnifyingGlass size={24} />
			<input
				value={value}
				type='search'
				onChange={onChange}
				placeholder='Search role'
				className='w-full h-full border-none text-base bg-transparent focus:ring-0 '
			/>
		</div>
	);
};

export default SearchComponent;
