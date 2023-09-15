import { cn } from '../../utils/cn';
import { useSelector } from 'react-redux';
import PropTypes from 'prop-types';

export const SingleCheckbox = ({ label, checked, onChange }) => {
	const darkMode = useSelector((state) => state.darkMode);

	return (
		<label
			className={cn(
				'flex justify-between items-center gap-2 mb-1 px-3 py-2 cursor-pointer text-gray-500',
				darkMode ? 'bg-[#313242]' : 'bg-gray-50'
			)}>
			{label}
			<input
				type='checkbox'
				className={cn(
					'form-checkbox w-4 h-4 checked:bg-gray-900 outline-2 outline-gray-900 rounded-sm',
					darkMode ? 'checked:bg-[#313242] checked:border-white' : 'checked:border-black border-black'
				)}
				checked={checked}
				onChange={onChange}
			/>
		</label>
	);
};

SingleCheckbox.propTypes = {
	label: PropTypes.string,
	checked: PropTypes.bool,
	onChange: PropTypes.func,
};
