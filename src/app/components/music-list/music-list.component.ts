import {Component, OnInit} from '@angular/core';
import {TestService} from '../../services/test.service';
import {CookieService} from 'ngx-cookie-service';
import {Track} from '../../dto/Track';

@Component({
  selector: 'app-music-list',
  templateUrl: './music-list.component.html',
  styleUrls: ['./music-list.component.scss']
})
export class MusicListComponent implements OnInit {

  tracks: Track[] = [];
  isDownloadTracks: boolean = false;

  constructor(private testService: TestService,
              private cookieService: CookieService) {
  }

  ngOnInit(): void {
    this.isDownloadTracks = true;
    this.testService.getUserMusic(this.cookieService.get('user_id')).subscribe(value => {
      this.tracks = value;
      this.isDownloadTracks = false;
    });
  }

}
