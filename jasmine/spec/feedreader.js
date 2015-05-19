/* feedreader.js
 *
 * This is the spec file that Jasmine will read and contains
 * all of the tests that will be run against your application.
 */

/* We're placing all of our tests within the $() function,
 * since some of these tests may require DOM elements. We want
 * to ensure they don't run until the DOM is ready.
 */
$(function() {
    /* This is our first test suite - a test suite just contains
    * a related set of tests. This suite is all about the RSS
    * feeds definitions, the allFeeds variable in our application.
    */
    describe('RSS Feeds', function() {
        /* This is our first test - it tests to make sure that the
         * allFeeds variable has been defined and that it is not
         * empty. Experiment with this before you get started on
         * the rest of this project. What happens when you change
         * allFeeds in app.js to be an empty array and refresh the
         * page?
         */
    // describe('', function(){});

        it('The RSS feeds array is defined and is not empty', function() {
            expect(allFeeds).toBeDefined();
            expect(allFeeds.length).not.toBe(0);
        });


        /* TODO: Write a test that loops through each feed
         * in the allFeeds object and ensures it has a URL defined
         * and that the URL is not empty. Added code to verify
         * that each menu item in the allFeeds array has the 
         * correct URL.
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

        /* TODO: Write a test that loops through each feed
         * in the allFeeds object and ensures it has a name defined
         * and that the name is not empty.  Added code to verify
         * that each menu item in the allFeeds array has the 
         * correct name.
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


    /* TODO: Write a new test suite named "The Menu" */

    describe('The Menu', function() {

        /* TODO: Write a test that ensures the menu element is
         * hidden by default. You'll have to analyze the HTML and
         * the CSS to determine how we're performing the
         * hiding/showing of the menu element.
         */

        it('The menu is hidden by default', function() {
            expect($('body').attr("class")).toBe("menu-hidden");
        });

      
         /* TODO: Write a test that ensures the menu changes
          * visibility when the menu icon is clicked. This test
          * should have two expectations: does the menu display when
          * clicked and does it hide when clicked again.
          */

        it('The menu toggles visibility when clicked on and off', function() {
            $(".menu-icon-link").trigger("click");
            expect($('body').attr("class")).not.toBe("menu-hidden");

            $(".menu-icon-link").trigger("click");
            expect($('body').attr("class")).toBe("menu-hidden");
        });

    });  

    /* TODO: Write a new test suite named "Initial Entries" */

    describe('Initial Entries', function() {

        /* TODO: Write a test that ensures when the loadFeed
         * function is called and completes its work, there is at least
         * a single .entry element within the .feed container.
         * Remember, loadFeed() is asynchronous so this test wil require
         * the use of Jasmine's beforeEach and asynchronous done() function.
         */
        beforeEach(function(done) {
            loadFeed(0, done);
        });

        it('There is at least one article loaded within  the feed container' + 
           ' and the container includes a link to the article', function(done) {
            expect($(".feed").find(".entry").length).toBeGreaterThan(0);
            expect($(".tpl-feed-list-item")).not.toBe(null);
            done();
        });

    });

    /* TODO: Write a new test suite named "New Feed Selection" */

    describe('New Feed Selection', function() {

        /* TODO: Write a test that ensures when a new feed is loaded
         * by the loadFeed function that the content actually changes.
         * Remember, loadFeed() is asynchronous.
         */

        var priorFeed = $(".feed").html();

        beforeEach(function(done) {
            loadFeed(0, done);
        });

        it('The next feed shows when switching between feeds', function(done) {
            var nextFeed = $(".feed").html();
            expect(nextFeed).not.toBe(priorFeed);
            done();
        });

    });

}());
