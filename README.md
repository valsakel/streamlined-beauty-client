Streamlined Beauty App
============================
This MVP is designed for people that are looking for freelance professionals that perform at-home beauty services in metro Atlanta. 
As well as for freelancers that wish to advertise their services to grow their own business.

<img src="src/images/responsive-design.png" alt="app screenshot" width="40%">

You can view it live [here](https://streamlinedbeauty.netlify.com/)

### Motivation
It was a two-week project for Engineering Immersion program at [Thinkful](https://www.thinkful.com/bootcamp/atlanta/).
The goal was to develop a full-stack project, creating a frontend using React and Redux which communicates with a Node backend.

## Getting Started
These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. 
See deployment for notes on how to deploy the project on a live system.
#### Installation
* Install [Node](https://nodejs.org/en/), which comes with [NPM](https://www.npmjs.com/)
* Install Netlify `npm install -g netlify-cli`
* Navigate to desired directory and run ```git clone https://github.com/Sakela17/streamlined-beauty-app.git``` to clone this repo
* `cd` into the project's folder and run `npm install` to install dependencies
* Run `npm start` to run the app in the dev mode
* Open [http://localhost:3000](http://localhost:3000) to view it in the browser
* To set up the server, please refer to this [readme](https://github.com/Sakela17/streamlined-beauty-app-api) for the instructions
* Proceed to deployment steps once the server has been deployed
#### Deploy on Netlify
* Create a production build by running ```REACT_APP_API_BASE_URL="https://MY-APP-.herokuapp.com" npm run build```
* Create a Netlify app ```netlify create```. This will automatically add a file called ```.netlify``` to the root dir
* Create ```.gitignore``` file and add ```.netlify``` and ```/node_modules``` 
* Deploy the app by running ```netlify deploy -p ./build -t <YOUR_ACCESS_TOKEN> -s <YOUR_SITE_ID>```  
  - to get ```<YOUR_ACCESS_TOKEN>``` run ```cat ~/.netlify/config```  
  - get ```<YOUR_SITE_ID>``` (without quotes) from ```.netlify``` file in the root dir

## Built With
 
 [create-react-app](https://github.com/facebook/create-react-app)
 
 [React](https://reactjs.org/)
 
 [Redux](https://redux.js.org/)
 
 [jwt-decode](https://www.npmjs.com/package/jwt-decode)