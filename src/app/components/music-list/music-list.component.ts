import {AfterViewInit, Component, OnDestroy, OnInit, ViewChild} from '@angular/core';
import {CookieService} from 'ngx-cookie-service';
import {AudioPlayerComponent, Track} from 'ngx-audio-player';
import {TrackInfo} from '../../dto/TrackInfo';
import {MusicService} from '../../services/music.service';
import {SymbolReplacerPipe} from '../../pipes/utils.pipe';
import {MatSelectionList} from '@angular/material/list';
import {Subscription} from 'rxjs';
import {FileSaverService} from 'ngx-filesaver';
import {HttpClient} from '@angular/common/http';


@Component({
  selector: 'app-music-list',
  templateUrl: './music-list.component.html',
  styleUrls: ['./music-list.component.scss']
})
export class MusicListComponent implements OnInit, OnDestroy, AfterViewInit {

  playList: Track[] = [];
  filteredTracks: TrackInfo[] = [];
  isDownloadTracks: boolean = false;
  searchText: string;
  selected: boolean = false;
  @ViewChild('songs') songs: MatSelectionList;
  @ViewChild('audioPlayerComponent') audioPlayer: AudioPlayerComponent;
  private currentTime: number;
  private timeSubscription: Subscription;


  constructor(private musicService: MusicService,
              private cookieService: CookieService,
              private symbolReplacerPipe: SymbolReplacerPipe,
              private _FileSaverService: FileSaverService,
              private _http: HttpClient) {
  }

  ngOnInit(): void {
    this.isDownloadTracks = true;
    this.musicService.getUserMusic(this.cookieService.get('user_id')).subscribe(value => {
      this.getMusicFromServer(value);
    });
  }

  ngAfterViewInit(): void {
    this.timeSubscription = this.audioPlayer.audioPlayerService.getCurrentTime().subscribe(value => {
      this.currentTime = value;
    });
  }

  ngOnDestroy(): void {
    if (this.timeSubscription) {
      this.timeSubscription.unsubscribe();
    }
  }


  searchTrack($event: string) {
    console.log($event);
    if (!$event) {
      this.filteredTracks.forEach(value => {
        value.visible = true;
      });
    } else {
      this.filteredTracks.forEach(track => {
        track.visible = true;
        track.visible = (track.title + ' ' + track.author).toLowerCase().includes($event.toLowerCase());
      });
    }

  }

  reloadMusicList() {
    this.isDownloadTracks = true;
    this.musicService.reloadUserMusic(this.cookieService.get('user_id')).subscribe(value => {
      this.getMusicFromServer(value);
    });
  }


  getMusicFromServer(value: TrackInfo[]) {
    this.filteredTracks = value;
    this.isDownloadTracks = false;
  }

  formPlaylist(song: TrackInfo) {
    let songForPlaylist: Track = new Track();
    songForPlaylist.title = this.symbolReplacerPipe.transform(song.title, null);
    songForPlaylist.link = song.mp3;
    if (!song.addToPlayList) {
      song.addToPlayList = true;
      this.playList.push(songForPlaylist);
    } else {
      this.audioPlayer.play();
      this.playList.splice(this.playList.findIndex(value => value.link == songForPlaylist.link), 1);
      this.filteredTracks.forEach(value1 => {
        if (value1.mp3 == songForPlaylist.link) {
          value1.addToPlayList = false;
        }
      });
    }
    this.changePlayList();
  }

  selectAllSong() {
    this.songs.selectAll();
    this.playList = this.filteredTracks.map(song => {
      song.addToPlayList = true;
      return {title: this.symbolReplacerPipe.transform(song.title, null), link: song.mp3};
    });

  }

  showTrackInPlayList() {
    this.selected = true;
    this.filteredTracks.forEach(track => {
      track.visible = false;
      track.visible = track.addToPlayList;
    });

  }

  showAllTracks() {
    this.selected = false;
    this.filteredTracks.forEach(track => {
      track.visible = true;
    });
  }

  changePlayList() {
    if (this.audioPlayer.isPlaying) {
      this.audioPlayer.audioPlayerService.setPlaylist(this.playList);
      this.audioPlayer.currTimePosChanged({value: this.currentTime});
    } else {
      this.audioPlayer.audioPlayerService.setPlaylist(this.playList);
    }
  }


  downloadTack(song: TrackInfo, $event: Event) {
    $event.stopPropagation();
    const fileName = song.title;
    this._http.get(song.mp3, {
      observe: 'response',
      responseType: 'blob'
    }).subscribe(res => {
      song.isDownload = true;
      this._FileSaverService.save(res.body, fileName);
    });
    return;
  }


}
