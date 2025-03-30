// Baza danych w lokalnym obiekcie
let artists = [];
let albums = [];
let songs = [];
let rankings = [];

// Dodawanie artysty
document.getElementById('add-artist-form').addEventListener('submit', function(e) {
    e.preventDefault();
    let artistName = document.getElementById('artist-name').value;

    artists.push({
        name: artistName,
        streams: 0
    });

    alert(`Dodano artystę: ${artistName}`);
    document.getElementById('add-artist-form').reset();
});

// Dodawanie albumu
document.getElementById('add-album-form').addEventListener('submit', function(e) {
    e.preventDefault();
    let albumTitle = document.getElementById('album-title').value;
    let albumArtist = document.getElementById('album-artist').value;

    albums.push({
        title: albumTitle,
        artist: albumArtist
    });

    alert(`Dodano album: ${albumTitle}`);
    document.getElementById('add-album-form').reset();
});

// Dodawanie piosenki
document.getElementById('add-song-form').addEventListener('submit', function(e) {
    e.preventDefault();
    let songTitle = document.getElementById('song-title').value;
    let songArtist = document.getElementById('song-artist').value;
    let songAlbum = document.getElementById('song-album').value;

    let randomStreams = Math.floor(Math.random() * 10000000); // Losowe odtworzenia

    songs.push({
        title: songTitle,
        artist: songArtist,
        album: songAlbum,
        streams: randomStreams
    });

    alert(`Dodano piosenkę: ${songTitle} - ${songArtist}`);
    document.getElementById('add-song-form').reset();

    updateRanking();
});

// Aktualizacja rankingu Global 100
function updateRanking() {
    rankings = [...songs].sort((a, b) => b.streams - a.streams).slice(0, 10);

    let rankingList = document.getElementById('global-ranking');
    rankingList.innerHTML = '';

    rankings.forEach((song, index) => {
        let li = document.createElement('li');
        li.innerHTML = `#${index + 1} - ${song.title} (${song.artist}) - 🔥 ${song.streams.toLocaleString()} odtworzeń`;
        rankingList.appendChild(li);
    });
}

// Symulacja odtworzeń co 2 godziny
setInterval(() => {
    songs.forEach(song => {
        song.streams += Math.floor(Math.random() * 1000000);
    });
    updateRanking();
}, 7200000); // 2 godziny w milisekundach
