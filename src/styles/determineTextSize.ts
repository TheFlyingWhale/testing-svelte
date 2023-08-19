export type TextSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl';

const determineTextSize = (size: TextSize) => {
	if (size == 'xs') return '0.75rem';
	if (size == 'sm') return '1rem';
	if (size == 'md') return '1.125rem';
	if (size == 'lg') return '1.25rem';
	if (size == 'xl') return '1.375rem';
	return '1rem';
};

export default determineTextSize;
