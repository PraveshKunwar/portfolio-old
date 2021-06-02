import { Box } from '../styled-components/Box';
import Colors from '../utils/Colors';
import { NextPage } from 'next';
import { LandingHeader as Header } from '../styled-components/Header';
import { ShowMore as Btn } from '../styled-components/Button';
import { useRouter } from 'next/router';
const FourOhFour: NextPage = (): JSX.Element => {
	const router = useRouter();
	return (
		<div className="?err">
			<p style={{ marginTop: '50vh' }}>
				<Header h1_color={Colors.darker_slate} b_color={Colors.pink_main}>
					<b>▹ </b>
					Couldn't find that page. Try again.
					<br></br>
					<br></br>
					<Btn
						gradient="#112240"
						color={Colors.slate}
						radius="10px"
						onClick={() => {
							router.push('/');
						}}
					>
						Go back
					</Btn>
				</Header>
			</p>
			<br></br>
		</div>
	);
};

export default FourOhFour;
