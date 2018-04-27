//  js  array of objects 
       let  episodes =  [

      {
        "id": 2913,
        "url": "http:\/\/www.tvmaze.com\/episodes\/2913\/the-big-bang-theory-1x01-pilot",
        "name": "Pilot",
        "season": 1,
        "number": 1,
        "airdate": "2007-09-24",
        "airtime": "20:30",
        "airstamp": "2007-09-25T00:30:00+00:00",
        "runtime": 30,
        "image": {
          "medium": "http:\/\/static.tvmaze.com\/uploads\/images\/medium_landscape\/4\/12368.jpg",
          "original": "http:\/\/static.tvmaze.com\/uploads\/images\/original_untouched\/4\/12368.jpg"
        },
        "summary": "<p>Is a comedy about brilliant physicists, Leonard and Sheldon, who are the kind of \"beautiful minds\" that understand how the universe works. But none of that genius helps them interact with people, especially women. All this begins to change when a free-spirited beauty named Penny moves in next door. Sheldon, Leonard's roommate, is quite content spending his nights playing Klingon Boggle with their socially dysfunctional friends, fellow Cal Tech scientists Wolowitz and Koothrappali. However, Leonard sees in Penny a whole new universe of possibilities... including love.<\/p>",
        "_links": {
          "self": {
            "href": "http:\/\/api.tvmaze.com\/episodes\/2913"
          }
        }
      },


      {
        "id": 2914,
        "url": "http:\/\/www.tvmaze.com\/episodes\/2914\/the-big-bang-theory-1x02-the-big-bran-hypothesis",
        "name": "The Big Bran Hypothesis",
        "season": 1,
        "number": 2,
        "airdate": "2007-10-01",
        "airtime": "20:30",
        "airstamp": "2007-10-02T00:30:00+00:00",
        "runtime": 30,
        "image": {
          "medium": "http:\/\/static.tvmaze.com\/uploads\/images\/medium_landscape\/4\/12369.jpg",
          "original": "http:\/\/static.tvmaze.com\/uploads\/images\/original_untouched\/4\/12369.jpg"
        },
        "summary": "<p>Leonard volunteers to sign for a package, hoping to make a good impression on Penny. When he enlists the help of his obsessive-compulsive roommate, Sheldon, his attempt at chivalry goes horribly awry.<\/p>",
        "_links": {
          "self": {
            "href": "http:\/\/api.tvmaze.com\/episodes\/2914"
          }
        }
      },


      {
        "id": 2915,
        "url": "http:\/\/www.tvmaze.com\/episodes\/2915\/the-big-bang-theory-1x03-the-fuzzy-boots-corollary",
        "name": "The Fuzzy Boots Corollary",
        "season": 1,
        "number": 3,
        "airdate": "2007-10-08",
        "airtime": "20:30",
        "airstamp": "2007-10-09T00:30:00+00:00",
        "runtime": 30,
        "image": {
          "medium": "http:\/\/static.tvmaze.com\/uploads\/images\/medium_landscape\/4\/12370.jpg",
          "original": "http:\/\/static.tvmaze.com\/uploads\/images\/original_untouched\/4\/12370.jpg"
        },
        "summary": "<p>Leonard is bummed to learn that his crush, Penny, is seeing someone, so encouraged by his friends and fellow scientists, Leonard actually summons the nerve to ask a woman out on a date.<\/p>",
        "_links": {
          "self": {
            "href": "http:\/\/api.tvmaze.com\/episodes\/2915"
          }
        }
      }

    ] 
// function  to  get episode data  by taking season and episode number as input
    let getData = ( season ,number,allUsers) =>{

      

            for (x in allUsers)
            {
                if(allUsers[x].season == season  && allUsers[x].number==number)
                {
                  console.log(allUsers[x])
                }
            }

    }



    getData( 1, 3, episodes)