import { IKeyValuePair } from "./key-value-pair.interface";

export interface IConfirmationDialogData {
    message: string;
    details?: IKeyValuePair[]
}