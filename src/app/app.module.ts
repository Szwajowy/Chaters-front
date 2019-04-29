import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';

import { NavigationComponent } from './navigation/navigation.component';
import { ProfileComponent } from './profile/profile.component';
import { ChatsListComponent } from './chats-list/chats-list.component';
import { ChatComponent } from './chat/chat.component';
import { HomeComponent } from './home/home.component';
import { ProfileInfoComponent } from './profile-info/profile-info.component';
import { ChatService } from './chat.service';

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    ProfileComponent,
    ChatsListComponent,
    ChatComponent,
    HomeComponent,
    ProfileInfoComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
  ],
  providers: [ChatService],
  bootstrap: [AppComponent]
})
export class AppModule { }
