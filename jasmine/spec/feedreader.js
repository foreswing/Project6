/* feedreader.js
*
*  This is the spec file that Jasmine will read and contains
*  all of the tests that will be run against your application.
*/

/* We're placing all of our tests within the $() function,
*  since some of these tests may require DOM elements. We want
*  to ensure they don't run until the DOM is ready.
*/

$(function() {

/* This is our first test suite used to define our tests 
*  related to our RSS news feeds.
*/

    describe('RSS Feeds', function() {

/* This test is used to make sure that the
*  allFeeds variable has been defined and that it is not
*  empty. 
*/

        it('The RSS feeds array is defined and is not empty', function() {
            expect(allFeeds).toBeDefined();
            expect(allFeeds.length).not.toBe(0);
        });

/* This test is used to make sure that the allFeeds URL's are
*  defined, are not empty and do contain the expected values.
*/

        it("The URL's are defined, are not empty and" +
           ' contain our expected values', function() {
            allFeeds.forEach(function(feed) {
                expect(feed.url).toBeDefined();
                expect(feed.url.length).not.toBe(0);
            });
            expect(allFeeds[0].url).toContain('http://blog.udacity.com/feeds/posts/default?alt=rss');
            expect(allFeeds[1].url).toContain('http://css-tricks.com/feed');
            expect(allFeeds[2].url).toContain('http://feeds.feedburner.com/html5rocks');
            expect(allFeeds[3].url).toContain('http://feeds.feedburner.com/udacity-linear-digressions');

        });

/* This test is used to make sure that the article names are
*  defined, are not empty and do contain the expected values.
*/

        it('The article names are defined, are not empty and' +
           ' contain our expected values', function() {
            allFeeds.forEach(function(feed) {
                expect(feed.name).toBeDefined();
                expect(feed.name.length).not.toBe(0);
            });
            expect(allFeeds[0].name).toContain('Udacity Blog');
            expect(allFeeds[1].name).toContain('CSS Tricks');
            expect(allFeeds[2].name).toContain('HTML5 Rocks');
            expect(allFeeds[3].name).toContain('Linear Digressions');        
        });

    });

/* This is our second test suite used to define our tests 
*  related to our RSS news feed menu.
*/

    describe('The Menu', function() {

/* This test is used to make sure that the menu is hidden by default.
*/

        it('The menu is hidden by default', function() {
            expect($('body').attr("class")).toBe("menu-hidden");
        });

/* This test is used to make sure that the menu visibility toggles
*  when clicked.
*/

        it('The menu toggles visibility when clicked on and off', function() {
            $(".menu-icon-link").trigger("click");
            expect($('body').attr("class")).not.toBe("menu-hidden");

            $(".menu-icon-link").trigger("click");
            expect($('body').attr("class")).toBe("menu-hidden");
        });

    });

/* This is our third test suite used to define our test 
*  related to the RSS news feed articles.
*/

    describe('Initial Entries', function() {

        beforeEach(function(done) {
            loadFeed(0, done);
        });

/* This test is used to make sure that at least one article is loaded
*  in the article container and that the container includes a link to
*  the article.
*/

        it('There is at least one article loaded within the feed container' + 
           ' and the container includes a link to the article', function(done) {
            expect($(".feed").find(".entry").length).toBeGreaterThan(0);
            expect($(".tpl-feed-list-item")).not.toBe(null);
            done();
        });

    });

/* This is our fourth test suite used to define our test 
*  related to switching between news feeds.
*/

    describe('New Feed Selection', function() {

        var priorFeed = $(".feed").html();

        beforeEach(function(done) {
            loadFeed(0, done);
        });

/* This test is used to make sure the next news feed is displayed 
*  when switching between news feeds.
*/

        it('The next feed shows when switching between feeds', function(done) {
            var nextFeed = $(".feed").html();
            expect(nextFeed).not.toBe(priorFeed);
            done();
        });

    });

}());