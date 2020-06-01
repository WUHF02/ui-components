import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';
import { css } from '@emotion/core';

const Component1 = () => {
	const data = useStaticQuery(graphql`
		query componentQuery1 {
			allContentfulComponent1 {
				nodes {
					heading
					bodyText {
						bodyText
					}
					category
					image {
						fluid(maxWidth: 400) {
							...GatsbyContentfulFluid
						}
					}
				}
			}
		}
	`);
	const component = data.allContentfulComponent1.nodes;
	return (
		<div
			css={css`
				width: 23.25rem;
				border-radius: 25px;
				position: relative;
				overflow: hidden;
				background-color: #fff;
			`}
		>
			<Img
				fluid={component[0].image.fluid}
				alt='surfing'
				css={css`
					width: 25rem;
					height: 14.75rem;
					position: absolute;
					top: -10px;
					z-index: 2;
				`}
			/>
			<article
				css={css`
					padding: 1.6875rem 2.75rem 1.625rem 2.3125rem;
					background-color: #fff;
				`}
			>
				<h5
					css={css`
						color: #33439b;
						text-transform: uppercase;
						letter-spacing: 0.1rem;
						margin: 0;
					`}
				>
					{component[0].category}
				</h5>
				<h1
					css={css`
						margin: 0;
						font-weight: bold;
					`}
				>
					{component[0].heading}
				</h1>
				<p
					css={css`
						margin: 0;
					`}
				>
					{component[0].bodyText.bodyText}
				</p>
			</article>
		</div>
	);
};

export default Component1;
