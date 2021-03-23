import styled from 'styled-components';
import { WelcomeTypes } from '../interfaces/LandingTypes';
import Colors from '../utils/Colors';

const Welcome = styled.h1`
	color: ${(props: WelcomeTypes) =>
		props.color ? props.color : Colors.pink_main};
	font-size: 45px;
	text-align: center;
	margin-top: 1rem;
	-webkit-animation: fadeIn ease 5s;
	-moz-animation: fadeIn ease 5s;
	-o-animation: fadeIn ease 5s;
	-ms-animation: fadeIn ease 5s;
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
`;

export default Welcome;
