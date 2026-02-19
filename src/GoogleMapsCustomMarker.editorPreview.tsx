/* eslint-disable */
import React, { ReactElement } from "react";
import { GoogleMapsCustomMarkerPreviewProps } from "../typings/GoogleMapsCustomMarkerProps";

export function preview(props: GoogleMapsCustomMarkerPreviewProps): ReactElement {
    return <div className={props.className}>Google Maps Custom Marker</div>;
}

export function getPreviewCss(): string {
    return require("./ui/GoogleMapsCustomMarker.css");
}
