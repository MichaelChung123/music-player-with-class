class Track {
    constructor(title, rating, length) {
        this.title = title;
        this.rating = rating;
        this.length = length;
    }
}

class Playlist {
    constructor(name, tracks) {
        this.name = name;
        this.tracks = tracks;
    }

    //get average of all ratings for all tracks
    overallRating() {
        let sumRating = 0;
        let average = 0;

        for(let track of this.tracks) {
            sumRating += track.rating;
        }    

        average = sumRating / this.tracks.length;

        return average;
    }

    //sum total time of each track
    totalDuration() {
        let totalLength = 0;

        for(let track of this.tracks) {
            totalLength += track.length;
        }

        return totalLength;
    }
}

class Library {
    constructor(name, creator, playlists) {
        this.name = name;
        this.creator = creator;
        this.playlists = playlists;
    }
}

let track1 = new Track("Yeah Right", 5, 174);
let track2 = new Track("Blowback", 4, 154);
let track3 = new Track("Saturday Night", 3, 134);

let playlist1 = new Playlist("Smushing Butts", [track1, track2, track3]);
let playlist2 = new Playlist("Smushing Butts 2", [track3, track2, track1]);
let playlist3 = new Playlist("Who is DJ Snek", [track2, track3, track1]);

let library = new Library("Mahos Library", "Maho", [playlist1, playlist2, playlist3]);


console.log("Playlist 1 Overall Rating: ", playlist1.overallRating());
console.log("Playlist 1 Total Duration: ", playlist1.totalDuration());