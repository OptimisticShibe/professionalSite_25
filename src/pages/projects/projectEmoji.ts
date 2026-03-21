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
// Irs
import curlPage from "@assets/mutantEmoji/curled_page.svg";
import calendarSpiral from "@assets/mutantEmoji/calendar_spiral.svg";
import pen from "@assets/mutantEmoji/pen.svg";
// WorkOhio
import constructionWorker from "@assets/mutantEmoji/construction_worker_o2.svg";
import briefcase from "@assets/mutantEmoji/briefcase.svg";
import articulatedTruck from "@assets/mutantEmoji/articulated_truck.svg";

export const projectEmoji: { [name: string]: ImageMetadata[] } = {
  top5Spotify: [musicNote, crt, lp],
  staticSiteDesigns: [sun, coffee, techWorker],
  threeJsPortfolio: [rocket, computer, palette],
  irs: [curlPage, calendarSpiral, pen],
  workOhio: [articulatedTruck, constructionWorker, briefcase],
};
