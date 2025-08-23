import { atomWithStorage } from "jotai/utils";
import { getInitialData } from "../utils";

export const notesAtom = atomWithStorage("notes", getInitialData());