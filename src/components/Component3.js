import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';
import { css } from '@emotion/core';

const Component3 = ({ number }) => {
	const data = useStaticQuery(graphql`
		query componentQuery3 {
			allContentfulComponent3 {
				nodes {
					heading
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

	const component = data.allContentfulComponent3.nodes;
	return (
		<article
			css={css`
				max-width: 15.625rem;
				max-height: 17rem;
				padding: 1.875rem;
				background-color: ${component[number].color};
				border-radius: 0.9375rem;
				overflow: hidden;
				display: flex;
				flex-direction: column;
			`}
		>
			<Img
				fluid={component[number].image.fluid}
				css={css`
					margin-left: 11.25rem;
					max-width: 4.6875rem;
					max-height: 6.25rem;
				`}
			/>
			<h4
				css={css`
					margin-bottom: 0.625rem;
					color: #fff;
				`}
			>
				{component[number].heading}
			</h4>
			<p
				css={css`
					margin: 0;
					color: #fff;
					display: -webkit-box;
					-webkit-box-orient: vertical;
					-webkit-line-clamp: 3;
					overflow: hidden;
				`}
			>
				{component[number].bodyText.bodyText}
			</p>
		</article>
	);
};

export default Component3;
