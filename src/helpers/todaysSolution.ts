import { songs } from "../constants";

const epochMs = new Date(2023, 4, 10).valueOf();
const now = Date.now();
const msInDay = 86400000;
const index = Math.floor((now - epochMs) / msInDay);

export const todaysSolution = songs[index % songs.length];
