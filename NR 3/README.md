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