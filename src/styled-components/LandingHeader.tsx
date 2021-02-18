import styled from 'styled-components';
import { LandingTypes } from '../interfaces/LandingTypes';

const LandingHeader = styled.h1`
	text-align: center;
	font-family: 'Inter', 'Roboto', 'Oswald';
	font-size: 45px;
	animation: fadeIn ease 2s;
	-webkit-animation: fadeIn ease 2s;
	-moz-animation: fadeIn ease 2s;
	-o-animation: fadeIn ease 2s;
	-ms-animation: fadeIn ease 2s;
	@keyframes fadeIn {
		0% {
			opacity: 0;
		}
		100% {
			opacity: 1;
		}
	}

	@-moz-keyframes fadeIn {
		0% {
			opacity: 0;
		}
		100% {
			opacity: 1;
		}
	}

	@-webkit-keyframes fadeIn {
		0% {
			opacity: 0;
		}
		100% {
			opacity: 1;
		}
	}

	@-o-keyframes fadeIn {
		0% {
			opacity: 0;
		}
		100% {
			opacity: 1;
		}
	}

	@-ms-keyframes fadeIn {
		0% {
			opacity: 0;
		}
		100% {
			opacity: 1;
		}
	}

	color: ${(props: LandingTypes) => (props.h1_color ? props.h1_color : '#333')};
	> b {
		color: ${(props: LandingTypes) => (props.b_color ? props.b_color : false)};
	}
	@media screen and (max-width: 768px) {
		font-size: 30px;
	}
`;

export default LandingHeader;
