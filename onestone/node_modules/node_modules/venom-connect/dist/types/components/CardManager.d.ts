/// <reference types="react" />
import { ProviderCardProps } from "./ProviderCard";
declare type CardManagerProps = Omit<ProviderCardProps, "isProviderExist" | "isCurrentBrowser" | "browser">;
export declare const CardManager: (props: CardManagerProps) => JSX.Element | null;
export {};
//# sourceMappingURL=CardManager.d.ts.map