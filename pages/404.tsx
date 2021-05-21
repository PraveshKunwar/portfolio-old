import { Box } from '../styled-components/Box';
import Colors from '../utils/Colors';
import { NextPage } from "next"

const FourOhFour: NextPage = (): JSX.Element => {
	return (
		<Box
			width="400px"
			height="250px"
			background={Colors.lighter_navy}
			color={Colors.dark_slate_border_purple}
			size="16px"
			radius="0px"
		>
			<div className="?err">
				<p style={{ marginTop: '50vh' }}>
					<b style={{ color: Colors.pink_main }}>▹ </b> Couldn't find that page.
					Try again.
				</p>
			</div>
		</Box>
	);
}

export default FourOhFour;
