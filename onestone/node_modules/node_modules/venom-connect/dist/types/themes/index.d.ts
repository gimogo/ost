import { ThemeConfig } from "../types";
import darkTheme from "./dark";
import lightTheme from "./light";
import venomTheme from "./venom";
export declare const themesList: {
    default: {
        name: "light";
        theme: import("../types").Theme;
    };
    light: {
        name: "light";
        theme: import("../types").Theme;
    };
    dark: {
        name: "dark";
        theme: import("../types").Theme;
    };
    venom: {
        name: "venom";
        theme: import("../types").Theme;
    };
};
export declare type ThemeNameList = typeof lightTheme.name | typeof darkTheme.name | typeof venomTheme.name;
export declare const getThemeConfig: (theme: ThemeNameList | ThemeConfig["theme"]) => ThemeConfig;
//# sourceMappingURL=index.d.ts.map