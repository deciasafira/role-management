import React from 'react';
import LinkButton from '../Button/LinkButton';
import { useSelector } from 'react-redux';
import { cn } from '../../utils/cn';

const DropDown = ({ column, handler, className }) => {
	const darkMode = useSelector((state) => state.darkMode);
	const modifiedArr = [...column];

	modifiedArr.splice(0, 1);
	modifiedArr.splice(3, 1);

	return (
		<div
			className={cn(
				'shadow-md absolute top-[16rem] p-4 rounded-b-md border border-t-0',
				darkMode ? 'bg-[#353648] border-white ' : 'bg-white border-black',
				className
			)}>
			{modifiedArr.map((role) => (
				<div key={role.name}>
					<LinkButton
						className={`font-normal text-md w-full ${
							darkMode
								? `text-white hover:bg-slate-50 hover:text-black`
								: `text-black hover:bg-[#4893E6] hover:text-white`
						}`}
						onClick={() => handler(role.name)}>
						{role.name}
					</LinkButton>
				</div>
			))}
		</div>
	);
};

export default DropDown;
