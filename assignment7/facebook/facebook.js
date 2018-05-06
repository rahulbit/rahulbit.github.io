var facebook = /** @class */ (function () {
    function facebook(name, Dob, Masters, Bachelors, homeTown, livesIn, highSchool, mobilePhone, gender, Religion, RelationshipStatus, quotes, nickname) {
        var _this = this;
        this.getDateofbirth = function () {
            return _this.Dob;
        };
        this.getQuotes = function () {
            return _this.Quotes;
        };
        this.getRelationshipStatus = function () {
            return _this.relationshipStatus;
        };
        this.getGender = function () {
            return _this.Gender;
        };
        this.getEducationmaster = function () {
            return _this.educationbachelor;
        };
        this.getHometown = function () {
            return _this.hometown;
        };
        this.getLivesIn = function () {
            return _this.livesIn;
        };
        this.getmobile = function () {
            return _this.mobilePhone;
        };
        this.getnickname = function () {
            return _this.nickname;
        };
        this.name = name;
        this.Dob = Dob;
        this.educationMasters = Masters;
        this.educationbachelor = Bachelors;
        this.hometown = homeTown;
        this.livesIn = livesIn;
        this.highschool = highSchool;
        this.mobilePhone = mobilePhone;
        this.Gender = gender;
        this.Religion = Religion;
        this.relationshipStatus = RelationshipStatus;
        this.Quotes = quotes;
        this.nickname = nickname;
    }
    return facebook;
}());
var fb = new facebook("rahul", "21-nov-1993", "Birla Institute of Technology,Mesra", "Rajasthan Technical University", "Ranchi", "Bangalore", "DAV Publich school", 70799888, "Male", "Hindu", "complicated", "It is hard to fail, but it is worse never to have tried to succeed.", "Lucky");
console.log(fb.getDateofbirth());
console.log(fb.getQuotes());
console.log(fb.getRelationshipStatus());
console.log(fb.getGender());
console.log(fb.getEducationmaster());
console.log(fb.getHometown());
console.log(fb.getLivesIn());
console.log(fb.getmobile());
console.log(fb.getnickname());
