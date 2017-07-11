
import { Component, OnInit, ViewChild, Inject } from '@angular/core';
import { Wizard, WizardStep } from 'clarity-angular';
import { AlertService } from '../../alert.service';
import { ClaimService } from '../claim.service';
import { UploadingService } from '../../uploading.service';

import * as _ from 'lodash';

@Component({
  selector: 'sc-import-page',
  templateUrl: './import-page.component.html',
  styleUrls: ['./import-page.component.css']
})
export class ImportPageComponent implements OnInit {
  @ViewChild('wizard') wizard: Wizard;
  @ViewChild('file') file: any;

  isSuccess = false;
  isError = false;
  token: string;
  fileType: string;
  isUploading = false;
  totalImported = 0;
  openImport = false;

  filesUploads: Array<File> = [];
  fileName: string = null;
  submitLoading = true;
  logs: any = [];
  loading = false;

  constructor(
    @Inject('API_URL') private url: string,
    private claimService: ClaimService,
    private alertService: AlertService,
    private uploadingService: UploadingService
  ) {
    this.token = sessionStorage.getItem('token');
  }

  ngOnInit() {
    this.getLogs();
  }

  async getLogs() {
    this.loading = true;
    try {
      const result = await this.claimService.getLogs();
      this.loading = false;
      if (result.ok) {
        this.logs = result.rows;
      } else {
        const error = result.error || 'เกิดข้อผิดพลาดไม่สามารถดำเนินการได้';
        this.alertService.error(JSON.stringify(error));
      }
    } catch (error) {
      this.loading = false;
      this.alertService.error(error.message);
    }
  };

  fileChangeEvent(fileInput: any) {
    this.filesUploads = [];
    this.filesUploads = <Array<File>>fileInput.target.files;
    // console.log(this.filesUploads);
    this.fileName = this.filesUploads[0].name;
  }

  doUpload() {
    if (this.filesUploads) {
      const data = {
        fileType: this.fileType
      }
      this.isUploading = true;
      const url = `${this.url}/claim-manager/upload?token=${this.token}`;
      this.uploadingService.makeFileRequest(url, data, this.filesUploads)
        .then((result: any) => {
          if (result.ok) {
            this.alertService.success('นำเข้าข้อมูลเสร็จเรียบร้อยแล้ว');
            this.openImport = false;
          } else {
            this.alertService.error(JSON.stringify(result.error));
          }
          this.isUploading = false;
        }, (error) => {
          this.isUploading = false;
          this.alertService.error(JSON.stringify(error));
        });
    } else {
      this.alertService.error('กรุณาเลืิอกไฟล์ที่ต้องการอัปโหลด');
    }
  }

  removeFile(name) {
    this.alertService.confirm('ต้องการลบไฟล์นี้ ใช่หรือไม่')
      .then(() => {
        console.log(name);
        this.filesUploads = _.reject(this.filesUploads, function (el) { return el.name === name; });
      })
      .catch(() => {
        // cancel
      });
  }

  showUploader() {
    this.fileType = null;
    this.fileName = null;
    this.file.nativeElement.value = null;
    this.filesUploads = [];
    this.openImport = true;
  }

}
