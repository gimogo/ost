import { ProviderOptions } from "../../types";
import VenomWalletLogo from "../logos/VenomWalletLogo.svg";
export { VenomWalletLogo };
export declare const getVenomQr: (link?: string) => string;
export declare const getVenomIos: (link?: string) => string;
export declare const getVenomAndroid: (link?: string) => string;
export declare const venomDefaultLinks: {
    ios: undefined;
    android: undefined;
    qr: undefined;
    extension: {
        browser: string;
        link: string | null;
    }[];
};
export declare const venomwallet: ProviderOptions;
//# sourceMappingURL=venomwallet.d.ts.map