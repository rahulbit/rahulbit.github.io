

class Youtube{
    
    private Title:string;
    private releaseDate:string
    private views:number;
    private videolength:string;
    private numberofSubscriber:string;
    public numberofComments:number;
    private likes:number;
    private dislikes:number;
    private uploadedby:string;
    public trending:number;

    constructor(Title:string, releaseDate:string ,views:number, videolength:string,numberofsubscriber:string,numberofComments:number,likes:number,dislikes:number,uploadedby:string,trending:number){
             this.Title=Title;
             this.releaseDate=releaseDate;
             this.views=views;
             this.videolength =videolength;
             this.numberofSubscriber=numberofsubscriber;
             this.numberofComments=numberofComments;
             this.likes =likes;
             this.dislikes =dislikes;
            this.uploadedby =uploadedby;
            this.trending=trending;


    }

    getTitle=():string=>{
        return this.Title;
    }

    getNumberofViews=():number=>{
        return this.views;
    
    }

    setNumberofView=(vw:number)=>{
               this.views =vw;
    }

    getReleasedate=():string=>{
        return   this.releaseDate;
    }

    getTrending=():number=>{
        return this.trending
    }

    getSubscriber=():string=>{
        return this.numberofSubscriber;
    }
     getLikes=():number=>{
         return this.likes;
     }
     getDislikes=():number=>{
         return this.dislikes;
     }

     getVideolength=():string=>{
         return this.videolength;
     }

     getUploadedby=():string=>{
         return this.uploadedby;
     }

     getAllcomments=()=>{
         console.log()
     }

     getCommentsLike=()=>{
          console.log()
     }

     getCommentsDislike=()=>{
            console.log()
     }

     

}


let yt = new Youtube("AIB podcast", "May 4 2018",1001016,"12 minutes","3,1m",1602,31000,13000,"All India Backchod", 4)
console.log(yt.getNumberofViews())
 yt.setNumberofView(1001016);
 console.log(yt.getTitle())
 console.log(yt.getNumberofViews());
 console.log(yt.getReleasedate())
 console.log(yt.getTrending())
 console.log(yt.getSubscriber())
 console.log(yt.getNumberofViews())
 console.log(yt.getUploadedby())
 console.log(yt.getLikes())
 console.log(yt.getDislikes())
 console.log(yt.getVideolength())
 console.log(yt.numberofComments)
