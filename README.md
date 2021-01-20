# React NextJS Company Website Server Side Rendering Frontend

This Repository contains a Project which has the React NextJS Frontend for Server Side Rendering Company Website.\
This Project is created using a Modular approach, where various functionalities are divided into various Pages.

> # Backend/Data-Source:

The Backend/Data-Source for Company Data is located at:\
https://khardik1698.github.io/CompanySSRData/

The Backend Data Files are uploaded on:\
https://github.com/KHardik1698/CompanySSRData.git

> # Navigation:

**http://localhost:3000/** will be the Home Page for Companies.\
**http://localhost:3000/surfboard** will be the Landing Page for Surfboard.\
**http://localhost:3000/raw-engineering** will be the Landing Page for Raw Engineering.\
**http://localhost:3000/contentstack** will be the Landing Page for Contentstack.

> # Folder Structure:

Each Pages Module has it's own Folder by the name of the Component.\
The Folder contains the main index.js file & index.module.css style file.

> # Constants Component:

This Folder contains a File which has the Backend Link from where the data will be fetched.

> # Pages:

The Pages Folder contains all the Pages Components to be served for any given URL Route.\
There is a default index.js which is used to render the "/" Home Page.\
It contains Surfboard Page, Raw Engineering Page & Contentstack Page.\
The Index Page contains the Navigation Links to the 3 Companies Page.\
It will redirect to the companies Landing Page when clicking on the Logo.\
Each Company Page, i.e. Surfboard, Raw Engineering & Contentstack, contains it's own Header, Data Content & Footer.

> # Styles:

Index Page has it's style file stored in Styles Folder.\
Each Page Module contains it's own Module CSS File for Styling.

> # Demo:

The Project is Hosted on Vercel.\
This will be the Home Page for Company Website.\
**https://react-next-js-company-ssr.vercel.app/**
