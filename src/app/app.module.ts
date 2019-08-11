import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { EmojiPipe } from './emoji.pipe';

import { AnswerService } from './services/answer.service';

@NgModule({
  imports:      [ BrowserModule, HttpClientModule, FormsModule ],
  declarations: [ AppComponent, HelloComponent, EmojiPipe ],
  providers: [AnswerService],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
