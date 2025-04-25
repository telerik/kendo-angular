import { Component } from '@angular/core';
import { KENDO_TIMELINE, TimelineEvent } from '@progress/kendo-angular-layout';

@Component({
    selector: 'timeline-component',
    imports: [KENDO_TIMELINE],
    templateUrl: './timeline.component.html',
})
export class TimelineComponent {
    public events: TimelineEvent[] = [
        {
            description:
                'Barcelona is an excellent place to discover world-class arts and culture. Bullfighting was officially banned several years ago, but the city remains rich with festivals and events. The sights in Barcelona are second to none. Don’t miss the architectural wonder, Casa Mila—otherwise known as La Pedrera. It’s a modernist apartment building that looks like something out of an expressionist painting. Make your way up to the roof for more architectural surprises. And if you like Casa Mila, you’ll want to see another one of Antoni Gaudi’s architectural masterpieces, Casa Batllo, which is located at the center of Barcelona. Tenerife, one of the nearby Canary Islands, is the perfect escape once you’ve had your fill of the city. In Los Gigantes, life revolves around the marina.',
            date: new Date(2008, 4, 25),
            title: 'Barcelona and Tenerife',
            subtitle: 'May 25, 2008',
            images: [
                {
                    src: 'https://demos.telerik.com/aspnet-mvc/tripxpert/Images/Gallery/Barcelona-and-Tenerife/Arc-de-Triomf,-Barcelona,-Spain_Liliya-Karakoleva.JPG?width=500&amp;height=500',
                    alt: 'Arc de Triomf, Barcelona, Spain',
                },
            ],
            actions: [
                {
                    text: 'More info about Barcelona',
                    url: 'https://en.wikipedia.org/wiki/Barcelona',
                },
            ],
        },
        {
            description:
                'Touring the East Coast of the United States provides a massive range of entertainment and exploration. To take things in a somewhat chronological order, best to begin your trip in the north, checking out Boston’s Freedom Trail, Fenway Park, the Statue of Liberty, and Niagara Falls. Bring your raincoat to Niagara Falls, which straddles the boarder between Canada and the United States—the majestic sight might have you feeling misty in every sense of the word.',
            date: new Date(2007, 1, 27),
            title: 'United States East Coast Tour 1',
            subtitle: 'Feb 27, 2007',
            images: [
                {
                    src: 'https://demos.telerik.com/aspnet-mvc/tripxpert/Images/Gallery/United-States/Boston-Old-South-Church_Ivo-Igov.JPG?width=500&amp;height=500',
                    alt: 'Boston Old South Church',
                },
            ],
            actions: [
                {
                    text: 'More info about New York City',
                    url: 'https://en.wikipedia.org/wiki/New_York_City',
                },
            ],
        },
        {
            description:
                'Home of the oldest-known human structures in the world, the Maltese archipelago is best described as an open-air museum. Malta, the biggest of the seven Mediterranean islands, is the cultural center of the three largest—only three islands that are fully inhabited.  If you’re into heavy metal—swords, armor and other medieval weaponry—you’ll love the Grandmaster’s Palace.',
            date: new Date(2008, 5, 15),
            subtitle: 'Jun 15, 2008',
            title: 'Malta, a Country of Knights',
            images: [
                {
                    src: 'https://demos.telerik.com/aspnet-mvc/tripxpert/Images/Gallery/Malta/Bibliotheca-National-Library_Marie-Lan-Nguyen.JPG?width=500&amp;height=500',
                    alt: 'Bibliotheca National Library Marie Lan Nguyen',
                },
            ],
            actions: [
                {
                    text: 'More info about Malta',
                    url: 'https://en.wikipedia.org/wiki/Malta',
                },
            ],
        },
        {
            description:
                'The Italian Republic is a history lover’s paradise with thousands of museums, churches and archaeological sites dating back to Roman and Greek times. Visitors will also find a hub for fashion and culture unlike anywhere else in the world. Explore Ancient history in Rome at the Colosseum and Rome’s Ruins.',
            date: new Date(2008, 6, 6),
            subtitle: 'Jul 6, 2008',
            title: 'Wonders of Italy',
            images: [
                {
                    src: 'https://demos.telerik.com/aspnet-mvc/tripxpert/Images/Gallery/Italy/Basilica-di-San-Pietro-in-Vaticano2_Lilia-Karakoleva.jpg?width=500&amp;height=500',
                    alt: 'Basilica di San Pietro in Vaticano',
                },
            ],
            actions: [
                {
                    text: 'More info about Rome',
                    url: 'https://en.wikipedia.org/wiki/Rome',
                },
            ],
        },
        {
            description:
                'Tour the best of Western Europe and take in the sights of Munich, Frankfurt, Meinz, Bruxel, Amsterdam, and Vienna along the way. Discover the amazing world of plants at Frankfurt Palmengarten, the botanical gardens in Frankfurt.',
            date: new Date(2009, 7, 11),
            subtitle: 'Aug 11, 2009',
            title: 'The Best of Western Europe',
            images: [
                {
                    src: 'https://demos.telerik.com/aspnet-mvc/tripxpert/Images/Gallery/Western-Europe/Austrian-Parliament,-Vienna,-Austria_Gergana-Prokopieva.JPG?width=500&amp;height=500',
                    alt: 'Austrian Parliament, Vienna, Austria',
                },
            ],
            actions: [
                {
                    text: 'More info about Munich',
                    url: 'https://en.wikipedia.org/wiki/Munich',
                },
            ],
        },
    ];
}
