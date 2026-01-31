import { Component } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faCode, faEnvelope, faGlobe } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-about',
  imports: [FontAwesomeModule],
  templateUrl: './about.html',
  styleUrl: './about.scss',
})
export class About {
    faGlobe = faGlobe;
    faEnvelope = faEnvelope;
    faCode = faCode;
}
