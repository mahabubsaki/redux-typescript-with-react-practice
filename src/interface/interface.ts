import { IconType } from "react-icons";

export interface NavbarObj {
    name: string;
    icon: IconType;
    route: string;
}export interface ActiveProps {
    children: JSX.Element[],
    to: string
}
