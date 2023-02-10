# Learning to communicate with your friendly local server
## With Node, Express, and Git.

First, let's download Node! https://nodejs.dev/en/ 

<img width="1196" alt="Screenshot 2023-02-10 at 2 50 16 PM" src="https://user-images.githubusercontent.com/92462575/218196757-0cc37418-7a99-4beb-ba76-6d07fc04c5cf.png">

Ensure that Git is downloaded as well. https://gitforwindows.org/

<img width="1193" alt="Screenshot 2023-02-10 at 2 51 44 PM" src="https://user-images.githubusercontent.com/92462575/218196915-ea602b8d-19cc-4940-869b-7ddc4b85bd0d.png">

Now that we have Node and Git installed, let's create a new working directory.


1. Open Visual Studio Code 
2. Open Git Bash in new terminal
3. cd Desktop (or any directory you wish)
4. mkdir Example (This will create a new folder directory named 'Example')
5. Let's add some files to that directory!
7. touch app.js
8. Ensure you are working in this new directory 'Example' (cd Example)
9. Now, let's ensure we have Express installed
10. npm i express
11. Upon installing Express, a package-lock.json file and package.json file will be created in your directory.

<img width="1112" alt="Screenshot 2023-02-10 at 3 17 15 PM" src="https://user-images.githubusercontent.com/92462575/218199588-9c0e0c86-c74a-496e-a1a4-7d843d87bd3f.png">

12. Now let's set up our localhost server
13. Add this code to app.js <--file codeexample-->
14. Let's get this bad boy running
15. node app.js
16. Upon running the above command, your terminal should tell you that it's listening in on your port <--file runningport-->
17. Go to Chrome (or a web browser of your choosing) and type "localhost:3000" in the browser. 
18. If all went well, you should see your message! <--file localhostrun-->

Congrats on now knowing how to build and test your web applications on a local server!
