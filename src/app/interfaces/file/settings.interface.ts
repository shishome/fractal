import {Session} from "../sessions/session";

export interface Settings {
    name: string;
    subjectName: string;
    description?: string;
    sessions: Session[];
    lastSaved?: string;
    version?: string;
    folderName: string;
}
