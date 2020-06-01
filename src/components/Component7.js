import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import BackgroundImage from 'gatsby-background-image';
import { css } from '@emotion/core';

const Component7 = ({ number }) => {
	const data = useStaticQuery(graphql`
		query componentQuery7 {
			allContentfulComponent7 {
				nodes {
					category
					bodyText {
						bodyText
					}
					color
					image {
						fluid(maxWidth: 400) {
							...GatsbyContentfulFluid
						}
					}
				}
			}
		}
	`);

	const component = data.allContentfulComponent7.nodes;
	return (
		<BackgroundImage
			fluid={component[number].image.fluid}
			css={css`
				width: 19.875rem;
				height: 7.5625rem;
				border-radius: 15px;
				overflow: hidden;
				padding: 1.6875rem;
			`}
		>
			<h5
				css={css`
					margin: 0 0 1rem 0;
					color: ${component[number].color};
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
					color: #fff;
				`}
			>
				{component[number].bodyText.bodyText}
			</p>
		</BackgroundImage>
	);
};

export default Component7;
