# Mindful Meditation website

A static HTML, CSS and JavaScript website ready to publish with GitHub Pages.

## Files
- `index.html` — website structure and content
- `style.css` — layout, colours and responsive styling
- `script.js` — login/sign-up demo modal interactions

## Publish using GitHub Pages
1. Sign in to GitHub and create a **new public repository** (for example, `mindful-meditation`).
2. Upload `index.html`, `style.css`, `script.js` and this `README.md` to the **root** of the repository.
3. Open the repository's **Settings → Pages**.
4. Under **Build and deployment**, choose **Deploy from a branch**.
5. Select branch **main** and folder **/(root)**, then click **Save**.
6. Wait a few minutes. GitHub will show your website address in the Pages section. It will usually look like `https://YOUR-USERNAME.github.io/mindful-meditation/`.

## Important
This is currently a front-end demo. The login/sign-up form only displays a message; it does not create accounts, store passwords, take payments, book classes, or send form data. Do not collect real passwords with this demo. To launch those features, connect a secure authentication/database service and a payment provider, and configure them before accepting customers.

The photos are loaded from Unsplash, so visitors need an internet connection to see them.


## Added sections
- Reviews section (sample placeholder quotes; replace with genuine customer feedback).
- Instructor cards (placeholder profiles; replace with real instructor details and photos).
- Support form (front-end demo only; connect it to a form service or backend to receive messages).
- Floating FAQ assistant (scripted demo, not a live AI model).

A real AI chatbot must call an AI service from a secure server-side backend. Do not put private API keys in `script.js` or any other public GitHub file.
