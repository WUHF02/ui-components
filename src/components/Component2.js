import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';
import { css } from '@emotion/core';

const Component2 = () => {
	const data = useStaticQuery(graphql`
		query componentQuery2 {
			allContentfulComponent2 {
				nodes {
					bodyText {
						bodyText
					}
					category
					heading
					images {
						fluid(maxWidth: 400) {
							...GatsbyContentfulFluid
						}
					}
				}
			}
		}
	`);
	const component = data.allContentfulComponent2.nodes;
	return (
		<div
			css={css`
				padding: 3.125rem;
				background-color: #fff;
				width: 48.1875rem;
				height: 29.4375rem;
				border-radius: 25px;
				display: grid;
				grid-template-columns: 1fr 1fr;
				grid-template-rows: 0.5fr 1fr 1fr 1fr;
			`}
		>
			<Img
				fluid={component[0].images[0].fluid}
				alt='outdoor'
				css={css`
					width: 85%;
					border-radius: 15px;
					grid-column: 1 / 2;
					grid-row: 1 / 5;
				`}
			/>
			<p
				css={css`
					margin: 0;
					width: 6.1875rem;
					height: 2.0625rem;
					border-radius: 20px;
					display: flex;
					justify-content: center;
					align-items: center;
					letter-spacing: 0.2rem;
					text-transform: uppercase;
					font-size: 11px;
					font-weight: bold;
					color: #fff;
					background-color: #005aee;
					grid-column: 2 / 3;
					grid-row: 1 / 2;
					justify-self: right;
				`}
			>
				{component[0].category}
			</p>
			<h1
				css={css`
					margin: 0;
					font-size: 45px;
					font-weight: bold;
					width: 14.375rem;
					line-height: 2.3rem;
					grid-column: 2 / 3;
					grid-row: 2 / 3;
					line-height: 3rem;
					align-self: center;
				`}
			>
				{component[0].heading}
			</h1>
			<p
				css={css`
					margin: 0;
					align-self: center;
				`}
			>
				{component[0].bodyText.bodyText}
			</p>
			<figure
				css={css`
					margin: 0;
					grid-column: 2 / 3;
					grid-row: 4 / 5;
					display: flex;
					justify-content: space-between;
				`}
			>
				<SmallImgComponent src={component[0].images[1].fluid} />
				<SmallImgComponent src={component[0].images[2].fluid} />
				<SmallImgComponent src={component[0].images[3].fluid} />
			</figure>
		</div>
	);
};

export default Component2;

const SmallImgComponent = ({ src }) => {
	return (
		<Img
			fluid={src}
			alt='outdoor'
			css={css`
				width: 30%;
				border-radius: 15px;
			`}
		/>
	);
};
