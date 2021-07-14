import React from "react";
import styled, { css } from "styled-components";

import Icon from "../../02_patterns/icon/";

const List = (props) => {
	const tag = props.type ? props.type : "ul";

	return (
		<El as={tag} {...props} data-testid='123abc' className='list'>
			{props.children.map((child) => {
				return (
					<li>
						{(() => {
							if (child.props.graphic) {
								return (
									<Icon
										graphic={child.props.graphic}
										size='small'
									/>
								);
							}
						})()}
						{child.props.children}
					</li>
				);
			})}
		</El>
	);
};

const El = styled.div`
	list-style: none;

	li {
		display: block;
		position: relative;
		font-family: var(--body-font);
		font-size: var(--text-size-7);
		line-height: var(--text-size-7);
		margin-bottom: var(--spacing-threequarters);

		.icon {
			position: relative;
			z-index: 3;
			margin: 0 5px 0 0;
		}

		${(props) =>
			props.level === "1" &&
			css`
				font-size: var(--text-size-6);
				line-height: var(--text-size-6);

				&:before {
					padding: 5px;
					margin-right: var(--spacing-half);
				}
			`}

		${(props) =>
			props.level === "3" &&
			css`
				font-size: var(--text-size-8);
				line-height: var(--text-size-8);

				&:before {
					padding: 3px;
					margin-right: calc(
						var(--spacing-quarter) + var(--spacing-eighth)
					);
				}
			`}
	}

	${(props) =>
		props.type === "ul" &&
		css`
			counter-reset: ordered-list-counter;

			li {
				margin-bottom: var(--spacing-full);
				counter-increment: my-awesome-counter;

				&:before {
					content: " ";
					display: inline-block;
					padding: 4px;
					background: var(--border-color-1);
					border-radius: var(--radius-full);
					margin-right: calc(
						var(--spacing-half) - var(--spacing-eighth)
					);
					position: relative;
					top: -1px;
				}
			}
		`}

	${(props) =>
		props.type === "ol" &&
		css`
			counter-reset: ordered-list-counter;

			li {
				margin-bottom: var(--spacing-full);
				counter-increment: my-awesome-counter;

				&:before {
					content: counter(my-awesome-counter);
					display: inline-block;
					width: var(--sizing-half);
					height: var(--sizing-half);
					line-height: var(--sizing-half);
					background: var(--border-color-1);
					border-radius: var(--radius-double);
					text-align: center;
					font-size: var(--text-size-8);
				}
			}
		`}
`;

export default List;
