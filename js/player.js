class Jukebox {
    constructor(albums) {
        this.albums = []
    }

    addAlbum = function(album) {
        this.albums.push(album)
    }

    playAlbum = function(albumID) {
        let album = this.albums.find(album => album.albumid === albumID)
        album.play()
    }

    favoriteAlbum = function() {
        let max = -1, fav
        for (let i = 0; i < this.albums.length; i++) {
            if (this.albums[i].played > max) {
                max = this.albums[i].played
                fav = this.albums[i]
            }
        }
        return fav.display()
    }
}

class Album {
    constructor(albumID, artist, title) {
        this.albumid = albumID
        this.artist = artist
        this.title = title
        this.played = 0
    }

    play = function() {
        this.played += 1
    }

    display = function() {
        return `${this.artist} : ${this.title}.<br>The album has been played ${this.played} times.`
    }
}

var jbox = new Jukebox()
let albums = [
    { "albumid": "48204769", "artist": "Brad Paisley", "title": "Mud On The Tires"},
    { "albumid": "86675901", "artist": "Olivia Rodrigo", "title": "GUTS"},
    { "albumid": "01421010", "artist": "Post Malone", "title": "AUSTIN"},
    { "albumid": "82031076", "artist": "The 1975", "title": "I like it when you sleep, for you are so beautiful yet so unaware of it"},
    { "albumid": "49196556", "artist": "The Temper Trap", "title": "Conditions"},
    { "albumid": "01357692", "artist": "Aleks Syntek", "title": "Sexo Pudor y Lágrimas"},
    { "albumid": "92197561", "artist": "U2", "title": "The Joshua Tree"},
    { "albumid": "00459309", "artist": "The Naked and Famous", "title": "Passive Me, Aggressive You"},
    { "albumid": "21141051", "artist": "Jesse & Joy", "title": "¿Con Quién Se Queda El Perro?"},
    { "albumid": "73317221", "artist": "Evanescence", "title": "Fallen"},
    { "albumid": "27335302", "artist": "Mumford & Sons", "title": "Babel"},
    { "albumid": "87594104", "artist": "Calvin Harris", "title": "18 Months"},
    { "albumid": "54336840", "artist": "Gwen Stefani", "title": "Love. Angel. Music. Baby."},
    { "albumid": "24428774", "artist": "Radiohead", "title": "The Bends"},
    { "albumid": "64706325", "artist": "Tim McGraw", "title": "Live Like You Were Dying"},
    { "albumid": "93586591", "artist": "ATB", "title": "Addicted to Music"},
    { "albumid": "86971865", "artist": "Montgomery Gentry", "title": "My Town"},
    { "albumid": "08711120", "artist": "Coldplay", "title": "A Rush of Blood to the Head"},
    { "albumid": "08464426", "artist": "Brooks & Dunn", "title": "Brand New Man"},
    { "albumid": "02582212", "artist": "Keith Urban", "title": "Golden Road"}
]
let selection = document.getElementById('album-list')
let favoriteAlbum = document.getElementById('favoriteAlbum')

// Setup albums in Jukebox and display
function setupJukebox() {
    let newAlbum
    let albumSelectionList = '<option value="none">Select an album to play</option>'

    for (let i = 0; i < albums.length; i++) {
        newAlbum = new Album(albums[i].albumid, albums[i].artist, albums[i].title)
        jbox.addAlbum(newAlbum)
        albumSelectionList += `<option value="${albums[i].albumid}">${albums[i].artist} : ${albums[i].title}</option>`
    }

    selection.innerHTML = albumSelectionList
}

setupJukebox()

// Handle play button
document.getElementById('play-album').addEventListener('click', (e) => {
    let selectedAlbum = selection.value

    if (selectedAlbum != 'none') {
        jbox.playAlbum(selection.value)
    }
})

// Handle favorite album button
document.getElementById('favorite-album').addEventListener('click', (e) => {
    favoriteAlbum.innerHTML = jbox.favoriteAlbum()
})