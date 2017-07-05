export default class ArtistService {
    constructor($http){
        this.$http = $http;
        this.TOKEN = '3eb5746733b334285eb72372126b9a08';
        this.baseURL = 'http://ws.audioscrobbler.com/2.0/?';
    }

    getArtistList() {
        return this.$http.get(`${this.baseURL}method=chart.gettopartists&api_key=${this.TOKEN}&format=json&limit=10`);
    }

    getInfo(artist) {
        return this.$http.get(`${this.baseURL}method=artist.getinfo&artist=${this.getEncodedArtist(artist)}&api_key=${this.TOKEN}&format=json`);
    }

    getTopTracks(artist) {
        return this.$http.get(`${this.baseURL}method=artist.gettoptracks&artist=${this.getEncodedArtist(artist)}&api_key=${this.TOKEN}&format=json&limit=10`);
    }

    getEncodedArtist(artist){
        return encodeURI(artist)
    }
}
