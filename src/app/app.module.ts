import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainComponent } from './pages/main/main.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { ChatRoomsComponent } from './components/chat-rooms/chat-rooms.component';
import { ChatComponent } from './components/chat/chat.component';
import { ChatSidebarComponent } from './components/chat-sidebar/chat-sidebar.component';

import { DragDropModule } from '@angular/cdk/drag-drop';
import { MenuComponent } from './components/menu/menu.component';
import { ImageMaskComponent } from './components/image-mask/image-mask.component';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { StoreModule } from '@ngrx/store';
import { RoomComponent } from './components/room/room.component';
import { InitialPipe } from './pipes/initial.pipe';
import { MessageComponent } from './components/message/message.component';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    SidebarComponent,
    ChatRoomsComponent,
    ChatComponent,
    ChatSidebarComponent,
    MenuComponent,
    ImageMaskComponent,
    RoomComponent,
    InitialPipe,
    MessageComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    DragDropModule,
    MatSlideToggleModule,
    StoreModule.forRoot({}),
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
