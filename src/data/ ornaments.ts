import type { OrnmantKind } from "../types/ornaments.js";

export type OrnmantDef = {
    kind: OrnmantKind;
    label: string;
};

export const ORNAMENTS: OrnmantDef[] = [
    { kind: "star", label: "Star" },
    { kind: "candyCane", label: "Candy Cane" },
    { kind: "bauble", label: "Bauble" },
    { kind: "bell", label: "Bell" },
    { kind: "gift", label: "Gift" },
    { kind: "light", label: "Light" },
];