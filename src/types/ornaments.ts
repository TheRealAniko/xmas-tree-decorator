export type OrnmantKind = "star" | "candyCane" | "bauble" | "bell" | "gift" | "light";

export type PlacedOrnament = {
    id: string;
    kind: OrnmantKind;
    x: number;
    y: number;
};
