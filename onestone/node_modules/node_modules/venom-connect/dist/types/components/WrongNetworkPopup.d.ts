/// <reference types="react" />
import { ThemeConfig } from "../types";
export declare type WrongNetworkPopupProps = {
    textColor: ThemeConfig["theme"]["common"]["text"]["color"];
    networkName: string;
    changeWallet: () => void;
    disconnect?: () => void;
};
export declare const WrongNetworkPopup: ({ textColor, networkName, changeWallet, disconnect, }: WrongNetworkPopupProps) => JSX.Element;
//# sourceMappingURL=WrongNetworkPopup.d.ts.map