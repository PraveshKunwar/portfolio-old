import styled from 'styled-components';
//@ts-ignore
import SFMono_Regular from '../assets/fonts/SFMono_Regular.otf';
import { BoxTypes } from '../interfaces/BoxTypes';

const Box = styled.div`
	@font-face {
		font-family: 'SF Mono';
		src: local('SF Mono'), url(${SFMono_Regular});
	}
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: row;
	> div {
		width: ${(props: BoxTypes) => (props.width ? props.width : false)};
		height: ${(props: BoxTypes) => (props.height ? props.height : false)};
		background: ${(props: BoxTypes) =>
			props.background ? props.background : false};
		font-size: ${(props: BoxTypes) => (props.size ? props.size : '16px')};
		color: ${(props: BoxTypes) => (props.color ? props.color : false)};
		border-radius: ${(props: BoxTypes) =>
			props.radius ? props.radius : '10px'};
		box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
		text-align: center;
		font-family: 'SF Mono';
	}
`;

export default Box;
