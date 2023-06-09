declare type Logger = {
    type?: "error" | "log";
    key?: string;
    value?: string;
};
export declare const log: ({ type, key, value }: Logger) => void;
export declare const getKey: (name: string, type: string) => string;
declare type MakeMove = {
    logger: {
        before: string;
        after: string;
        error: string;
        key?: string;
    };
    cb: () => Promise<any> | void;
};
export declare const makeMove: (logger: MakeMove["logger"], cb: MakeMove["cb"]) => Promise<any>;
/**
 * ["isChrome", "isDesktop"]
 *
 * [["isChrome", "isDesktop"], ["isFirefox", "isDesktop"]]
 *
 * "isDesktop"
 */
export declare const checkIsCurrentBrowser: (isCurrentBrowser?: any) => {
    isCurrentBrowser: boolean;
};
export {};
//# sourceMappingURL=utils.d.ts.map