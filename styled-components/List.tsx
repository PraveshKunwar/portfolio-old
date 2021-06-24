import styled from 'styled-components';
import { ListTypes } from '../interfaces/ListTypes';

export const List = styled.ul`
	text-align: center;
	list-style: none;
	> li {
		color: ${(props: ListTypes) => (props.color ? props.color : false)};
	}
`;
