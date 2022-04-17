import React from "react";
import { ResumeFile } from "../components/ResumeFile";
import {Row, Col} from 'react-bootstrap'
// import SinglePagePDFViewer from "./components/pdf/single-page";

/* This is required only if the project file is located 
inside the app. Otherwise you can use the external link of the pdf file*/

export const Resume = () => {
  return (
    <Row>
      <Col>
        <ResumeFile />
      </Col>
    </Row>
  );
}