<img src="https://github.com/MariaMigrova/celebrity-match/assets/78366923/c8eae012-273c-4b75-b37a-a41d1a7d8098" width="180"/>

# CelebMatch Memory Game

Welcome to our hilariously addictive website where you can indulge in a memory card game like no other! Dive into our world of celebrity caricatures, where matching pairs isn't just a challenge—it's a laugh-out-loud experience. Test your memory skills as you pair up your favorite stars. It's the perfect 'toilet game' companion for those moments when you need a quick brain boost and a good chuckle. Get ready to match, laugh, and conquer your way to victory with our iconic celebrity images! Let the fun begin!

![image](https://github.com/MariaMigrova/celebrity-match/assets/78366923/10da6619-974b-4777-b73f-cb69b3e6728a)


# Getting Started

To view the website, simply click on the following link: [View the live project here](https://mariamigrova.github.io/celebrity-match/)

# User Experience (UX)

<a name="ux"></a>

## Site Goals
- Deliver an Entertaining Game Experience: Provide a fun and engaging platform for users to enjoy a memory card game featuring humorous celebrity caricatures.
- Intuitive User Interface: Create a simple, visually appealing, and user-friendly interface that is easy to navigate for players of all ages and skill levels.
- Ensure Fair Gameplay: Implement a game logic that ensures fair and unbiased pairing mechanics, providing equal opportunity for all players to succeed.
- Fast and Reliable Performance: Host the website on a stable and reliable platform (e.g., GitHub Pages) to ensure quick load times and the ability to handle high traffic volumes without interruptions.
- Mobile-Friendly Design: Ensure the website is fully responsive and performs well on various devices, including desktops, tablets, and smartphones.
- Personalized User Experience: Allow users to input their username, which is used throughout the game to personalize messages and interactions.

## User Stories
- As a user, I want to quickly understand how to play the game so that I can start enjoying it without needing to read lengthy instructions.
- As a user, I want to select and flip two cards easily to find matching pairs, enhancing my gaming experience.
- As a user, I want immediate visual feedback when I match or mismatch cards so that I can keep track of my progress during the game.
- As a user, I want to be able to restart the game easily to try for a better score or play multiple rounds without hassle.
- As a user, I want to experience fair gameplay where pairs are randomly placed and not predictable, making the game more challenging.
- As a user, I want the website to load quickly and respond to my actions immediately so that I can have an uninterrupted gaming experience.
- As a user, I want the game to look good and work smoothly on my smartphone, allowing me to play on the go without any issues.

## Colours Used

- **Background Colour:** `#873260`
<img src="https://github.com/MariaMigrova/celebrity-match/assets/78366923/8cea0ddf-26f5-41df-b750-ddb1b33bdf2c" alt="Initial Card Preview" style="margin-bottom: 20px;">

- **Game Area Colour:** `#000000`
- **Reset Button Colour:** `#000000`
<img src="https://github.com/MariaMigrova/celebrity-match/assets/78366923/0834145d-ac3d-42dd-aaf5-e1aa4dad5f34" alt="Initial Card Preview" style="margin-bottom: 20px;">

- **Reset Button Hover Colour:** `#8fe549`
<img src="https://github.com/MariaMigrova/celebrity-match/assets/78366923/662346b8-be76-43b4-bc9d-2464fe468cec" alt="Initial Card Preview" style="margin-bottom: 20px;">

- **Message Area Colour:** `#FFFFFF`
<img src="https://github.com/MariaMigrova/celebrity-match/assets/78366923/adea593b-5541-49ad-8a03-6a0d864dde8d" alt="Initial Card Preview" style="margin-bottom: 20px;">

- **Message Button Close Colour:** `#873260`
<img src="https://github.com/MariaMigrova/celebrity-match/assets/78366923/8cea0ddf-26f5-41df-b750-ddb1b33bdf2c" alt="Initial Card Preview" style="margin-bottom: 20px;">

- **Message Button Close Hover Colour:** `#622446`
<img src="https://github.com/MariaMigrova/celebrity-match/assets/78366923/95e5f340-5e5b-4f45-ad91-c9586e6459c8" alt="Initial Card Preview" style="margin-bottom: 20px;">

## Fonts Used

- **Font Used:** "Russo One", sans-serif;

## Wireframes
### Welcome Page
![image](https://github.com/MariaMigrova/celebrity-match/assets/78366923/2f01eb4d-698b-4617-a8b1-a63d8abfb20d)

### Game Page
![image](https://github.com/MariaMigrova/celebrity-match/assets/78366923/96c17eea-7a28-4199-9dc8-cbfdf73b3722)


# Features
### **Game Start and Card Display**
- **Home Page**: After loading the website, user is presented with a short information about the game, game rules and he can create his own username. After pressing Play Game, the game will start.
<img src="https://github.com/MariaMigrova/celebrity-match/assets/78366923/b23a73a0-b10c-41cd-9e66-2cc95427fc74" alt="home page" style="margin-bottom: 20px;">

- **Initial Card Preview**: At the start of the game, all cards are briefly shown face up for 0.5 seconds to give users a quick preview. This aids in initial memorization of the card positions.
<img src="https://github.com/MariaMigrova/celebrity-match/assets/78366923/5e2993cb-ebf3-4825-9e16-61d98d60fd8c" alt="Initial Card Preview" style="margin-bottom: 20px;">

### **Card Selection and Matching**
- **Two-Card Selection**: Users can select two cards at a time by clicking on them. The selected cards will be revealed to show their faces.
- **Correct Pairing**: If the selected cards match, they remain face up, signifying a successful match.
<img src="https://github.com/MariaMigrova/celebrity-match/assets/78366923/a5e0001a-8815-4f12-80b9-d4b836957c24" alt="Card Selection and Matching" style="margin-bottom: 20px;">

- **Incorrect Pairing**: If the selected cards do not match, they are turned face down again after a brief interval, allowing the user to try again.

### **Score Tracking and Feedback**
- **Wrong Turn Count**: Each incorrect pairing attempt increments the wrong turns score by 1, which is displayed on the screen for users to track their progress.
<img src="https://github.com/MariaMigrova/celebrity-match/assets/78366923/65b2a231-fadf-4f80-80f0-af6b3b9d9047" alt="Wrong Turn Count" style="margin-bottom: 20px;">

- **Popup Messages for Mistakes**: Users receive encouraging personalised popup messages after every 5, 10, 15, 20, and 25 wrong turns, providing feedback and motivation.
<img src="https://github.com/MariaMigrova/celebrity-match/assets/78366923/d4a40d0c-5609-4c26-9799-f989b2130f64" alt="Popup Messages for Mistakes" style="margin-bottom: 20px;">

### **Game Completion and Restart**
- **Game Completion Message**: When all pairs are correctly matched, a congratulatory popup message displays the user's final score, indicating the total number of wrong turns taken.
<img src="https://github.com/MariaMigrova/celebrity-match/assets/78366923/f61444f0-aa5c-4c29-ba26-46749e61df2d" alt="Game completion Message" style="margin-bottom: 20px;">

- **Play Again Option**: Users can click the "Go Again" button to reset the game to its initial state, allowing them to start a new game from scratch.
<img src="https://github.com/MariaMigrova/celebrity-match/assets/78366923/55d7745b-6f79-414f-9656-3bb6433c7a21" alt="Go agin" style="margin-bottom: 20px;">

### **Responsive Design**
- **Adaptive Layout**: The website is designed to be responsive, ensuring a smooth and visually appealing experience on various screen sizes, from desktops to mobile devices.
<img src="https://github.com/MariaMigrova/celebrity-match/assets/78366923/b93562cf-e341-4489-857e-0a6c8b96d0bc" alt="responsive design" style="margin-bottom: 20px;">

# Testing

## Cross-Browser Testing
- The website was tested on the latest versions of major web browsers to ensure compatibility and consistent performance. The following browsers were used:
- **Google Chrome**: The site was thoroughly tested in Google Chrome, ensuring that all features, animations, and interactive elements functioned as expected.
- **Microsoft Edge**: Testing was carried out to ensure smooth performance and visual consistency.
- **Safari**: The website was tested on Safari to verify proper rendering of elements and responsiveness.

## Device Testing
- The website was viewed on a variety of devices to check for responsiveness, layout integrity, and functionality across different screen sizes. The devices included:
- **Desktop (Windows & Mac)**: Ensured that all elements were properly aligned and interactive components functioned correctly.
- **Laptop (Windows & Mac)**: Tested for consistent performance and user experience.
- **Smartphones (iPhone SE, iPhone 12 Pro, iPhone 14 Pro Max, Samsung Galaxy S8+, Samsung Galaxy S20 Ultra)**: Verified that the site was fully responsive, images scaled appropriately, and navigation was user-friendly.
- **Tablets (iPad Mini, iPad Air, iPad Pro)**: Checked for responsive layout, ease of navigation, and functionality.

## Functionality Testing
- **Interactive Elements** : Confirmed the correct operation of buttons, forms, and other interactive components.
- Card Selection: Verified that cards flip correctly and that the matching logic was accurate.
- Popup Messages: Ensured that all popup messages appeared at the correct intervals and provided the intended feedback.
- ** Performance Testing**: Conducted tests to check load times and overall performance.
- Page Load Times: Ensured that all pages loaded quickly across different devices and browsers.
- Resource Optimization: Verified that images and other media were optimized for fast loading.

## User Experience Testing
- **Usability Testing**: The site was reviewed by friends and family to gather feedback on the user experience.
- Ease of Navigation: Ensured that users could easily navigate through the site and access different sections.
- Visual Appeal: Collected feedback on the overall look and feel of the site, making adjustments to improve the user interface.
- Interactive Features: Verified that users found interactive elements, such as the game and popups, engaging and easy to use.

## Accessibility Testing
- **Accessibility Features**: Ensured that the website is accessible to users with disabilities.
- Keyboard Navigation: Verified that all interactive elements could be accessed via keyboard.
- Alt Text for Images: Ensured that all images had descriptive alt text for screen readers.
- Contrast and Font Size: Checked that text contrast and font size met accessibility standards for readability.

## User Stories Testing
**As a user, I want to quickly understand how to play the game so that I can start enjoying it without needing to read lengthy instructions.**
- Users are promptly introduced to concise game rules upon launching, ensuring a seamless entry into gameplay.
  
**As a user, I want to select and flip two cards easily to find matching pairs, enhancing my gaming experience.**
- The card selection process is intuitive, allowing users to effortlessly flip cards and uncover matching pairs.
  
**As a user, I want immediate visual feedback when I match or mismatch cards so that I can keep track of my progress during the game.**
- Instant visual cues inform users of successful matches or mismatches, enabling real-time progress tracking.
  
**As a user, I want to be able to restart the game easily to try for a better score or play multiple rounds without hassle.**
- A straightforward "Go Again" button facilitates easy game restarts, empowering users to pursue higher scores or enjoy multiple rounds hassle-free.
  
**As a user, I want to experience fair gameplay where pairs are randomly placed and not predictable, making the game more challenging.**
- Each game session features randomly shuffled pairs, ensuring a dynamic and challenging experience with every playthrough.
  
**As a user, I want the website to load quickly and respond to my actions immediately so that I can have an uninterrupted gaming experience.**
- The game is optimized for swift loading times and responsive interactions, providing users with a seamless and uninterrupted gaming experience.

**As a user, I want the game to look good and work smoothly on my smartphone, allowing me to play on the go without any issues.**
- Designed for mobile responsiveness, the game offers a visually appealing interface and smooth performance on smartphones, ensuring enjoyable gameplay anytime, anywhere.

## W3C Validation
- The W3C Markup Validator and W3C CSS Validator Services were used to validate every page of the project to ensure there were no syntax errors in the project.

<img src="https://github.com/MariaMigrova/celebrity-match/assets/78366923/7b3e133f-6673-454e-9244-27cb95e0864e" alt="html validator" style="margin-bottom: 20px;">

- [W3C Markup Validator - Results for index.html](https://validator.w3.org/nu/?doc=https%3A%2F%2Fmariamigrova.github.io%2Fcelebrity-match%2F)

<img src="https://github.com/MariaMigrova/celebrity-match/assets/78366923/70421cb7-6a47-45a2-a58c-4ae32e5acfb1" alt="css validator" style="margin-bottom: 20px;">

- [W3C CSS Validator - Results for index.html](https://jigsaw.w3.org/css-validator/validator?uri=https%3A%2F%2Fmariamigrova.github.io%2Fcelebrity-match%2F&profile=css3svg&usermedium=all&warning=1&vextwarning=&lang=en)

## JavaScript JSHint
<img src="https://github.com/MariaMigrova/celebrity-match/assets/78366923/acf4da12-4eb6-409c-adb2-71ca46d8fb77" alt="jshint" style="margin-bottom: 20px;">

- After conducting thorough testing of our JavaScript code, we identified 2 variables that appear unused. It's important to note that these variables are called and utilized within our HTML code.

## Lighthouse Testing
### Desktop Version
<img src="https://github.com/MariaMigrova/celebrity-match/assets/78366923/93df3236-c95d-4795-9291-6d89fc597710" alt="desktop lighthouse" style="margin-bottom: 20px;">

### Mobile Version
<img src="https://github.com/MariaMigrova/celebrity-match/assets/78366923/93df3236-c95d-4795-9291-6d89fc597710" alt="mobile lighthouse" style="margin-bottom: 20px;">

# Deployment

## GitHub Pages Deployment

The website for **CelebMatch Memory Game** has been successfully deployed using GitHub Pages.

### Steps to Deploy:

1. **Navigate to GitHub Repository Settings:**
   - Go to your GitHub repository for CelebMatch Memory Game: [GitHub Repository](https://github.com/MariaMigrova/celebrity-match).
   - Click on the **Settings** tab located towards the top-right of the repository.

2. **Configure GitHub Pages:**
   - Scroll down the Settings page until you find the **Pages** section on the left sidebar.
   - Under the **Source** section, locate the drop-down menu.
   - Select **main branch** (or **master branch**, depending on your repository's default branch) from the dropdown.

3. **Save the Configuration:**
   - Once you've selected the main branch, GitHub Pages will automatically refresh the page, confirming the deployment settings.
   - A ribbon display will indicate the successful deployment status.

4. **Access the Live Site:**
   - Your CelebMatch Memory Game is now live and accessible at the following URL: [CelebMatch Memory Game Live Link](https://mariamigrova.github.io/celebrity-match/).

## Forking the GitHub Repository

By forking the GitHub Repository, you can create a copy of the original repository under your GitHub account. This allows you to view, experiment, and make changes without affecting the original project.

### Steps to Fork:

1. **Log in to GitHub:**
   - Log in to your GitHub account.

2. **Locate the Repository:**
   - Visit the [CelebMatch Memory Game GitHub Repository](https://github.com/MariaMigrova/celebrity-match).

3. **Fork the Repository:**
   - At the top-right of the repository page, above the **Settings** button, click on the **Fork** button.
   - This action will create a duplicate copy of the repository under your GitHub account.

## Making a Local Clone

To work on the CelebMatch Memory Game locally on your computer, you'll need to clone your forked repository using Git.

### Steps to Clone:

1. **Clone the Repository:**
   - On your forked repository page, click on the green **Code** button located above the file list.
   - Copy the HTTPS URL provided (e.g., `https://github.com/MariaMigrova/celebrity-match.git`).

2. **Open Git Bash (or Terminal):**
   - Open Git Bash (Windows) or Terminal (macOS/Linux).

3. **Clone the Repository:**
   - Change the current working directory to the location where you want the cloned directory to be saved.
   - Type the following command and paste the URL you copied:
     ```bash
     git clone https://github.com/MariaMigrova/celebrity-match.git
     ```
   - Press **Enter** to create your local clone.

4. **Access and Edit Locally:**
   - Once cloned, you can navigate into the cloned directory (`celebrity-match`) and start working locally on your project.
  
# Code

- HTML
- CSS
- JavaScript

# Credits

- Code Institute- Love Maths videos, tutorials and templates
- [Youtube tutorial for memory card game](https://www.youtube.com/watch?v=wz9jeI9M9hI&ab_channel=KennyYipCoding)
- [Youtube tutorial for pop up messages](https://www.youtube.com/watch?v=r_PL0K2fGkY&ab_channel=FlorinPop)
- ChatGPT
- Harry Dhillon (my mentor)

## Content
- The text for the Home page was taken from the Autor.
- The font and font style were taken from [Google Fonts - link for my fonts](https://fonts.google.com/specimen/DynaPuff?preview.text=Rock%20covers%20PAper.%20You%20Win!&preview.text_type=custom&query=os)

## Media

- The pictures were created using [Leonardo AI](https://app.leonardo.ai/auth/login?callbackUrl=%2F%3Fvia%3Dleocou%26gad_source%3D1%26gclid%3DCjwKCAjwm_SzBhAsEiwAXE2Cv59_shg_FeGb03SpXn4Yu9Z5D-WbABpFIhlbYdKiOKf12Yv5E1EprRoCQfUQAvD_BwE)






  




