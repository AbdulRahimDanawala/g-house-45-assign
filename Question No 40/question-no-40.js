function make_album(artist, title, tracks) {
    // Create an album object with artist and title properties
    var album = { artist: artist, title: title, tracks: tracks };
    // Add tracks property if a number is provided for tracks
    if (tracks !== undefined) {
        album.tracks = tracks;
    }
    return album;
}
// Make dictionaries (objects) for three albums
var album1 = make_album("Pink Floyd", "The Dark Side of the Moon");
var album2 = make_album("Kendrick Lamar", "To Pimp a Butterfly", 14);
var album3 = make_album("Björk", "Homogenic");
// Print the album information
console.log(album1);
console.log(album2);
console.log(album3);
