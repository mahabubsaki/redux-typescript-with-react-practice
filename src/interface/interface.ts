import { Component, FC, ReactElement, ReactNode } from "react";
import { IconType } from "react-icons";

export interface NavbarObj {
    name: string;
    icon: IconType;
    route: string;
}export interface ActiveProps {
    children: JSX.Element[],
    to: string
}
export interface RouteObj {
    elements: any;
    path: string
}
