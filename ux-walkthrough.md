# Project 4 UX Walkthrough 

## Project Idea 
Cadere is a dating app for people who actually have intentions of dating and getting to know people. Users will be able to like people they are interested in, but before they can message they can choose to answer 5 random questions and then message freely or answer 20 questions and decide whether or not they want to go on a date or unmatch with this person. If at the end of 20 questions they decide to go on a date and the other person agrees, there will be an option to say who do you want to choose where the date is and then whoever is choosing gets the option to pick one of their connections 5 favorite restaurants/bars in their area that they filled out on their profile when they signed up and then proposed 3 times of availability. There will also be a minimum character limit for the questions to make sure that users aren't just replying with one-word answers. 

## User Stories 
- User should be able to create a profile 
  - Profile Info: 
    - Photos 
    - Bio 
    - Job Title & Company 
    - School 
    - Vaccination Status 
    - What city they live in and where they were raised 
    - Gender 
    - Sexual Orientation 
    - Height 
    - Astrological Sign 
    - Interests and Hobbies
    - Top 5 Favorite Resturants In Their Area
    - Top 5 Favorite Bars In Their Area
    - Stances on: religion, drinking, smoking, kids, politics and religion  
    - Stretch: connect to Instagram and Spotify and profile prompts 
- Users should be able to update or delete their profile 
- User should be able to put in preferences/filters 
  - Who are they interested in 
  - Age 
  - Distance 
  - Stretch: filters based on stances and height 
- Users should be able to like other users based off of their profile
- Users should be able to receive matches 
- Users should be able to select whether or not they want to answer 5 random questions to message their match or answer 20 random questions to then go on a date with their match, each question will have a minimum text limit 
- If a user selects to answer 5 random questions with their match and then choose to start freely messaging them or unmatch them 
  - Stretch: if the matches exchange more then 30 messages then they have to answer 5 more questions to get to know each other more 
  - Stretch: they answer the 5 questions one at a time and then answer the next question after the other person has answered 
- If a user selects to answer 20 random questions with their match after they answer those questions they can choose to go on a date or unmatch that match 
  - Stretch: if they choose date, they can choose who chooses the location of the date, whoever chooses picks the place of the date based off of their matches top 5 favorite resturants/bars in their area and then proposes 3 times, the other match will then be able to accept a time and then they can message freely from there. 
    - Stretch Stretch: If none of the proposed times work, then the user will be able to propose a new time 
  - Stretch: if users go on a date, they can choose to rate that date, the other person won't be able to see it, it's just a way for a person to take notes and remember things they talked about 
- If user has completed all of the necessary steps to get to the messaging stage, they will be able to send new messages or update messages 
  - Stretch: Be able to delete messages, but they have to provide a reason 
- Users should be able to see all of their matches on the matches page 
- Stretch: Desktop notifications once their match has answered or when they get a new match

## UX Walkthrough 
- If user doesn't have a profile 
  - User creates a profile with their profile info: 
    - Photos 
    - Bio 
    - Job Title & Company 
    - School 
    - Vaccination Status 
    - What city they live in and where they were raised 
    - Gender 
    - Sexual Orientation 
    - Height 
    - Astrological Sign 
    - Interests and Hobbies
    - Top 5 Favorite Resturants In Their Area
    - Top 5 Favorite Bars In Their Area
    - Stances on: religion, drinking, smoking, kids, politics and religion  
    - Stretch: connect to Instagram and Spotify and profile prompts
  - Once user has created a profile, they will be directed to their potential matches page 
- If user has a profile and they need to login 
  - Login and then be directed to their potential matches page 
- Once a user is logged in 
  - Like people based off of their profile 
    - If they are a match right then in there, it will show after they like them 
    - If they match later, the match will show up on their matches page 
  - See their matches 
    - They can unmatch anyone 
    - If they choose to stay matched, they will start the question game 
  - If they choose 5 random questions 
    - They will answer the 5 questions and then when their match has answered the questions they will get a notification within the app and they can message freely 
  - If they choose 20 random questions 
    - They will answer the 5 questions and then when their match has answered the questions they will get a notification within the app and they can choose whether or not they want to go on a date or unmatch 
    * If stretch goals are not completed, then they will be able to message freely 

## Front-End React Components 
- Create Account 
- Login 
- Potential Matches 
- Matches and Messages 
- Click into specific matches they haven't messaged yet or played the question game with  
- Click into specific matches they have started messaging or played the question game with 

## Backend Models and Routes 
- Random Questions 
- Profiles 
- Matches 
- Messages 
- Question Game 