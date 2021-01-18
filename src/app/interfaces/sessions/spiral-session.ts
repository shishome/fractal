import {Session} from "./session";
import {LineList} from "../swirl/line-list";

export interface SpiralSession extends Session {
    lines: LineList;

    textColor: string;
    images: string[];

    files: string[];
}
