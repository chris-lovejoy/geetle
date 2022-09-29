import { songs } from "../constants";

const epochMs = new Date(2022, 8, 28).valueOf();
const now = Date.now();
const msInDay = 86400000;
const index = Math.floor((now - epochMs) / msInDay);

export const todaysSolution = songs[index % songs.length];
