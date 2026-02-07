import type { Principal } from "@icp-sdk/core/principal";
export interface Some<T> {
    __kind__: "Some";
    value: T;
}
export interface None {
    __kind__: "None";
}
export type Option<T> = Some<T> | None;
export interface ContactEntry {
    name: string;
    email: string;
    message: string;
}
export interface backendInterface {
    getAllContactFormEntries(): Promise<Array<ContactEntry>>;
    submitContactFormEntry(name: string, email: string, message: string): Promise<void>;
}
