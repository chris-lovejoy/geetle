import { songs } from "../constants";
import { Song } from "../types/song";

export function searchSong(searchTerm: string): Song[] {
  searchTerm = searchTerm.toLowerCase();

  return songs
    .filter((song: Song) => {
      const songName = song.name.toLowerCase();
      const songArtist = song.movie.toLowerCase();

      if (songArtist.includes(searchTerm) || songName.includes(searchTerm)) {
        return song;
      }
    })
    .sort((a, b) =>
      a.movie.toLowerCase().localeCompare(b.movie.toLocaleLowerCase())
    )
    .slice(0, 5);
}
