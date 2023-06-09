/// <reference types="react" />
import { Theme } from "../types";
export declare enum Browsers {
    isChrome = "Google Chrome",
    isFirefox = "Mozilla Firefox"
}
export declare const filterNameArr: (nameArr: string[]) => any[];
declare type BrowserBadgeProps = {
    browserName: Browsers | string;
    themeObject: Theme;
    isVisualHide?: boolean;
};
declare type BrowserTextProps = {
    browserName: Browsers | string;
};
declare type ProviderBadgeProps = {
    providerName: Browsers | string;
    themeObject: Theme;
    isVisualHide?: boolean;
};
declare type ProviderTextProps = {
    providerName: Browsers | string;
};
export declare const notSupported: {
    browser: {
        Badge: ({ browserName, themeObject, isVisualHide, }: BrowserBadgeProps) => JSX.Element;
        Text: ({ browserName }: BrowserTextProps) => JSX.Element;
    };
    provider: {
        Badge: ({ providerName, themeObject, isVisualHide, }: ProviderBadgeProps) => JSX.Element;
        Text: ({ providerName }: ProviderTextProps) => JSX.Element;
    };
};
export {};
//# sourceMappingURL=NotSupported.d.ts.map