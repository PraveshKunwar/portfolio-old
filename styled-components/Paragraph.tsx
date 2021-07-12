import styled from 'styled-components';
import { AboutParaTypes } from '../interfaces/AboutMeTypes';

export const AboutMeParagraph = styled.p`
	font-size: ${(props: AboutParaTypes) => (props.size ? props.size : '16px')};
	margin-top: ${(props: AboutParaTypes) => (props.top ? props.top : false)};
	color: ${(props: AboutParaTypes) => (props.color ? props.color : false)};
	text-align: ${(props: AboutParaTypes) =>
		props.aligned ? props.aligned : 'center'};
	font-family: 'Inter', 'Roboto', 'Oswald';
	animation: fadeIn ease 3s;
	-webkit-animation: fadeIn ease 3s;
	-moz-animation: fadeIn ease 3s;
	-o-animation: fadeIn ease 3s;
	-ms-animation: fadeIn ease 3s;
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
