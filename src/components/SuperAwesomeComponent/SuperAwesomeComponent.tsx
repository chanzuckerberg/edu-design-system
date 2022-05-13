import React from 'react';
import clsx from 'clsx';
import styles from './SuperAwesomeComponent.module.css';

export interface Props {
	/**
	 * CSS class names that can be appended to the component.
	 */
	className?: string;
}

/**
 * BETA: This component is still a work in progress and is subject to change.
 *
 * TODO: update this comment with a description of the component.
 */
export const SuperAwesomeComponent = ({
	className,
	...other
}: Props) => {
	const componentClassName = clsx(styles['super-awesome-component'], className, {
	});
	return (
		<div
			className={componentClassName}
			{...other}
		>
		Hello!
		</div>
	);
};
