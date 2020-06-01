import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';
import { css } from '@emotion/core';

const Component4 = ({ number }) => {
	const data = useStaticQuery(graphql`
		query MyQuery {
			allContentfulComponent4 {
				nodes {
					author
					heading
					collection
					images {
						fluid(maxWidth: 400) {
							...GatsbyContentfulFluid
						}
					}
				}
			}
		}
	`);

	const component = data.allContentfulComponent4.nodes;
	return (
		<article
			css={css`
				width: 23.25rem;
				height: 23.9375rem;
				border-radius: 15px;
				position: relative;
				overflow: hidden;
				background-color: #fff;
			`}
		>
			<h4
				css={css`
					position: absolute;
					left: 1.75rem;
					z-index: 10;
					color: #fff;
					font-weight: bolder;
				`}
			>
				COLLECTION #{component[number].collection}
			</h4>
			<Img fluid={component[number].images[0].fluid} />
			<Img
				fluid={component[number].images[1].fluid}
				css={css`
					max-width: 3.75rem;
					max-height: 3.75rem;
					position: absolute;
					left: 1.75rem;
					top: -1.875rem;
					z-index: 20;
				`}
			/>
			<div
				css={css`
					margin: 0;
					padding-bottom: 3.125rem;
					display: flex;
					flex-direction: column;
					align-items: center;
				`}
			>
				<h4
					css={css`
						margin: 0;
					`}
				>
					{component[number].heading}
				</h4>
				<h5
					css={css`
						margin: 0;
						color: #7b8591;
						font-weight: lighter;
					`}
				>
					By: {component[number].author}
				</h5>
			</div>
		</article>
	);
};

export default Component4;
