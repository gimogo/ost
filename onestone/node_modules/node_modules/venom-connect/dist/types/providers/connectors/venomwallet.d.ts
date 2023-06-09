import { Callbacks } from "../../types";
export declare const venomWalletName = "Venom Wallet";
/**
 * venomProvider: ProviderRpcClient
 */
export declare const checkIsProviderExist: (venomProvider: any) => Promise<boolean>;
declare const venomWallet: {
    extension: {
        connector: (VenomProvider: any, options: any, callbacks: Callbacks) => Promise<any>;
        authChecker: (VenomProvider: any, options: any) => Promise<{
            auth: any;
            fallback: any;
        } | undefined>;
        standalone: (VenomProvider: any, options: any) => Promise<any>;
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
export default venomWallet;
//# sourceMappingURL=venomwallet.d.ts.map