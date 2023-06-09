import { Theme } from "../types";
declare type PartialTextTheme = Omit<Theme, "popup" | "item"> & {
    popup: Omit<Theme["popup"], "text"> & Partial<Theme["popup"]["text"]>;
    item: Omit<Theme["item"], "text"> & Partial<Theme["item"]["text"]> & {
        warning: Omit<Theme["item"]["warning"], "text"> & Partial<Theme["item"]["warning"]["text"]>;
    };
};
export declare const getThemeWithFallback: (theme: PartialTextTheme) => Theme;
export {};
//# sourceMappingURL=helpers.d.ts.map