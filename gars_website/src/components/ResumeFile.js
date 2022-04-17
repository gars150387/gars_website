import React, { useState } from 'react'
import { Viewer } from '@react-pdf-viewer/core'
import { Row, Col} from 'react-bootstrap'
import "@react-pdf-viewer/core/lib"
import '@react-pdf-viewer/default-layout'

import '../style/resume.css'

import { Worker } from '@react-pdf-viewer/core'

import PdfFile from '../pdf/GustavoRodriguezSanteliz_SoftwareDeveloper.pdf'

export const ResumeFile = () => {

    const [defaultPdfFile] = useState(PdfFile);

    return (
        <Row>
            <Col>
                <Worker workerUrl="https://unpkg.com/pdfjs-dist@2.6.347/build/pdf.worker.min.js">
                    <Viewer className="viewer" fileUrl={defaultPdfFile} />
                </Worker>
            </Col>
        </Row>
    )
}