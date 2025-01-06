namaste react=>in this i am writing the react in the js language
this code is not ready to for production you need to 
npm =doesnt have a full form it manaes packages but doesnt stand for node package manager
it is standard repo for all the packages ,any packages you need you will have to download it from the npm
package.json is a config for npm
after this we can add dependencies into our projects
the most imp package in our project: buddler
our whole code have to be bundled with different files to be pushed into production
parcel is a buddler which we will use in our app which we will download from npm 
there are 2 types of dependencies
dev depencies=>it is required for a development phase.denoted by(-D)
normal depeendencies=> it used when the code is ready for production.dependency is a library that a project needs to function effectively
peer dependency=> specifies that our package is compatible with a particular version of an npm package.
tilde(~)=if a minor version is there for the same depenedencies then it will use the upgraded minor version. eg= from 2.8.7=>2.8.8
carat(^)=if a major version is there for the same depenedencies then it will use the upgraded major version.eg= 2.8.7=>3.0
always it is safer to use the carat int the version
package.json keeps a track of what version of that package is used in our system
package lock .json keeps a track of exact version that is being installed
in package lock json integerity = basically just a hash which basiacally to verfiy that the thing in my machine is same as the thing which is being deployed into the production
node modules contain all the code that we fetched from npm.kind of like database.actually contain the actual data of our dependencies 
then there should only be parcel dependency folder but there more than those because parcel as a project need other dependencies that need other dependencies.its called transitive dependencies
node modules folders conatin other package.json, package-lock.json
we shouldnot put nodee_modeules into github . we have to do this by putting the nbame of node_modeules in .gitignore that should  ignore the files that we have to put in the github
if you have package.json i can recraete my node modules by just doing npm install in the terminal
we are building our app through parcel"npx parcel <source file  of our project, the html file >
npx parcel NR1.html
Server running at http://localhost:1234
✨ Built in 535ms
npx means executing a package
cdn links is not a good way
fetching from cdn is a costly operation, in urls we specify a version but we cannot update it regularly in the code
now we have to install react
after installing we have to import React and ReactDOM form raect and react-dom
import React from "react";
import ReactDOM from  "react-dom";
but this will still give an error: @parcel/transformer-js: Browser scripts cannot have imports or exports.
basically we are saying script inhtml file then we are importing react making it a react file e can change the html thing by defining the type of the script modeule
this error was showing when i was running the file
TypeError: (0 , _reactDomDefault.default).createRoot is not a function
can fix it just by :import { createRoot } from 'react-dom/client'; 
we are live servering it by doing HMR(hot module replacement) by using a file watching algorithm
it is fast because it is catchingn
it also does minification,bundling,compressing,image optimization
we build the production build by npx parcel build NR1.html but we will get an error because we give the entry point NR1.html but the main in package.json is set to NR1.js 
so we have to remove main form package.json
that will build and put it in dist folder and teh code of webpage comes from dist folder
dist,.parcel-cache also should be put in gitignore
we can also make a borwserlist to  make it compatible for older versions of barowsers in package.json
"browserslist":[
    "last 2 chrome version",
    "last 2 firefox version"
  ]
  it can also be used to make it comaptible for 99.5% in usa
  we can make scripts for making it start easily in package.json then we can npm run start in terminal or npm start
  we can do the same for building it "build": "parcel build NR1.html", then npm run buld but cant do npm build
  it ws difficult to weite these many things so they inveneted jsx because it understands ecma scripts 6
  const jsxHeading=<h1>react in jsx</h1>.js engine will not understand this code.parcel ios doing the job
  obj of jsxHeading and obj of heading are same obj
it is not a valid js because jsx is not build 
jsx is transpiled before it reaches js engine,in parcel the transpiling is done by babel
transpiled = converting it to the code that browser will understand or react will understand
in jsx class=>className
if the line of code is of many lines then we have to wrap in using ()
everything in react is a component=react components
1)class based react components=old way 2)functional components= new way ,most of times
function which is returning a react cmponent=>functional component
the functional component name is given in capital letters
const HeadingComponent= ()=>{
return <h1>nr</h1>
 }
 can also render a functional component in another
 can use a normal function also but then you hve to return it=component composition
 // const HeadingComponent = function() {
//   return (
//   <div>
//     <Title />
//     <h1>nr functional component</h1>
//     <h2>bolo balle balle</h2>
//   </div>
// )
// };
you can write js code in { } and it will refelrct in the web browser
{10000000000000} 
{100+200}=300
{console.log(abahcbbv)} will be rendered in console
we can put react element in other elements and functions by using {elem}
cross site scripting= Cross Site Scripting (XSS) is a vulnerability in a web application that allows a third party to execute a script in the user’s browser on behalf of the web application. Cross-site Scripting is one of the most prevalent vulnerabilities present on the web today.
jsx can stop this, by sanitizing the data
<title/> and <title></title> is the  same thing
can also {title()}
in react we have something known as props(property) passing a prop to a component is just like passing arguments to functions
<RestrauntCard resName="meghana foods" stars="" cuisine="biryani, north indian, india"/>
this resName="meghana foods" cuisine="biryani, north indian, india" is known as props
and then we can put the {props.resName} in h4 =><h4>{props.resName}</h4>
can also destructure  const {resName,cuisine}=props
<h3>{resName}</h3>
      <h4>{cuisine}</h4>
conflict driven ui=> where component change after locations,discount change if the location changes
we can now  add the live production data in form of json by collectiong it from website by inspecting in network of fetch then we would open it in the new tab of the chrome by using the json viewer in the extentesion 
then copying the restraunt card of types of restraunt near by and then pasting it then representing it in the web by 
const RestrauntCard = (props) => {
  const { resData } = props;
  console.log(resData);
  const { info } = resData;
  console.log(info);
  return (
    <div
      className="res-card"
      style={{
        backgroundColor: "lightgray",
        border: "1px solid gray",
      }}
    >
      <img
        className="meghana"
        src={
          "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" +
          info.cloudinaryImageId
        }
        alt={info.name}
      />
      <h3>{info.name}</h3>
      <h4>{info.cuisines.join(", ")}</h4>
      <h4>
        {info.avgRating + " stars"} {info.sla.deliveryTime} minutes
      </h4>
    </div>
  );
};
and making the restraunt card by
  <RestrauntCard resData={resObj[3]}  />
?= optional chaining
Each child in a list should have a unique "key" prop.
it can be solved by assigning key key={restraunt.info.id}
why we need keys
if there we add another it will render al the restraunt card contained by a container neacsue it doesnt know which is new and which is old
if you give them an id then it will render only the new 
some people use key={index} but react consider as a bad practice not recommended
2 types of export and import
1) default export/import 
 export default Header; 
 import RestrauntCard from "./RestrauntCard";
2)named export import
<!-- export const LOGO_URL= "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_96,h_96/portal/c/logo_2022.png"
 -->
 <!-- import { LOGO_URL } from "../utils/constants";
 -->
 now develop a button of top rated restraunt (4<)
 hook=normal js utility function
 -usedState()-used to give superpowerfull state variable in react
 import {useState }from "react"
 it create the state variable
 whenever a state variable updates react will re render my component
 -useEffect()


 react uses reconciliation algorithm (react fiber)
 react virtual DOM- representation of an actual DOM=normal js object
 diff algo=tries to find the diff b/w 2 virtual DOM.it will then actually upate the DOM o every render cycle
 this whole thing is react fiber
when we click then it makes a virtual dom find the difference b/w thwm then updates
incremental rendering =ability to split rendering work imto chunks and spread
https://github.com/acdlite/react-fiber-architecture
 //create a local state variable
    const [listOfRestraunt,setListOfRestraunt]=useState(resObj);//this is array destructuring
    //can also write it like 
    //const arr=useState(resObj)
    //const listOfRestarunt=arr[0];
    //const setListOf/rstraubnt
    //create normal js varisble
    // let listOfRestraunt=[];

monolith architecture=>big projects that used to contain api, ui, aut, database, sms, basiaclyy everything. if you want to change the colour of a buton then you have build the whole project then deploy it 
microservice architecture=> different services combines to form a big app
having different project for different thing =>seperation of concern foolows single resposibility principle where each every service has its own job.run on their specific ports
2 appraches how ui apps fetch data from backend
1) when our app loads we can make api call wait for data to come then render the ui
2) when our app loads the data then quickly render it now we make api call then render ui the data of api
in react we will use 2nd beacuse gives better ux
if we fetch the siwggy api isntead of using hard coded data 
 useEffect(()=>{
      fetchData();
    },[])
    // this callback console.log fucntion wil be caled after rendering the body


    const fetchData=async()=>{
      const data=
      await fetch(
        "https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.690457&lng=77.33467069999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
      );
      const json=await data.json();
      console.log(json);
      setListOfRestraunt(json)
    }

    //fetch will return a pomise
    //can resolve a promise by .then .catch or async Await
   
   it will give an error=>localhost/:1 Access to fetch at 'https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.690457&lng=77.33467069999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING' from origin 'http://localhost:1234' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource. If an opaque response serves your needs, set the request's mode to 'no-cors' to fetch the resource with CORS disabled.
cors policy =our browser block us if there is an origin mismatch
we can bypass it by cchrome extemsion of cor
then we can start the server again with live data by
      const fetchData=async()=>{
      const data=
      await fetch(
        "https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.690457&lng=77.33467069999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
      );
      const json=await data.json();
      console.log(json);
      setListOfRestraunt(json.data.cards[1].card.card.gridElements.infoWithStyle.restaurants)
we get the add in the json 
we can also do it better by optional chaining
       setListOfRestraunt(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle.restaurants)
we can use shemar ui when the cards are not loaded=>blank cards loaded before loading hte actual cards
//conditional rendering=rendering on the base of condition 
    if(listOfRestraunt.length===0){
      return <Shimmer/>
    }
    can combine the conditional and normal return by==>  return listOfRestraunt.length==0?<Shimmer/>:
    why do we need state variables
    if we do this <button className="login" onClick={()=>{
                btnName="logout"
            }
            }>{btnName}</button>
            it wont update in the page,but it will update if we console.log it
            there we use state variable
            if we
            const {btnNameReact}=useState("Login");
             const [btnNameReact,setBtnReact]=useState("Login")
             onClick={()=>{
                setBtnReact("Logout")
            }}
             we cant directly change the value
when we had btnName react doesn't know the whether the btnNAme got updated or not
when the state variable chnages it will re render the whole we can check by consoling a thing 
if it came out twice it is re rendering the whole header
basically it invoke the header functio again but this time the value of the btnName changes
onClick={()=>{
              console.log(searchText)
              filter the restraunt and update it
               const filtered=listOfRestraunt.filter(
                 (res)=>res.info.name="searchText"
               )
              this value will first be binded to state variable 
              searchText
            }}
            now this will not take new value in input
whatever in the searchText will be inside value
it wil get updated in the search box if there is OnChange
whenever react state variabl updates, react trigger a reconciliation cycle(re renders the component)=on ach key press it re renders
if we make filtered of restraunt and asiign it to the actual list it wont work
without using cors plugin=>use corsproxy.io
https://corsproxy.io/?
useEffect(()=>{ 
    
  },[])
useEffect is called after every render of that component. dependecy array chsnges the behaviour of it's returning. if the there is no array then it (useEffect)will be called on every component array
console.log("headderrr");
  useEffect(()=>{
    console.log("useEffect Called")
  },[])
  in this case headderrr will be called again and agin in logout and login but useEffect is called on initial render
console.log("headderrr");
  useEffect(()=>{
    console.log("useEffect Called")
  },[])
  in this case headderrr and useEfeect called will be called again and agin in logout and login
if we put something in dependecy array, it will only be called if the dependency changes
console.log("headderrr");
  useEffect(()=>{
    console.log("useEffect Called")
  },[btnNameReact])=>everytime when btnNameReact changes it wiil be called 
always call useState in fucntional component and on the top so there wont be any inconsisitecny in ur code since js is threaded
dont call useState in if-else and for loop
eg:- this one=>  const [btnNameReact, setBtnReact] = useState("Login");
PS C:\Users\vinay\Desktop\NR\nr4> npm i react-router-dom
createBrowserRouter is the recommended
can create a component by rafce
if we dont have any component route then it will give error 404:http://localhost:1234/vijay
lets create one by erorElment
whenever a function starting fom word "use" its a hook
useRouteError gives you more info about this error.so we can show specific details
childeren route=>
<Header />
      {/* if path =/ */}
      <Body />
      {/* if path =/about */}
      <About/>
      {/* if path =/about */}
      <Contact/>
      outlet will help
now we have to link it we could use anchor tag < a href="">
we should not use it because it reloads the coming page again and again
2 types of routing = client side=>this we are doing
, 
server side rouying=>goes to the server collects the data and reloads the page
spa=>it is one page just the components are getting interchange via client side routing
this is simple routing => we created links 
dynamic routing =>dynamic route for evry restraunt we have=>have to build diff links for diff routing
1st we create a restraunt menu page 
    path:"/restraunts/:resId"
: makes it dynamic
we can do this by
    const {name,cuisines,costForTwoMessage}=resInfo?.cards[2]?.card?.card?.info||{};
    
    return resInfo===null?
    <Shimmer/>:
    (
        <div className="menu">
            <h1>{name}</h1>
            <h2>{cuisines.join(", ")}</h2>
            <h3>{costForTwoMessage}</h3>


grpahQl=helps you with overfetching or fetch only the data that you want to load
sometime code can be unreachable beccasue of return
(

)
please connect these 2 because it sis not c/c++
now we can map nd give the every menu dish price in a list
now we have to load every restarunt in our web page for this we can use the useParams hook
if we const params=useParams()
    console.log(params);
  we get a resId object which shows us the a no. in a string form
we can use =>const {resId}=useParams()
then we get a default resId in the web page we have to put a certain workable resId by ourselves in the link of our page
we wil get a default url =>http://localhost:1234/restraunts/123
we have to change the last string of no.,to that of workable resId
http://localhost:1234/restraunts/557552
now we have to make the card clickable by link comoponent that we will su eto connect the menu Page
if there comes an error of link is not defined impoert it from react-router-dom
link is a special component that is given us by react but behind the scene it is using anchor tag as we can see in the console of the inspect it is a wrapper over anchor tag