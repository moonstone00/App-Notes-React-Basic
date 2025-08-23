import { atomWithStorage } from "jotai/utils";
import { getInitialData } from "../utils";
import { atom } from "jotai";

export const notesAtom = atomWithStorage("notes", getInitialData());


export const searchAtom = atom("")