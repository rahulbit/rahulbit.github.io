var Youtube = /** @class */ (function () {
    function Youtube(Title, releaseDate, views, videolength, numberofsubscriber, numberofComments, likes, dislikes, uploadedby, trending) {
        var _this = this;
        this.getTitle = function () {
            return _this.Title;
        };
        this.getNumberofViews = function () {
            return _this.views;
        };
        this.setNumberofView = function (vw) {
            _this.views = vw;
        };
        this.getReleasedate = function () {
            return _this.releaseDate;
        };
        this.getTrending = function () {
            return _this.trending;
        };
        this.getSubscriber = function () {
            return _this.numberofSubscriber;
        };
        this.getLikes = function () {
            return _this.likes;
        };
        this.getDislikes = function () {
            return _this.dislikes;
        };
        this.getVideolength = function () {
            return _this.videolength;
        };
        this.getUploadedby = function () {
            return _this.uploadedby;
        };
        this.getAllcomments = function () {
            console.log();
        };
        this.getCommentsLike = function () {
            console.log();
        };
        this.getCommentsDislike = function () {
            console.log();
        };
        this.Title = Title;
        this.releaseDate = releaseDate;
        this.views = views;
        this.videolength = videolength;
        this.numberofSubscriber = numberofsubscriber;
        this.numberofComments = numberofComments;
        this.likes = likes;
        this.dislikes = dislikes;
        this.uploadedby = uploadedby;
        this.trending = trending;
    }
    return Youtube;
}());
var yt = new Youtube("AIB podcast", "May 4 2018", 1001016, "12 minutes", "3,1m", 1602, 31000, 13000, "All India Backchod", 4);
console.log(yt.getNumberofViews());
yt.setNumberofView(1001016);
console.log(yt.getTitle());
console.log(yt.getNumberofViews());
console.log(yt.getReleasedate());
console.log(yt.getTrending());
console.log(yt.getSubscriber());
console.log(yt.getNumberofViews());
console.log(yt.getUploadedby());
console.log(yt.getLikes());
console.log(yt.getDislikes());
console.log(yt.getVideolength());
console.log(yt.numberofComments);
