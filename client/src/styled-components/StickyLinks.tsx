import styled from 'styled-components';
import { StickyTypes } from '../interfaces/StickyTypes';
const StickyLinks = styled.div`
	font-size: ${(props: StickyTypes) =>
		props.font_size ? props.font_size : '30px'};
	display: flex;
	flex-direction: column;
	position: fixed;
	> div {
		padding: 16px;
	}
	@media screen and (max-width: 768px) {
		opacity: 0;
	}
`;

export default StickyLinks;
