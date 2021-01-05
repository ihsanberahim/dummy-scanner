import { DOCUMENT } from '@angular/common';
import { Component, Inject } from '@angular/core';
import { QRScanner, QRScannerStatus } from '@ionic-native/qr-scanner/ngx';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(private qrScanner: QRScanner,
    @Inject(DOCUMENT) private document: Document) {}


  scan(){
    this.document.body.style.backgroundColor = 'transparent';

    this.qrScanner.prepare();
    this.qrScanner.scan();
    this.qrScanner.resumePreview();
  }
}
