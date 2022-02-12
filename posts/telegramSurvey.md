---
title: 'Telegram Survey Bot'
date: '2021-03-28'
---

The target of this project was to create a web app that makes a survey and post it as a telegram bot, the survey must have ramifications, this means that certain answer can produce a question according that answer.

The first thing that I did was sketchs of the looks and components of the survey. One thing that cause me a lot of conflict was how I will render and process the ramifications, one initial idea was to produce a notion style page and each tab was a new branch or answer.

I then continue with the design of the data base, I went for a relational db in sqlite, in Wich I put the question, the type, answers and the id of the father. 

Then I went to coding so I break the project in these pieces:

- Visuals
- Process survey
- Save survey
- Make bot

The visuals and interaction were made in react, I did a question and a survey component with the questions in a state var, everything was fine until I was thinking in the deepness of the questions, because I also defined the answer in the state of each question, so this was just very wrong. All I had to do was raise the sate of the answers, so I define a tree wich had the questions and answers, and then reder the tree as a survey.

After finishing the rendering of the survey, I had only one problem, the survey was backwards, and the answer to this problem was reverse the tree, something I never imagine doing in a real project.

In that moment I had the survey in a tree but I had to break it to store in the db, so then I could recompose the tree to do the telegram bot.

Sruvey:
![layout](/images/posts/survey28mar.png)

The telegram bot:
![layout](/images/posts/telebot.jpeg)

This little and fun project had his challenges, but it was very rewarding seeing every part working together.

If you want to check the survey maker go to [https://encuestas-front.vercel.app/](https://encuestas-front.vercel.app/), write the survey, publish and search fo hal21bot in telegram.



