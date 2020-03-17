import { Component } from '@angular/core';
import { ChunkSettings } from '@progress/kendo-angular-upload';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.css']
})
export class HomeComponent {
    public chunkSettings: ChunkSettings = {
        size: 102400
    };
    public myForm: FormGroup;
    public myFiles: Array<any>;
    public submitted = false;
    public userName: string;

    constructor(private fb: FormBuilder, public http: HttpClient) {
        this.myForm = this.fb.group({
            username: [this.userName, [Validators.required, Validators.minLength(4)]],
            avatar: [this.myFiles, [Validators.required]]
        });
    }

    save(_value: any, valid: boolean) {
        this.submitted = true;

        if (valid) {
            console.log('Everything is OK!');
            this.http.post(`api/Submit/Form`, _value);
        }
    }
}
