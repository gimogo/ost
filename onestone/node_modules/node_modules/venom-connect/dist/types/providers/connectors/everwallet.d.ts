import { Callbacks } from "../../types";
export declare const everWalletName = "Ever Wallet";
/**
 * everProvider: ProviderRpcClient
 */
export declare const checkIsProviderExist: (everProvider: any) => Promise<boolean>;
declare const everWallet: {
    extension: {
        connector: (EverProvider: any, options: any, callbacks: Callbacks) => Promise<any>;
        authChecker: (EverProvider: any, options: any) => Promise<{
            auth: any;
            fallback: any;
        } | undefined>;
        standalone: (EverProvider: any, options: any) => Promise<any>;
    };
    mobile: {
        connector: () => any;
    };
    ios: {
        connector: () => any;
    };
    android: {
        connector: () => any;
    };
};
export default everWallet;
//# sourceMappingURL=everwallet.d.ts.map