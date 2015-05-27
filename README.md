# Project Overview

This project is a simple news feed application used to demonstrate automated “red/green” test scripting as outlined in lesson 6 of the Udacity front-end nano-degree program.

It uses [jasmine v2.2.0] http://jasmine.github.io/2.2/introduction.html to develop the automated test scripts as required by the Udacity project 6 rubric.  I added a few additional scripts in an effort to further expand my learning in this area.  I completed all steps in the following section – 14 original requirements, plus 3 additional steps/tests.

# Steps Required to Run Application

To begin the application load the index.html page.  Once loaded the header displays a menu icon on the left and the default news feed “Udacity Blog” on the right.  The news feed articles are displayed in the body of the page.  Navigate to any topic by clicking on the title for the topic you wish to review.  To visit the other news feeds click on the menu button and select the desired feed.  The articles for the new feed will be displayed in the body of the new page and are accessed by clicking on the title of the desired article.  When you are done reviewing the selected news feed article simply use the browser’s “back” button to return to the news feed application. All of the news feed pages show the Jasmine test results at the bottom of the page.  

# How will I complete this project?

1. Download the [required project assets](http://github.com/udacity/frontend-nanodegree-feedreader).
2. Review the functionality of the application within your browser.
3. Explore the application's HTML (*./index.html*), CSS (*./css/style.css*) and JavaScript (*./js/app.js*) to gain an understanding of how it works.
4. Explore the Jasmine spec file in *./jasmine/spec/feedreader.js*
5. Edit the allFeeds variable in *./js/app.js* to make the provided test fail and see how Jasmine visualizes this failure in your application.
6. Return the allFeeds variable to a passing state.
7. Write a test that loops through each feed in the allFeeds object and ensures it has a URL defined and that the URL is not empty.
8. Write a test that loops through each feed in the allFeeds object and ensures it has a name defined and that the name is not empty.
9. Write a new test suite named "The menu".
10. Write a test that ensures the menu element is hidden by default. You'll have to analyze the HTML and the CSS to determine how we're performing the hiding/showing of the menu element.
11. Write a test that ensures the menu changes visibility when the menu icon is clicked. This test should have two expectations: does the menu display when clicked and does it hide when clicked again.
12. Write a test that ensures when the loadFeed function is called and completes its work, there is at least a single .entry element within the .feed container. Remember, loadFeed() is asynchronous so this test wil require the use of Jasmine's beforeEach and asynchronous done() function.
13. Write a test that ensures when a new feed is loaded by the loadFeed function that the content actually changes. Remember, loadFeed() is asynchronous.
14. When complete - all of your tests should pass.
15. Wrote a test that ensures all feed category URLs exactly match the items listed in the feed menu.
16. Wrote a test that ensures all feed category names exactly match the items listed in the feed menu.
17. Wrote a test that ensure that the initial loadFeed() entry is not null.

