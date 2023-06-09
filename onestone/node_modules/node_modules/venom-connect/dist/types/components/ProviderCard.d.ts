/// <reference types="react" />
import { ConnectorType, Theme, WalletDisplay, WayToConnect } from "../types";
export declare type ProviderCardProps = WalletDisplay & {
    isProviderExist: boolean;
    isCurrentBrowser: boolean;
    themeObject: Theme;
    themeName: string;
    onClick?: () => void;
    connectorType?: ConnectorType;
    browser?: string;
    options?: WayToConnect["options"];
    isFirst?: boolean;
    isBadBrowser?: boolean;
    allBrowsersNames?: string[];
    browsersNames?: string[];
};
export declare const ProviderCard: ({ name, logo, logoWhite, description, isProviderExist, isCurrentBrowser, themeObject, themeName, onClick, connectorType, browser, options, isFirst, isBadBrowser, allBrowsersNames, browsersNames, }: ProviderCardProps) => JSX.Element;
//# sourceMappingURL=ProviderCard.d.ts.map