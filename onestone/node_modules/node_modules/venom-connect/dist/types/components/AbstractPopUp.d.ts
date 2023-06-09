/// <reference types="react" />
import { SimpleFunction, ThemeConfig } from "../types";
export declare const SECONDS: number;
declare type AbstractPopUpProps = {
    show: boolean;
    hide?: boolean;
    pause?: SimpleFunction;
    goBack?: SimpleFunction;
    onClose?: SimpleFunction;
    themeObject: ThemeConfig["theme"];
    cardHeader: {
        text: string | JSX.Element;
        fontSize?: number | string;
        textAlign?: "left" | "right" | "center";
    };
    children?: JSX.Element;
};
declare const AbstractPopUp: ({ show, hide, pause, goBack, onClose, themeObject, cardHeader, children, }: AbstractPopUpProps) => JSX.Element;
export default AbstractPopUp;
//# sourceMappingURL=AbstractPopUp.d.ts.map