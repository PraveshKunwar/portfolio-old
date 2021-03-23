import styled from 'styled-components';
import { LinkTypes } from '../interfaces/LinkTypes';
const Link = styled.a`
	color: ${(props: LinkTypes) => (props.color ? props.color : false)};
	font-family: 'Inter', 'Roboto', 'Oswald';
	text-decoration: none;

	&:active {
		color: ${(props: LinkTypes) => (props.color ? props.color : false)};
	}
	&:visited {
		color: ${(props: LinkTypes) => (props.color ? props.color : false)};
	}
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
`;

export default Link;
