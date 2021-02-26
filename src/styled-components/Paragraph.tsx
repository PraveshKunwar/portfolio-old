import styled from 'styled-components';
import { AboutParaTypes } from '../interfaces/AboutMeTypes';

export const AboutMeParagraph = styled.p`
	font-size: ${(props: AboutParaTypes) => (props.size ? props.size : '16px')};
	margin-top: ${(props: AboutParaTypes) => (props.top ? props.top : false)};
	color: ${(props: AboutParaTypes) => (props.color ? props.color : false)};
	text-align: center;
	font-family: 'Inter', 'Roboto', 'Oswald';
`;
