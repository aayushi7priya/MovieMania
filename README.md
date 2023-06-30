deployed link : https://movie-mania-coral.vercel.app/

TOOLS USED:
ReacJS, chakraUI

Description:
A multi-page website consisting of sections(Home, footer, header, a side bar, videos, login and signup). This website is fully a frontend project and doesn't store data by users.

Home page:
Consists of two sections - a landing page and a about us page . Have made a carousel using react-responsive-carousel for landing page and in about section, it's normal styling.

Header:
Header consists of two things - one icon to switch between light mode and dark mode. another icon in leftmost to open an overlay of sidebar.
sidebar is made using Drawer from chakraui.
In sidebar, multiple buttons are provided like videos, login , signup which when clicked redirects to the corresponding route.

Footer:
footer consists of three columns. One for social media, one is provided for email input but as of current, it doesn't fetch data from user.

Videos:
three sections are made, one for video , another for list of video, and one for showcasing description and tile corresponding to video played.
I have created three arrays named desciption in which i have stored data for description for different movie, videoarray to store links of video to be played, and another for title of movies.

I have used useState to change the video as well as desciption to be showed when a button corresponding to a specific movie is clicked.
