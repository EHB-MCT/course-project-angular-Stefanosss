import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss']
})
export class ChatComponent implements OnInit {

  @Input() streamChat = [];

  @Input() streamer;

  constructor() { }

  ngOnInit(): void {

    
    console.log(this.streamChat);
    
    

  }
  
  onSendMessage(chatParam: HTMLInputElement){

    if(chatParam.value != ''){
      let number = Math.floor((Math.random() * 100) + 1);
      let message = chatParam.value;
      this.streamChat.push({number, message});
      chatParam.value = '';
    }
    
    
  }
}
