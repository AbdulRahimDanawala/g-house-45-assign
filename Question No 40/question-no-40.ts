function make_album(artist: string, title: string, tracks?: number): object {
    // Create an album object with artist and title properties
    const album = { artist, title, tracks };
    // Add tracks property if a number is provided for tracks
    if (tracks !== undefined) {
      album.tracks = tracks;
    }
    return album;
  }
  
  // Make dictionaries (objects) for three albums
  const album1 = make_album("Pink Floyd", "The Dark Side of the Moon");
  const album2 = make_album("Kendrick Lamar", "To Pimp a Butterfly", 14);
  const album3 = make_album("Björk", "Homogenic");
  
  // Print the album information
  console.log(album1);
  console.log(album2);
  console.log(album3);
  