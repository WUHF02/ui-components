import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';
import { css } from '@emotion/core';
import BackgroundImage from 'gatsby-background-image';
import Heart from '../assets/Heart.svg';

const Component5 = () => {
	const data = useStaticQuery(graphql`
		query componentQuery5 {
			allContentfulComponent5 {
				nodes {
					heading
					bodytext {
						bodytext
					}
					newspaper
					images {
						fluid(maxWidth: 800) {
							...GatsbyContentfulFluid
						}
					}
				}
			}
		}
	`);
	const component = data.allContentfulComponent5.nodes;
	return (
		<BackgroundImage
			fluid={component[0].images[1].fluid}
			css={css`
				width: 43.8125rem;
				height: 29.6875rem;
				padding: 2.1875rem;
				border-radius: 15px;
				position: relative;
				overflow: hidden;
				display: flex;
				flex-direction: column;
				justify-content: space-between;
			`}
		>
			<div
				css={css`
					display: flex;
					flex-direction: row;
					justify-content: space-between;
					align-items: center;
				`}
			>
				<div
					css={css`
						display: flex;
						flex-direction: row;
						align-items: center;
					`}
				>
					<Img
						fluid={component[0].images[0].fluid}
						css={css`
							width: 1.4375rem;
							height: 1.4375rem;
						`}
					/>
					<h5
						css={css`
							margin-left: 0.6875rem;
							color: #fff;
							text-transform: uppercase;
							letter-spacing: 0.2rem;
						`}
					>
						{component[0].newspaper}
					</h5>
				</div>
				<Heart />
			</div>
			<div
				css={css`
					position: relative;
				`}
			>
				<article
					css={css`
						width: 50%;
						margin-bottom: 3.125rem;
					`}
				>
					<h1
						css={css`
							width: 70%;
							margin-bottom: 1.125rem;
							color: #fff;
							font-weight: bolder;
							font-size: 2.05rem;
						`}
					>
						{component[0].heading}
					</h1>
					<p
						css={css`
							margin: 0;
							color: #fff;
							display: -webkit-box;
							-webkit-box-orient: vertical;
							-webkit-line-clamp: 2;
							overflow: hidden;
						`}
					>
						{component[0].bodytext.bodytext}
					</p>
				</article>
				<div
					css={css`
						position: absolute;
						bottom: 0;
						left: 47%;
						width: 3.3125rem;
						display: flex;
						flex-direction: row;
						justify-content: space-between;
					`}
				>
					<div
						css={css`
							width: 0.9375rem;
							height: 0.125rem;
							background-color: #fff;
							border-radius: 25px;
						`}
					></div>
					<div
						css={css`
							width: 0.9375rem;
							height: 0.125rem;
							background-color: #fff;
							border-radius: 25px;
							opacity: 0.3;
						`}
					></div>
					<div
						css={css`
							width: 0.9375rem;
							height: 0.125rem;
							background-color: #fff;
							border-radius: 25px;
							opacity: 0.3;
						`}
					></div>
				</div>
			</div>
		</BackgroundImage>
	);
};

export default Component5;
