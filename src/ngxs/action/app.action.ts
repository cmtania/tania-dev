import { LinkMenuEnum } from "../../model/menu.enun";

export class TriggerMenuButton {
    static readonly type = '[Trigger] TriggerMenuButton'
    constructor(public pageNav: number) {}
}