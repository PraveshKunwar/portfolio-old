import React from 'react';
import { AboutMeHeader as BlogHd } from '../styled-components/Header';
import Colors from '../utils/Colors';
const BlogHeader: React.FC = () => {
	return (
		<div className="#aboutme_header">
			<BlogHd
				color={Colors.darker_slate}
				size="30px"
				top="2rem"
				weight={700}
			>
				Blogs
			</BlogHd>
		</div>
	);
};

export default BlogHeader;
