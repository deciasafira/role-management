import React from 'react';

const DetailItem = ({ label, value, className }) => {
	return (
		<div className={`flex justify-start ${className}`}>
			<div className='w-[8rem] flex justify-start'>
				<p>{label}</p>
			</div>
			<div className='w-[30rem] flex justify-start overflow-y-auto'>
				<p className='font-medium break-all'>{value}</p>
			</div>
		</div>
	);
};

export default DetailItem;
