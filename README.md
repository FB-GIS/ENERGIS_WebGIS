# ENERGIS_WebGIS
## Description

This application consists of:  
  
1/ A website for a fictional consulting firm specializing in geomatics applied to renewable energies.  
2/ A WebGIS application that allows users to visualize all wind and photovoltaic projects implemented in metropolitan France.  

## Features  

### 1) Website  

The website will consist of several pages allowing users to:    
  
- Present geomatics to renewable energy professionals who are not familiar with this discipline.    
- Describe the services offered by the consulting firm in terms of geospatial analysis applied to renewable energies.      
- Detail the features and data available through the mapping application.    
- Provide a registration and login space to access the application.     

### 2) WebGIS Application  

All application features will be integrated with the mapping interface to leverage geospatial data and manage user accounts.  
  
#### A. <ins>Users</ins>  

Access to the WebGIS platform will require authentication via a username (email address) and password provided during registration. Users will be able to freely log out of the application and manage their personal information through a user profile.  
  
Informations collectées lors de l'inscription via un formulaire d'enregistrement :  
Last name  
First name  
Email address  
Postal address  
Postal code  
City  
Phone number  
Password  
  
All this information can be updated by the user through their personal space.  

Mapping features accessible to users:    
- Read-only consultation of cartographic data by simple click in the application.    
- Export of maps to PDF format.   
- Use of calculation tools and distance/area measurement.    
- Access to a personal data layer dedicated to users for drawing their own project areas (wind or solar).    
- Quick locality search via a search field: users can enter an address and the application will automatically zoom to the location found using a geocoding tool from the Leaflet library (using an OpenStreetMap API).    
   
Through a dashboard, the user can access their profile as well as all the study areas they have drawn in the mapping application. They can view, modify, and delete them.    


#### B. <ins>Administrators</ins>  

The administrator will have a dedicated interface (dashboard) for managing users and the application's geographic data:    

- Create new user accounts.   
- Delete client accounts upon cancellation request.    
- Access user information (last name, first name, phone number, email address, postal address) without being able to modify it.   
- Manage roles and permissions (standard user, administrator).  
- Add, delete, and modify geographic data information and geometries.  
  

## Technologies Used  
SCSS, JavaScript, Leaflet, React, Node.js, MySQL

## Local Installation  
1/ Clone this repository: git clone https://github.com/FB-GIS/ENERGIS_WebGIS.git  
2/ Create your MySQL database with the SQL files corresponding to the tables (see MCD/MLD in *backend* folder) contained in the *backend/data* folder.    
3/ Modify the information in the .env_example file with your database details (host, user, password, secret code, etc.) and rename it to .env   
4/ In your IDE terminal, navigate to the backend folder: *cd sites/0_ENERGIS/backend/* on Windows THEN *npm run dev*  
5/ In a second IDE terminal, navigate to the frontend folder: *cd sites/0_ENERGIS/backend/* on Windows THEN *npm run dev*    
6/ For SCSS management, navigate to the css folder: *cd sites/0_ENERGIS/frontend/src/css/* THEN *sass --watch style.scss:style.css*  

## Data Sources  
Data specific to wind and photovoltaic projects was aggregated from multiple public sources (DREAL, DDT, Geo-IDE, etc.)    

## Author  
Frédéric BARON
