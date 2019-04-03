import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { AngularFireDatabase } from '@angular/fire/database';
import { products } from './products';

@Injectable()
export class EditService{
    constructor(public db: AngularFireDatabase) {}

    public get(): Observable<any>{
        return this.db.list('products').valueChanges();
    }

    public save(data: any, isNew?: boolean) {
        if(isNew){
            let newPostKey = this.db.database.ref().child('products').push().key;
            data.key = newPostKey;
            this.db.database.ref('products/' + newPostKey).set(data);
        }else{
            this.db.database.ref('products/' + data.key).set(data);
        }        
    }

    public remove(data: any) {
        this.db.database.ref('products/' + data.key).remove();
    }

    public resetData(){
        this.db.database.ref('/').set(products);
    }
}
