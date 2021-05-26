import Head from 'next/head';
const Post = ({ children, frontMatter }: any): JSX.Element => {
	const { title } = frontMatter;
	return (
		<div className="posts">
			<Head>
				<title>{title}</title>
			</Head>
			<h1>{title}</h1>
			{children}
		</div>
	);
};
export default Post;
