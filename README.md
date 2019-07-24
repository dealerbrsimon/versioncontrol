# versioncontrol
interview with Antoine

Bonjour Antoine ! Voici quelques fichiers dont je suis le principal auteur pour un de mes projets en React. J'ai pris soin de laisser plusieurs commentaires, si jamais tu as des questions n'hésites pas à me contacter. J'étais très nerveux en entrevue et je peux t'expliquer avec plus de détails ce qu'est une architecture REST si jamais l'occasion se présente ou encore les autres verbes HTTP. Même chose pour le lifecycle,c'est tout simplement que parfois dans mes différents projets on utilise d'autres termes et métaphores plus parlantes et que bien que je prennes toujours le temps de bien expliquer avec les termes comme ils sont utilisés en industrie, je force les étudiants à créer leurs propres métaphores et que les membres de l'équipe en question emploient des référents certes le plus univoque possible mais surtout que tout le monde comprenne bien. 

Voici un apercu de la présentation originale : 

Link to the presentation for minimal product

We could not use CSS libraries like bootstrap nor import basic components like a navigation bar so everything had to 
be done mostly from scratch. One of the team mate wanted to use te twilio API, the react map API and DialogFlow API to abstract some complexity but we really wanted to make everything mostly from scratch to better understand the fundementals. 

https://docs.google.com/presentation/d/1F36_15kv11tN-8lU4xrdXbSX-c4nDW5WoWkjDcjAjNM/edit#slide=id.g37dceb10d8_0_20

I was responsible for the workflow of the team and division of tasks. The main components I worked on where the navigation bar, user-admin interface
basic state management across the application, general visual design choices, admin-user interface and finnaly a clippy style 
helper interface for the admin-user

The admin user helper was more of a challenge then a necessity but I really wanted to mess around with NLP and Recurrent Neural
Nets. During developpement he had multiple names refering 
to sci-fi AI's ( Ultron, sky_net ... ) 

It was first implemented in Python because of the massive community and documentation for RNN,LSTM implementations and we did not have the time to fully implement it in React but It was not a major feature and is functionallity did not depend on the 
rest of the app since he was interacting with the database.

Alot of time was spent to animate him with CSS to sharpen my understanding of CSS.
