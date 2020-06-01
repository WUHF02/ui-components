import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import { css } from '@emotion/core';

const Component10 = ({ number }) => {
	const data = useStaticQuery(graphql`
		query componentQuery10 {
			allContentfulComponent10 {
				nodes {
					heading
					color
					bodyText {
						bodyText
					}
					number
				}
			}
		}
	`);

	const component = data.allContentfulComponent10.nodes;
	return (
		<div
			css={css`
				width: 16.75rem;
				display: flex;
				flex-direction: column;
				align-items: center;
			`}
		>
			<p
				css={css`
					margin: 0;
					width: 2.4375rem;
					height: 2.4375rem;
					border-radius: 25px;
					color: #fff;
					background-color: ${component[number].color};
					font-weight: bold;
					display: flex;
					justify-content: center;
					align-items: center;
				`}
			>
				{component[number].number}
			</p>
			<p
				ccs={css`
					font-weight: bold;
					margin: 0;
				`}
			>
				{component[number].heading}
			</p>
			<p
				css={css`
					margin: 0;
					display: -webkit-box;
					-webkit-box-orient: vertical;
					-webkit-line-clamp: 3;
					overflow: hidden;
				`}
			>
				{component[number].bodyText.bodyText}
			</p>
			<div
				css={css`
					height: 1px;
					width: 268px;
					margin: 30px 0;
					border-top: 1px solid #7b8591;
					opacity: 0.3;
				`}
			></div>
		</div>
	);
};

export default Component10;
