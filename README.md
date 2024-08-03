# Library

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 17.3.7. and .Net Core 6.0 using MySQL

## Backend

Run the API project first

## Frontend

Run `ng serve -o` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## database

Install MySQL


create schema librarydb

update details as following connection string or update the connection string with your schema details
"Server=localhost; port = 3306;  Database =librarydb; uid=root;Password=Scaler@001"

open nuget package manager in API and run following commands

Add-Migration InitialCreate
Update-Database

Then Run the API

In swagger, use post method to create few books


then you can use frontend
