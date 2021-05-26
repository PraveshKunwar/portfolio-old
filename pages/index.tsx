import React, { useEffect, useState } from 'react';
import Loading from '../components/Loading';
import { promises as fs } from 'fs';
import path from 'path';
import grayMatter from 'gray-matter';
import AboutHeader from '../components/AboutHeader';
import AboutParagraph from '../components/AboutParagraph';
import Header from '../components/Header';
import ScrollToProjects from '../components/ScrollToProjects';
import Projects from '../components/Projects';
import Sticky from '../components/Sticky';
import { ShowMore } from '../styled-components/Button';
import Hr from '../styled-components/Hr';
import Colors from '../utils/Colors';
import { Box } from '../styled-components/Box';
import Link from 'next/link';
import { GetStaticProps, NextPage } from 'next';
import { useRouter } from 'next/dist/client/router';

interface IndexProps {
	posts: {
		path: string;
		title: any;
	}[];
}

export const Index: NextPage<IndexProps> = ({
	posts,
}: IndexProps): JSX.Element => {
	const [loading, setLoading] = useState(false);
	const router = useRouter();
	useEffect(() => {
		setLoading(true);
		setTimeout(() => {
			setLoading(false);
		}, 3000);
		document.body.style.backgroundColor = '#0a192f';
	}, []);
	return (
		<div className="#personal-portfolio">
			{loading ? (
				<Loading />
			) : (
				<div className="#home">
					<Sticky />
					<Header />
					<ScrollToProjects />
					<AboutHeader />
					<AboutParagraph />
					<ShowMore
						color={Colors.dark_slate_border_purple}
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
		fileNames.map(async (fileName) => {
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
			path: `/posts/${f.fileName.replace('mdx', '')}`,
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
