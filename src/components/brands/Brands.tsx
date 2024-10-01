import { cn } from '@assets/lib/utils';
import accesorios from '@assets/img/accesorios.png';

const reviews = [
	{
		name: 'Jack',
		username: '@jack',
		body: "I've never seen anything like this before. It's amazing. I love it.",
		img: accesorios	
	},
	{
		name: 'Jill',
		username: '@jill',
		body: "I don't know what to say. I'm speechless. This is amazing.",
		img: accesorios	
	},
	{
		name: 'John',
		username: '@john',
		body: "I'm at a loss for words. This is amazing. I love it.",
		img: accesorios	
	},
	{
		name: 'Jane',
		username: '@jane',
		body: "I'm at a loss for words. This is amazing. I love it.",
		img: accesorios	
	},
	{
		name: 'Jenny',
		username: '@jenny',
		body: "I'm at a loss for words. This is amazing. I love it.",
		img: accesorios	
	},
	{
		name: 'James',
		username: '@james',
		body: "I'm at a loss for words. This is amazing. I love it.",
		img: accesorios	
	},
];

const firstRow = reviews.slice(0, reviews.length / 2);

interface BrandProps {
	className?: string;
	reverse?: boolean;
	pauseOnHover?: boolean;
	children?: React.ReactNode;
	vertical?: boolean;
	repeat?: number;
	[key: string]: any;
}

export function Brand({
	className,
	reverse,
	pauseOnHover = false,
	children,
	vertical = false,
	repeat = 4,
	...props
}: BrandProps) {
	return (
		<div
			{...props}
			className={cn(
				'group flex overflow-hidden p-2 [--duration:40s] [--gap:1rem] [gap:var(--gap)]',
				{
					'flex-row': !vertical,
					'flex-col': vertical,
				},
				className
			)}>
			{Array(repeat)
				.fill(0)
				.map((_, i) => (
					<div
						key={i}
						className={cn('flex shrink-0 justify-around [gap:var(--gap)]', {
							'animate-brand flex-row': !vertical,
							'animate-brand-vertical flex-col': vertical,
							'group-hover:[animation-play-state:paused]': pauseOnHover,
							'[animation-direction:reverse]': reverse,
						})}>
						{children}
					</div>
				))}
		</div>
	);
}

const ReviewCard = ({ img, name }: { img: string; name: string;}) => {
	return (
		<figure
			className='relative w-64 cursor-pointer overflow-hidden rounded-xl border p-4'>
			<div className='flex flex-row items-center gap-2'>
				<img className='rounded-full'  alt={name} src={img} />
			</div>
			<p className="text-xs text-center font-medium dark:text-white/40">{name}</p>
		</figure>
	);
};

export function BrandDemo() {
	return (
		<div className='relative flex h-[400px] w-full flex-col items-center justify-center overflow-hidden rounded-lg border bg-background'>
			<Brand pauseOnHover className='[--duration:20s]'>
				{firstRow.map(review => (
					<ReviewCard key={review.username} {...review} />
				))}
			</Brand>
			<div className='pointer-events-none absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-white dark:from-background'></div>
			<div className='pointer-events-none absolute inset-y-0 right-0 w-1/3 bg-gradient-to-l from-white dark:from-background'></div>
		</div>
	);
}
