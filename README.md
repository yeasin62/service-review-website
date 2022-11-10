


11. On the "Add service" page(also a private route), you can **add a service** and that service will be shown on the home page. When the service is added successfully, a toast/modal with a message will pop up to inform the user.


### Bonus Requirements
1. Your Readme file for the client-side repo should have details about your project's features and functionalities in bullet points(at least five bullet points) and your live link. Adding a meaningful readme file for the server-side repo is optional.
2. At least 15 meaningful GitHub commits for the client-side and 8 meaningful commits for the server-side repository.
3. Your code should be clean and organized. Comments should be added where necessary
1. The **title of the page** will change with the page you visit. It should not be the same for every route
2. Add a meaningful favicon
3. Add a **spinner** on the services page, and the login and register page. If data is loading, a spinner will be displayed.
4. use the **Environment** Environment variable on both the client (firebase config) and server-side (mongodb credentials, Access token secret). Use .gitignore file on the server side.
5. Implement the basic version of the **JWT**  **token** for email/password-based authentication. Upon login, you will create a jwt token and store it on the client side, and for the "My reviews" page, you will send the token and verify the user. Implementing 401 and 403 is optional. 
6. In the "My reviews" page, clicking the **edit review** button/icon shows that review in a modal/in a new route and lets the user update it.
7.  **Simple challenge** In the service details page, **sort the reviews in a descending order** by inserting time(you have to keep the inserting time when you add a review, you can do it with the Date object, or you can explore MongoDB documentation). You will have to implement this code on the server side.
### Optional
1. Use pagination on the services page.
3. Show the rating with star icons in a user review
4. 2. Try to use a better-looking confirmation dialogue other than the browser's default confirm.
3. On the `add a service` page, try to implement direct image upload from your computer. This image can be hosted on a third party image hosting like imgbb or directly to mongodb
4. Add some animation while applicable.
5. Please Use icons whenever applicable and use fonts (google fonts)
6. Make the footer a little more realistic with the copyright symbol and year.
7. Optimize your images
8. Add something extra of your own. This will help you in the future.
### Additional information:
1. You can use vanilla CSS, any CSS library, framework, or component library you want.
4. If possible, try another component library other than daisyUI
5. If needed, you can mix a CSS framework with a component library
6. You may use `react hook form`, basic html form or any library for authentication
7. Store JWT token in http only cookie (alternatively, feel free to store it in the Local storage for this assignment)
9. Try to host your site on Firebase (Netlify host will need extra configuration)
10. Try to host the server on Vercel
### What to submit 
1. Your client-side code GitHub repository
2. Your server-side code GitHub repository
3. Your live website link
Have FUN! Have Patience. 