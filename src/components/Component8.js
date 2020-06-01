import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import BackgroundImage from 'gatsby-background-image';
import { css } from '@emotion/core';
import Bookmark from '../assets/Bookmark.svg';

const Component8 = () => {
	const data = useStaticQuery(graphql`
		query componentQuery8 {
			allContentfulComponent8 {
				nodes {
					hEading
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

	const component = data.allContentfulComponent8.nodes;

	return (
		<BackgroundImage
			fluid={component[0].image.fluid}
			css={css`
				width: 23.25rem;
				height: 23.1875rem;
				border-radius: 15px;
				overflow: hidden;
				position: relative;
				background-color: #fff;
			`}
		>
			<Bookmark
				css={css`
					position: absolute;
					right: 1.875rem;
				`}
			/>
			<h3
				css={css`
					margin: 0.9375rem 0 0 0;
					text-align: center;
					font-weight: bold;
					font-size: 1.5625rem;
				`}
			>
				{component[0].hEading}
			</h3>
			<h5
				css={css`
					margin: 0;
					position: absolute;
					bottom: 1.375rem;
					right: 2.1875rem;
					color: #d9a34a;
					text-transform: uppercase;
					letter-spacing: 0.1rem;
					font-size: 0.6875rem;
					font-weight: bolder;
				`}
			>
				{component[0].category}
			</h5>
		</BackgroundImage>
	);
};

export default Component8;
