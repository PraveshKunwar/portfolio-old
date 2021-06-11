import { AppProps } from 'next/app';
import Head from 'next/head';

const App = ({ Component, pageProps }: AppProps): JSX.Element => {
	return (
		<>
			<Head>
				<meta charSet="utf-8" />
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				<meta
					name="description"
					content="Personal portfolio for Pravesh Kunwar."
				/>
				<meta name="keywords" content="PraveshK, Pravesh Kunwar" />
				<meta name="author" content="Pravesh Kunwar" />
			</Head>
			<style jsx global>{`
				body {
					background-color: #141413;
				}
			`}</style>
			<Component {...pageProps} />
		</>
	);
};
export default App;
