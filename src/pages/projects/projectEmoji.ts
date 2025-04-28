// Emoji
// Top 5
import musicNote from "@assets/mutantEmoji/music_note.svg";
import crt from "@assets/mutantEmoji/crt_prompt.svg";
import lp from "@assets/mutantEmoji/lp.svg";
// Static Site
import sun from "@assets/mutantEmoji/sun.svg";
import coffee from "@assets/mutantEmoji/hot_drink.svg";
import techWorker from "@assets/mutantEmoji/technologist_o2.svg";
// ThreeJS
import rocket from "@assets/mutantEmoji/rocket.svg";
import computer from "@assets/mutantEmoji/computer.svg";
import palette from "@assets/mutantEmoji/artist_palette.svg";

interface projectEmojiObj {
  top5Spotify: ImageMetadata[];
  staticSiteDesigns: ImageMetadata[];
  threeJsPortfolio: ImageMetadata[];
}

export const projectEmoji: projectEmojiObj = {
  top5Spotify: [musicNote, crt, lp],
  staticSiteDesigns: [sun, coffee, techWorker],
  threeJsPortfolio: [rocket, computer, palette],
};
