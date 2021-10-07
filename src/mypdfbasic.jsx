// import React, {useState} from 'React';
// import {Document, Page} from 'react-pdf';

// function mypdfbasic() {
//     const [numPages, setNumPages] = useState(null);
//     const [pageNumber, setPageNumber] = useState(1);

//     function onDocumentLoadSuccess({numPages}) {
//         setNumPages(numPages);
//     }

//     return(
//         <div>
//             <Document
//                 file="myfile.pdf"
//                 onLoadSuccess={onDocumentLoadSuccess}
//             >
//                 <Page pageNumber={pageNumber}/>
//             </Document>
//             <p>Page {pageNumber} of {numPages}</p>
//         </div>
//     );
// }

// export default mypdfbasic;