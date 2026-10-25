import { execSync } from 'child_process';
import fs from 'fs';

export const musicData = [];
const root        = "static/media/music"
const albumPaths  = fs.readdirSync(root);

const parseAlbum = album => {
  const tracks      = [];
  const albumPath   = `${root}/${album}`;
  const trackPaths  = fs.readdirSync(albumPath);

  for (const file of trackPaths) {
    if (file.endsWith(".mp3")) {
      const trackPath = `${albumPath}/${file}`;
      const ffpCmd    = execSync(`ffprobe -v quiet -print_format json -show_format "${trackPath}"`);
      const metadata  = JSON.parse(ffpCmd).format;
      const [_, title, subtitle] = metadata.tags.title.match(/(.*)\((.*)\)$/u) || [null, metadata.tags.title, undefined];
      tracks.push({
        title:    title.trim(),
        subtitle: subtitle || undefined,
        artist:   metadata.tags.artist,
        length:   Number(metadata.duration),
        trackNum: Number(metadata.tags.track),
        released: new Date(metadata.tags.releasetime),
        path:     trackPath
      });
    }
  };
  tracks.sort((a,b) => a.trackNum - b.trackNum);

  if (fs.existsSync(`${albumPath}/meta.json`)) {
    const metadata = fs.readFileSync(`${albumPath}/meta.json`);
    musicData.push({
      ...JSON.parse(metadata),
      tracks: tracks
    });
  }
}

export const getMusic = () => {
  albumPaths.forEach(album => {
    parseAlbum(album);
  });
  musicData.sort((a,b) => {
    const da = new Date(a.release_date);
    const db = new Date(b.release_date);
    return db.getTime() - da.getTime();
  });
  
  fs.writeFileSync('src/lib/generated/music.ts',
    `export const musicData = ${JSON.stringify(musicData)};\n`
  );
}