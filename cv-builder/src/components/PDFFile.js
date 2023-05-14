import React from 'react';
import { Document, Text, Page } from '@react-pdf/renderer';

const PDFFile = () => (
    <Document>
        <Page>
            <Text>Hello There</Text>
        </Page>
    </Document>
);

export default PDFFile;