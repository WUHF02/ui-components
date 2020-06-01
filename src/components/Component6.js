import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';
import { css } from '@emotion/core';

const Component6 = ({ number }) => {
	const data = useStaticQuery(graphql`
		query componentQuery6 {
			allContentfulComponent6 {
				nodes {
					category
					color
					image {
						fluid(maxWidth: 150) {
							...GatsbyContentfulFluid
						}
					}
					bodyText {
						bodyText
					}
				}
			}
		}
	`);
	const component = data.allContentfulComponent6.nodes;
	return (
		<div
			css={css`
				width: 20.5625rem;
				height: 8.5625rem;
				margin: 1.1875rem 2.4375rem;
				display: grid;
				grid-template-columns: 1fr 1fr;
				grid-template-rows: 0.5fr 1fr;
			`}
		>
			<Img
				fluid={component[number].image.fluid}
				css={css`
					grid-column: 1 / 2;
					grid-row: 1 / 3;
					width: 8.8125rem;
					height: 8.5625rem;
				`}
			/>
			<article
				css={css`
					grid-column: 2 / 3;
					grid-row: 1 / 3;
					padding: 0.625rem 0;
					display: flex;
					flex-direction: column;
					justify-content: space-around;
				`}
			>
				<h5
					css={css`
						color: ${component[number].color};
						margin: 0;
						text-transform: uppercase;
						letter-spacing: 0.1rem;
					`}
				>
					{component[number].category}
				</h5>
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
			</article>
		</div>
	);
};

export default Component6;
