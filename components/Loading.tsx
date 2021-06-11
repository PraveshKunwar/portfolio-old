import React, { useEffect, useState } from 'react';
import { Spinner } from 'react-bootstrap';
import Welcome from '../styled-components/Welcome';
import SpinnerCenter from '../styled-components/SpinnerCenter';
import Colors from '../utils/Colors';

const Loading: React.FC = () => {
	const [final, setFinal] = useState(false);
	useEffect(() => {
		setFinal(true);
		setTimeout(() => {
			setFinal(false);
		}, 3000);
	}, []);
	return (
		<div className="#loading...">
			<SpinnerCenter>
				<Spinner animation="border" role="status" id="spinner" variant="info" />
			</SpinnerCenter>
			{final ? (
				<Welcome color={Colors.darker_slate}>Loading...</Welcome>
			) : (
				false
			)}
		</div>
	);
};

export default Loading;
