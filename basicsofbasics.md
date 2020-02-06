## Whatever, Dude:
- React is a javascript UI library used for the view layer in an MVC.
- React creates components (reusable HTML elements).
- The following three CDN's allow you to use React without node and all the associated headaches:
```java
<head>
	...
    <script src="https://unpkg.com/react@16/umd/react.development.js"></script>
    <script src="https://unpkg.com/react-dom@16/umd/react-dom.development.js"></script>
    <script src="https://unpkg.com/babel-standalone@6.26.0/babel.js"></script>
    ...
</head>
```
- You specify a `root` element and make it the entry point to the program.

## JSX:
- It's a mix of javascript and XML. Looks like HMTL which makes it easier to understand and less cumborsome than regular javascript DOM manipulation.
- Some of what makes JSX different from HTML include:
	+ The use of `className` instead of `class` for CSS classes.
	+ Camelcased method and property names in JSX, so the Javascript's `onclick` becomes `onClick`.
	+ Self-closing tags end in with a slash as in `<App />`, `<img />`.
	+ Javascript code can be imbedded inside JSX as in `<h1>Hello {variableName}</h1>`.

## Components:
- A react app is usually composed of an infinite number of components and each one can or should reside in its own file. There are two types of components: **class components** and **simple components** which are *const functions*.
- Compoents can be nested in each other resulting in very rich UI's.
- Class components follow this syntax:
```javascript
class ClassComponent extends Component {
  render() {
    return <div>I'm a class component</div>
  }
}
```
- The function component's syntax is as follows:
```javascript
class ClassComponent extends Component {
  render() {
    return <div>I'm a simple component</div>
  }
}
```

## Props:
- Props is data a component receives from its parent. It can read it but cannot modify it.