import { Box } from '../styled-components/Box';
import Colors from '../utils/Colors';
import { NextPage } from 'next';

const FourOhFour: NextPage = (): JSX.Element => {
	return (
		<div className="?err">
			<p style={{ marginTop: '50vh' }}>
				<b style={{ color: Colors.pink_main }}>▹ </b> Couldn't find that page.
				Try again.
			</p>
		</div>
	);
};

export default FourOhFour;
