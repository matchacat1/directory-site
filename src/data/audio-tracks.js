// Selectable mixes/versions for the sitewide background audio player,
// grouped by which alias tab they appear under on the music page (`song`
// matches that alias's slug in music-tracks.js). Each one gets its own
// play/pause button and seek bar there — pressing play switches the
// background player to that track and updates the "Now playing" text in
// the bottom-left corner to match.
export const audioTracks = [
  { song: 'etona', slug: 'umlaut', title: 'umlaut', src: '/audio/ambino.mp3', nowPlaying: 'etona - umlaut' },
  {
    song: 'etona',
    slug: 'ebb-and-flow-breathing',
    title: 'ebb and flow (breathing)',
    src: '/audio/ebb-and-flow-breathing.mp3',
    nowPlaying: 'etona - ebb and flow (breathing)',
  },
  {
    song: 'jincha',
    slug: 'cruisin',
    title: 'cruisin',
    src: '/audio/cruisin.mp3',
    nowPlaying: 'jincha - cruisin',
  },
  {
    song: 'hoshia-tone',
    slug: 'duck',
    title: 'duck',
    src: '/audio/duck.mp3',
    nowPlaying: 'hoshia tone - duck',
  },
  {
    song: 'hoshia-tone',
    slug: 'geek',
    title: 'geek',
    src: '/audio/geek.mp3',
    nowPlaying: 'hoshia tone - geek',
  },
];
