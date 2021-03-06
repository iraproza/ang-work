import { Component } from '@angular/core';
     
class Item{
    image: string;
    topic: string;
    description: string;
     
    constructor(topic: string, description: string, image: string) {

        this.topic = topic;
        this.description = description;
        this.image = image;
    }
}
 
@Component({
    selector: 'app-post',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})


export class AppComponent {
    topic: string = "";
    description: string = '';
    image: string = '';
     
    items: Item[] =
    [
        { topic: "Fashion & lifestyle: how two became one", description: 'The changing retail and digital landscapes have blurred the        boundaries between the two. Naturally, we thought we’d investigate why.', image: 'https://cdn.asp.events/CLIENT_Ascentia_4E961A52_5056_B739_54289B84DF34E888/sites/MODA-2021/media/libraries/news/Moda%20Blog%20-%20lifestyle.png'},
        { topic: "The pros and cons of fashion subscription retail", description: 'Since the digital retail revolution is showing no signs of slowing down, we thought we’d look into the role fashion subscription services play, as well as the challenges they face.', image: 'https://cdn.asp.events/CLIENT_Ascentia_4E961A52_5056_B739_54289B84DF34E888/sites/MODA-2021/media/libraries/news/Moda-Blog-Landscape---safe.png/fit-in/650x9999/filters:no_upscale()'},
        { topic: "The road to digital transformation in the footwear industry", description: 'Fashion Together may be over, but that doesn’t mean you can’t still discover the latest must-have womenswear collections, handpicked from our exhibitor community.  Find out who featured on the line up for the Fashion Together Day One Womenswear Edit and learn a bit more about these exciting brands.', image: 'https://cdn.asp.events/CLIENT_Ascentia_4E961A52_5056_B739_54289B84DF34E888/sites/MODA-2021/media/libraries/news/Pure%20Blog%20-%20ww1%20feature%20(1).png'},
        { topic: "The question of race in the fashion industry", description:'In the last few months, conversations surrounding diversity and inclusivity have become particularly prevalent. Geopolitical issues and social movements including the US election, Black Lives Matter.', image: 'https://cdn.asp.events/CLIENT_Ascentia_4E961A52_5056_B739_54289B84DF34E888/sites/MODA-2021/media/libraries/news/Moda%20Blog%20-%20race.png'}
    ];
    addItem(topic: string, description: string, image: string): void {
         
        if(topic == null || description == null || image == null)
            return;
        this.items.unshift(new Item(topic, description, image));
    }
}
