'use client';

import React from 'react';
import NextNProgress from 'nextjs-progressbar';
export default function NavprogressBar() {
	return (
		<>
			<NextNProgress
				color='#01949A'
				tartPosition={0.3}
				stopDelayMs={200}
				height={3}
				showOnShallow={true}
				z
			/>
		</>
	);
}
