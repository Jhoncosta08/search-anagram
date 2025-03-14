# Anagram Detector

## About the project
>This project was developed using Angular 19 and follows best practices in architecture and design. The system leverages advanced features such as Standalone Components and Lazy Loading, and it is organized into views and components to ensure modularity and easy maintenance. Additionally, the application is fully responsive, offering an optimized experience for both mobile devices and desktops.

>The system's main goal is to allow the user to add a JSON containing strings, enabling the system to identify and group anagrams found within the dataset. For editing and manipulating the JSON, the jsoneditor library is used, providing an intuitive interface where users can easily input and modify the data.

>After the user inputs an array of JSON objects, where each object contains a string, the system processes this data to identify anagrams. An anagram occurs when two or more words contain the same letters in the same quantity but arranged in a different order. The system compares the words, and when it detects an anagram, it groups those words into a new output array.

>For example, when receiving words like "amor" and "roma," the system detects that these two words are anagrams and groups them into a single JSON object.

## Main technologies used in the project
>* This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 19.1.0.
>* This project has implemented [Standalone Components](https://v17.angular.io/guide/standalone-components)
>* This project has implemented [Bootstrap](https://getbootstrap.com) version 5.3.0
>* This project has implemented [JsonEditor](https://www.npmjs.com/package/jsoneditor) version 10.1.3

## About bootstrap
>For standardization, best practices and responsiveness, when developing new pages, think about the structure of rows and columns following the grid pattern.

**Example:**

| Grid pattern class | Description                                                                    |
|:-------------------|:-------------------------------------------------------------------------------|
| `.container`       | Container with spacing on the sides (width: 1200px).                           |
| `.container-fluid` | Container without spacing on the sides(width: 100%).                           |
| `.row`             | Single div, must be used as a parent div that will have 1 to 12 col child divs |
| `.col`             | Single div, must be used as a parent div that will have 1 to 12 child divs     | 

>***The pattern shown above in the table shows the structure of the project's html pages, new pages must follow the pattern.***

**Page grid example**

~~~html
<div class="container-fluid">
  <div class="row">
    <div class="col">
      <h1>Page title</h1>
    </div>
  </div>
  
  <div class="row">
    <div class="col">
      <p>First container</p>
    </div>
    <div class="col">
      <p>Second container</p>
    </div>
  </div>
</div>
~~~

## Bootstrap componentes
>You can view the available components for using bootstrap and ng-bootstrap by clicking on the links below:
>* [bootstrap components](https://getbootstrap.com/docs/5.3/components)

## How to clone and setup up the project
> - [x] Clone the project, use de code: `git clone <project-url>` to clone the project.
> - [x] Install npm packages, use de code: `npm i` to install the packages.
> - [x] Run the project, use de code: `npm start` to run the project.

## Development server
> Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Preview app
![image](https://github.com/Jhoncosta08/search-anagram/blob/master/src/assets/previews/preview-one.png)
![image](https://github.com/Jhoncosta08/search-anagram/blob/master/src/assets/previews/preview-two.png)
![image](https://github.com/Jhoncosta08/search-anagram/blob/master/src/assets/previews/preview-three.png)
