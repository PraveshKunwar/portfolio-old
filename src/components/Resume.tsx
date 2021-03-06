import React, { useState } from 'react';
import resume from '../static/resume.pdf';
import { Document, Page } from 'react-pdf';
const Resume: React.FC = () => {
	const [numPages, setNumPages] = useState(null);
	const [pageNumber, setPageNumber] = useState(1);
	const onSuccess = () => {
		setNumPages(numPages);
	};
	return (
		<div className="#resume">
			<Document file={resume} onLoadSuccess={onSuccess}>
				{' '}
				<Page pageNumber={pageNumber} />
			</Document>
			<p>
				Page {pageNumber} of {numPages}
			</p>
		</div>
	);
};

export default Resume;
