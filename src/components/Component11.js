import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import BackgroundImage from 'gatsby-background-image';
import Img from 'gatsby-image';
import { css } from '@emotion/core';

const Component11 = ({ number }) => {
	const data = useStaticQuery(graphql`
		query componentQuery11 {
			allContentfulComponent11 {
				nodes {
					textColor
					images {
						fluid(maxWidth: 400) {
							...GatsbyContentfulFluid
						}
					}
					buttonColor
					bodyText {
						bodyText
					}
					company
				}
			}
		}
	`);
	const component = data.allContentfulComponent11.nodes;
	console.log(component);

	return (
		<BackgroundImage
			fluid={component[number].images[1].fluid}
			css={css`
				width: 17.75rem;
				height: 22.9375rem;
				padding: 3.25rem 2.75rem;
			`}
		>
			<div
				css={css`
					display: flex;
					align-items: center;
				`}
			>
				<Img
					fluid={component[number].images[0].fluid}
					css={css`
						width: 2.8125rem;
						height: 2.8125rem;
					`}
				/>
				<h5
					css={css`
						margin-left: 0.625rem;
						text-transform: uppercase;
						letter-spacing: 0.2rem;
					`}
				>
					{component[number].company}
				</h5>
			</div>
			<p
				css={css`
					color: ${component[number].textColor};
				`}
			>
				{component[number].bodyText.bodyText}
			</p>
			<p
				css={css`
					width: 8.8125rem;
					height: 3.0625rem;
					margin-top: 2.5rem;
					color: ${component[number].buttonColor};
					font-weight: bold;
					border: 1px solid ${component[number].buttonColor};
					border-radius: 25px;
					text-align: center;
					line-height: 3.0625rem;
				`}
			>
				Read More
			</p>
		</BackgroundImage>
	);
};

export default Component11;
