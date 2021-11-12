import React, { useEffect, useState } from 'react';
import Loading from '../components/Loading';
import path from 'path';
import grayMatter from 'gray-matter';
import BlogHeader from '../components/BlogHeader';
import AboutHeader from '../components/AboutHeader';
import AboutParagraph from '../components/AboutParagraph';
import Header from '../components/Header';
import ScrollToProjects from '../components/ScrollTo';
import Sticky from '../components/Sticky';
import { ShowMore } from '../styled-components/Button';
import Hr from '../styled-components/Hr';
import Colors from '../utils/Colors';
import { Box } from '../styled-components/Box';
import Link from '../styled-components/Link';
import { GetStaticProps, NextPage } from 'next';
import { useRouter } from 'next/dist/client/router';
import fs from 'fs/promises';
import { List } from '../styled-components/List';

interface IndexProps {
	posts: {
		path: string;
		Post: any;
		date: any;
	}[];
}

interface WindowSize {
	width: number;
}

export const Index: NextPage<IndexProps> = ({
	posts,
}: IndexProps): JSX.Element => {
	const [loading, setLoading] = useState<boolean>(false);
	const [widthHeight, setWidthHeight] = useState<WindowSize | null>(null);
	const router = useRouter();
	useEffect(() => {
		if (typeof window !== 'undefined') {
			setWidthHeight({
				width: window.innerWidth,
			});
		}
		setLoading(true);
		setTimeout(() => {
			setLoading(false);
		}, 3000);
		document.body.style.backgroundColor = '#000000';
	}, []);
	return (
		<div className="#personal-portfolio">
			{loading ? (
				<Loading />
			) : (
				<div className="#home">
					{(widthHeight as WindowSize)?.width < 768 ? false : <Sticky />}
					<Header />
					<ScrollToProjects />
					<AboutHeader />
					<AboutParagraph />
					<br></br>
					<BlogHeader />
					<div className="post-links" style={{ textAlign: 'center' }}>
						<List color={Colors.darker_slate}>
							{posts.map((post, i: number) => {
								const { Post, path, date } = post;
								return (
									<li key={i}>
										<Link
											size="20px"
											href={path}
											color={Colors.slate}
											rel="noreferrer"
										>
											Blog {i + 1}: {Post} - {date}
										</Link>
									</li>
								);
							})}
						</List>
					</div>

					<Box
						width="600px"
						height="350px"
						background={Colors.lighter_navy}
						color={Colors.pink_main}
						size="16px"
						radius="0px"
					>
						<Hr init_color={Colors.slate} hover_color={Colors.darker_slate} />
					</Box>
					<br></br>
				</div>
			)}
		</div>
	);
};

export const getStaticProps: GetStaticProps = async () => {
	const dir = path.join(process.cwd(), 'pages/posts');
	const fileNames = await fs.readdir(dir);
	const files = await Promise.all(
		fileNames.map(async (fileName: string) => {
			const fPath = path.join(dir, fileName);
			const content = await fs.readFile(fPath, 'utf-8');
			const matter = grayMatter(content);
			return {
				fileName,
				matter,
			};
		})
	);
	const posts = files.map((f) => {
		return {
			path: `/posts/${f.fileName.replace('.mdx', '')}`,
			Post: f.matter.data.Post,
			date: f.matter.data.date,
		};
	});
	return {
		props: {
			posts,
		},
	};
};

export default Index;
