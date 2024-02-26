"use strict";
const make_album = (artistName, albumTitle, numberTrack) => {
    let ourAlbum = { name: artistName, album: albumTitle };
    if (numberTrack) {
        ourAlbum.track = numberTrack;
    }
    return ourAlbum;
};
let objOneAlbum = make_album('Aaman Tirkah', 'Hookah Bar', 12);
let objTwoAlbum = make_album('Artist 2.0', 'Album 2.0');
console.log(objOneAlbum);
console.log(objTwoAlbum);
