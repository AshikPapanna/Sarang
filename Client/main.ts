import{enableProdMode} from '@angular/core'
import {platformBrowserDynamic}from '@angular/platform-browser-dynamic'
import { AppModule } from 'src/app/app.module';
import { environment } from 'src/environments/environment';

export function getBaseUrl(){
    return document.getElementsByTagName('base')[0].href;
}
if(environment.production){
    enableProdMode();
}
const providers=[
    {provide:'BaseURL' ,useFactory:getBaseUrl,deps:[]}    
];
platformBrowserDynamic(providers).bootstrapModule(AppModule).catch(err=>{
    console.log(err);
})