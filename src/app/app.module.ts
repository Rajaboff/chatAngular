import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainComponent } from './pages/main/main.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { ChatRoomsComponent } from './components/chat-rooms/chat-rooms.component';
import { ChatComponent } from './components/chat/chat.component';
import { ChatSidebarComponent } from './components/chat-sidebar/chat-sidebar.component';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    SidebarComponent,
    ChatRoomsComponent,
    ChatComponent,
    ChatSidebarComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
