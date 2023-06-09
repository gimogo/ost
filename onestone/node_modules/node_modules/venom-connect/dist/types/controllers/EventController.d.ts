import { EventCallback } from "../types";
export declare class EventController {
    private _eventCallbacks;
    constructor();
    on(eventCallback: EventCallback): void;
    off(eventObj?: Partial<EventCallback>): void;
    trigger(event: string, result?: any): void;
}
//# sourceMappingURL=EventController.d.ts.map