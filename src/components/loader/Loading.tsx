import React, { useEffect, useState } from 'react';
import { Spinner } from 'react-bootstrap';
import Welcome from '../../styled-components/Welcome';
import SpinnerCenter from '../../styled-components/SpinnerCenter';

const Loading: React.FC = () => {
	const [final, setFinal] = useState(false);
	useEffect(() => {
		setFinal(true);
		setTimeout(() => {
			setFinal(false);
		}, 5000);
	}, []);
	return (
		<div className="#loading...">
			<SpinnerCenter>
				<Spinner
					animation="border"
					role="status"
					id="spinner"
					variant="danger"
				></Spinner>
			</SpinnerCenter>
			{final ? <Welcome>Loading...</Welcome> : false}
		</div>
	);
};

export default Loading;
