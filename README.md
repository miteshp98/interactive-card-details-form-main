# Frontend Mentor - Interactive card details form solution

This is a solution to the [Interactive card details form challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/interactive-card-details-form-XpS8cKZDWw). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)
- [Acknowledgments](#acknowledgments)

**Note: Delete this note and update the table of contents based on what sections you keep.**

## Overview

### The challenge

Users should be able to:

- Fill in the form and see the card details update in real-time
- Receive error messages when the form is submitted if:
  - Any input field is empty
  - The card number, expiry date, or CVC fields are in the wrong format
- View the optimal layout depending on their device's screen size
- See hover, active, and focus states for interactive elements on the page

### Screenshot

![](./screenshot.jpg)

Add a screenshot of your solution. The easiest way to do this is to use Firefox to view your project, right-click the page and select "Take a Screenshot". You can choose either a full-height screenshot or a cropped one based on how long the page is. If it's very long, it might be best to crop it.

Alternatively, you can use a tool like [FireShot](https://getfireshot.com/) to take the screenshot. FireShot has a free option, so you don't need to purchase it.

Then crop/optimize/edit your image however you like, add it to your project, and update the file path in the image above.

**Note: Delete this note and the paragraphs above when you add your screenshot. If you prefer not to add a screenshot, feel free to remove this entire section.**

### Links

- Solution URL: [Add solution URL here](https://your-solution-url.com)
- Live Site URL: [Add live site URL here](https://your-live-site-url.com)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid

**Note: These are just examples. Delete this note and replace the list above with your own choices**

### What I learned

Throughout the development of this project, I've gained valuable insights and skills in web development. Here's a summary of what I've learned:

Event Handling: I learned how to handle various events such as input, blur, and click events to create interactive user experiences. This allowed me to validate user inputs in real-time and provide feedback accordingly.

Form Validation: Implementing form validation using regular expressions (regex) enabled me to ensure that user inputs met specific criteria, such as valid names, card numbers, expiry dates, and CVC numbers. This enhanced the security and reliability of the application.

Logical Approach: I adopted a logical and structured approach to solve problems, breaking down tasks into smaller steps and addressing them systematically. This approach improved code readability, maintainability, and overall project efficiency.

Self-Reflection: Integrating a reflection prompt like this one allowed me to consolidate my learning and identify areas for further improvement. Reflecting on my progress helps me track my development and set goals for future projects.

Overall, working on this project has been a valuable learning experience, allowing me to enhance my web development skills and gain confidence in building interactive web applications.

```js
//check card Number Include only numbers
function checkCardNumberValid() {
  let userCardNumber = cardNumberInput.value;
  const numberRegex = /[a-zA-Z!-/:-@[-`{-~]/;

  if (userCardNumber === "") {
    showError(1, "can't be blank");
    hideErrorAfterSometime(1);
  } else if (numberRegex.test(userCardNumber)) {
    showError(1, "wront format,numbers only");
    hideErrorAfterSometime(1);
    return false;
  } else {
    formatInput();
    hideError(1);
    cardNumberDisplay.textContent = cardNumberInput.value;
    return true;
  }
}

//Add Space After 4 character's
function formatInput() {
  let cardNum = cardNumberInput.value.replace(/\D/g, "");

  let formatedValue = "";

  for (let i = 0; i < cardNum.length; i++) {
    if (i % 4 == 0 && i > 0) {
      formatedValue += " ";
    }
    formatedValue += cardNum[i];
  }
  cardNumberInput.value = formatedValue;
}
```

If you want more help with writing markdown, we'd recommend checking out [The Markdown Guide](https://www.markdownguide.org/) to learn more.

**Note: Delete this note and the content within this section and replace with your own learnings.**

### Continued development

Use this section to outline areas that you want to continue focusing on in future projects. These could be concepts you're still not completely comfortable with or techniques you found useful that you want to refine and perfect.

**Note: Delete this note and the content within this section and replace with your own plans for continued development.**

### Useful resources

- [Udemy Webdevlopment](https://www.udemy.com/share/101W9C3@2s1lShiGH32a3OJHMYullps9bvMmvxO_kykXK5ZGloqkGQDHawnryvbZtrMeQ8y81A==/)

**Note: Delete this note and replace the list above with resources that helped you during the challenge. These could come in handy for anyone viewing your solution or for yourself when you look back on this project in the future.**

## Author

- Website - [Mitesh Panchal](https://miteshp98.github.io/portfolio-website/)
- Frontend Mentor - [@miteshp98](https://www.frontendmentor.io/profile/miteshp98)
- Linkedin - [@Mitesh Panchal](https://www.linkedin.com/in/mitesh-panchal-356558126/)

**Note: Delete this note and add/remove/edit lines above based on what links you'd like to share.**

## Acknowledgments

Thanks to the challenge provider for creating this opportunity to apply and improve my frontend development skills.

**Note: Delete this note and edit this section's content as necessary. If you completed this challenge by yourself, feel free to delete this section entirely.**
