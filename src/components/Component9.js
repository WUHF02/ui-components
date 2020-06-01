import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';
import { css } from '@emotion/core';

const Component9 = ({ number }) => {
	const data = useStaticQuery(graphql`
		query componentQuery9 {
			allContentfulComponent9 {
				nodes {
					heading
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

	const component = data.allContentfulComponent9.nodes;
	return (
		<div
			css={css`
				width: 10.5625rem;
				height: 10.6875rem;
				border-radius: 15px;
				background-color: ${component[number].color};
				display: flex;
				flex-direction: column;
				justify-content: center;
				align-items: center;
			`}
		>
			<Img
				fluid={component[number].image.fluid}
				css={css`
					width: 58px;
					height: 58px;
				`}
			/>
			<h4
				css={css`
					color: #fff;
					margin: 0.625rem 0 0 0;
					text-transform: uppercase;
					letter-spacing: 0.2rem;
				`}
			>
				{component[number].heading}
			</h4>
		</div>
	);
};

export default Component9;
