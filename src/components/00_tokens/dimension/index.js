import { css } from "styled-components";

//Breakpoints --
export const breakpoints = {
	//for media query use in Styled Components, can not be used as native CSS variable so exported here
	breakpoint1: "320px",
	breakpoint2: "375px",
	breakpoint3: "768px",
	breakpoint4: "1024px",
	breakpoint5: "1200px",
	breakpoint6: "1600px",
	maximumpagewidth: "1200px",
};

const Dimension = css`
	:root {
		//Breakpoints --
		--breakpoint-1: 320px;
		--breakpoint-2: 375px;
		--breakpoint-3: 768px;
		--breakpoint-4: 1024px;
		--breakpoint-5: 1200px;
		--breakpoint-6: 1600px;
		--maximum-page-width: 1200px;

		//Font sizes --
		--text-size-1: 4.2rem;
		--line-height-1: 4.8rem;
		--text-size-2: 3.6rem;
		--line-height-2: 4rem;
		--text-size-3: 2.8rem;
		--line-height-3: 3.2rem;
		--text-size-4: 2.4rem;
		--line-height-4: 2.8rem;
		--text-size-5: 2rem;
		--line-height-5: 2.4rem;

		--text-size-6: 1.8rem;
		--line-height-6: 2.4rem;
		--text-size-7: 1.6rem;
		--line-height-7: 2rem;
		--text-size-8: 1.4rem;
		--line-height-8: 1.8rem;

		//Sizing --
		--sizing-full: 44px;
		--sizing-eighth: calc(var(--sizing-full) / 8);
		--sizing-quarter: calc(var(--sizing-full) / 4);
		--sizing-half: calc(var(--sizing-full) / 2);
		--sizing-threequarters: calc((var(--sizing-full) / 4) * 3);
		--sizing-double: calc(var(--sizing-full) * 2);
		--sizing-triple: calc(var(--sizing-full) * 3);
		--sizing-quadruple: calc(var(--sizing-full) * 4);
		--sizing-quintuple: calc(var(--sizing-full) * 5);
		--sizing-sextuple: calc(var(--sizing-full) * 6);
		--sizing-septuple: calc(var(--sizing-full) * 7);
		--sizing-octuple: calc(var(--sizing-full) * 8);
		--sizing-nonuple: calc(var(--sizing-full) * 9);

		//Spacing --
		--spacing-full: 14.6px;
		--spacing-eighth: calc(var(--spacing-full) / 8);
		--spacing-quarter: calc(var(--spacing-full) / 4);
		--spacing-half: calc(var(--spacing-full) / 2);
		--spacing-threequarters: calc((var(--spacing-full) / 4) * 3);
		--spacing-double: calc(var(--spacing-full) * 2);
		--spacing-triple: calc(var(--spacing-full) * 3);
		--spacing-quadruple: calc(var(--spacing-full) * 4);
		--spacing-quintuple: calc(var(--spacing-full) * 5);
		--spacing-sextuple: calc(var(--spacing-full) * 6);
		--spacing-septuple: calc(var(--spacing-full) * 7);
		--spacing-octuple: calc(var(--spacing-full) * 8);
		--spacing-nonuple: calc(var(--spacing-full) * 9);

		//Radius --
		--radius-full: 11px;
		--radius-eight: calc(var(--radius-full) / 8);
		--radius-quarter: calc(var(--radius-full) / 4);
		--radius-half: calc(var(--radius-full) / 2);
		--radius-threequarters: calc((var(--radius-full) / 4) * 3);
		--radius-double: calc(var(--radius-full) * 2);
		--radius-triple: calc(var(--radius-full) * 3);
		--radius-quadruple: calc(var(--radius-full) * 4);
		--radius-quintuple: calc(var(--radius-full) * 5);
		--radius-sextuple: calc(var(--radius-full) * 6);
		--radius-septuple: calc(var(--radius-full) * 7);
		--radius-octuple: calc(var(--radius-full) * 8);
		--radius-nonuple: calc(var(--radius-full) * 9);
	}
`;

export default Dimension;
