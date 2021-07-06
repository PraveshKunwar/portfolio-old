import styled from 'styled-components';
//@ts-ignore
import SFMono_Regular from '../assets/fonts/SFMono_Regular.otf';

export const Badge = styled.div`
	@font-face {
		font-family: 'SF Mono';
		src: local('SF Mono'), url(${SFMono_Regular});
	}
	background-color: '#324122';
`;
