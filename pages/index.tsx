import React, { useEffect, useState } from 'react';
import Loading from '../components/Loading';
import path from 'path';
import grayMatter from 'gray-matter';
import AboutHeader from '../components/AboutHeader';
import AboutParagraph from '../components/AboutParagraph';
import Header from '../components/Header';
import ScrollToProjects from '../components/ScrollTo';
import Projects from '../components/Projects';
import Sticky from '../components/Sticky';
import { ShowMore } from '../styled-components/Button';
import Hr from '../styled-components/Hr';
import Colors from '../utils/Colors';
import { Box } from '../styled-components/Box';
import Link from 'next/link';
import { GetStaticProps, NextPage } from 'next';
import { useRouter } from 'next/dist/client/router';
import fs from "fs/promises"

interface IndexProps {
	posts: {
		path: string;
		title: any;
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
					{
						//Ignoring this, fix later maybe?
						//@ts-ignore
						widthHeight?.width < 768 ? false : <Sticky />
					}
					<Header />
					<ScrollToProjects />
					<AboutHeader />
					<AboutParagraph />
					<ShowMore
						color={Colors.slate}
						radius="10px"
						onClick={() => {
							router.push('/about');
						}}
					>
						Learn More
					</ShowMore>

					<Box
						width="600px"
						height="325px"
						background={Colors.lighter_navy}
						color={Colors.pink_main}
						size="16px"
						radius="0px"
					>
						<Hr init_color={Colors.slate} hover_color={Colors.pinkish_purp} />
					</Box>
					<Projects />
					<div className="post-links">
						{posts.map((post) => {
							const { title, path } = post;
							return (
								<Link key={path} href={path}>
									<a className={`post-${title}`}>{title}</a>
								</Link>
							);
						})}
					</div>
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
	const posts = files.map((f: any) => {
		return {
			path: `/posts/${f.fileName.replace('.mdx', '')}`,
			title: f.matter.data.title,
		};
	});
	return {
		props: {
			posts,
		},
	};
};


export default Index;
