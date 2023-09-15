import { cn } from '../../utils/cn';
import PropTypes from 'prop-types';

const TagsContainer = ({ accessMenu, className }) => {
	return (
		<div className={cn('flex items-center justify-start flex-wrap gap-2 py-2', className)}>
			{accessMenu?.map((menu) => (
				<p key={menu.id} className='rounded-full bg-tag text-gray-800 py-1.5 px-3 text-sm'>
					{menu.name}
				</p>
			))}
		</div>
	);
};

TagsContainer.propTypes = {
	accessMenu: PropTypes.array,
	classname: PropTypes.string,
};

export default TagsContainer;
