import clsx from 'clsx';
import arrow from 'src/images/arrow.svg';
import styles from './ArrowButton.module.scss';

export type ArrowButtonProps = {
	isSidebarOpen?: boolean;
	onClick?: OnClick;
};

export type OnClick = () => void;

export const ArrowButton = ({ isSidebarOpen, onClick }: ArrowButtonProps) => {
	return (
		<div
			role='button'
			aria-label='Открыть/Закрыть форму параметров статьи'
			tabIndex={0}
			className={clsx(styles.container, {
				[styles.container_open]: isSidebarOpen,
			})}
			onClick={onClick}>
			<img
				src={arrow}
				alt='иконка стрелочки'
				className={clsx(styles.arrow, { [styles.arrow_open]: isSidebarOpen })}
			/>
		</div>
	);
};