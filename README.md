# PWA Foodie App

A product finder by scanning or searching for a barcode.

## 📋 Table of Contents

* [Concept](https://github.com/dannyfrelink/pwa-foodie-app#-concept)
* [Wishlist](https://github.com/dannyfrelink/pwa-foodie-app#-wishlist)
* [Installation](https://github.com/dannyfrelink/pwa-foodie-app#-installation)
* [License](https://github.com/dannyfrelink/pwa-foodie-app#-license)

## 💡 Concept

For this project, I was meant to recreate my previously made website into a server-side variant. Therefore, you can find all the explanation of the concept in the Readme of my other repo [Foodie-app](https://github.com/dannyfrelink/foodie-app#the-foodie-app).

This time, I was able to work with server side routing, so there were lots of thing to refactor. I tried to keep the layout of my application as much the same as possible. I also created an offline page with Service Workers to display if you're browsing my website offline.

Landing page               |  Scanner page             | Product page
:-------------------------:|:-------------------------:|:-------------------------:
![Landing page](https://github.com/dannyfrelink/pwa-foodie-app/blob/main/images_readme/home.png)  |  ![Scanner page](https://github.com/dannyfrelink/pwa-foodie-app/blob/main/images_readme/scanner.png)  |  ![Product page](https://github.com/dannyfrelink/pwa-foodie-app/blob/main/images_readme/product.png)

Error/Search page          |  Offline page             
:-------------------------:|:-------------------------:
![Error/Search page](https://github.com/dannyfrelink/pwa-foodie-app/blob/main/images_readme/search1.png)  |  ![Offline page](https://github.com/dannyfrelink/pwa-foodie-app/blob/main/images_readme/offline.png)

![Activity Diagram](https://github.com/dannyfrelink/pwa-foodie-app/blob/main/images_readme/activity-diagram.jpg)

## 📝 Wishlist

Since, there was a really short period to work on this project, there are a couple things I would've liked to add. First, my idea was to save the searched products in the cache of the browser. When searching offline, I wanted to give the user the opportunity to browse through the cached products. Sadly, there was little time to complete this. Secondly, I wanted to create a propper empty state with a save function for products. This also would have taken to much time, so sadly I wasn't able to complete this.

## 🔧 Installation

If you want to use my code for your own, you can clone the repository as a local file:

```
    git clone https://github.com/dannyfrelink/pwa-foodie-app
```

You then need to install all NPM packages:

```
    npm install
```

After this, you can start building the files:

```
    npm run build
```

To start the project and watch any changes in the files, you can use these lines:

```
    npm start
    npm run watch
```

## 📄 License

I have used the [MIT License](https://github.com/dannyfrelink/pwa-foodie-app/blob/main/LICENSE) for this repository.