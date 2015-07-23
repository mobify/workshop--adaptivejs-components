# Introduction To Adaptive Components

In this step, we are going to learn exactly what an Adaptive component is and how that relates to an Adaptive.js project.

## What’s a Component?

Components can be thought of as a single reusable user interface pattern. These UI patterns can be as simple as a button, icon or breadcrumb, to as complex as an accordion, carousel or tab bar. The important thing to understand is that a single component contains all the necessary pieces for that pattern to work as a single unit, which may include HTML, CSS and Javascript.

## What's an Adaptive Component?

An *Adaptive* Component is a component built into within the framework of Adaptive.js. This means that Adaptive Components have conventions and certain requirements in order to make them work in an Adaptive.js project. Adaptive Components are composed of the following files:

* Dust.js template – defines the component markup
* Sass stylesheet – defines the component appearance
* UI Javascript (optional) – defines the component behaviour


## Why are Components Important?

Building your site or app with components in mind has many benefits, including (but not limited to) separation of concerns, maintainability and reusability.

### Separation of Concerns

Use components as a way of categorizing the design of your user interface. Each component is responsible for doing one thing and doing that one thing well.

### Maintainability

Organizing your front-end code base into components, it becomes easier to isolate problems as they arise as well as reduce complexity in an overall system (such as your Adaptive.js project). Maintaining components is much easier in the long run than having redundant code spread throughout any number of files and folders.

### Reusability

By having a library of components, you give ensuring that all of your design patterns are easy to access at any time. Reuse these patterns to reduce redundancy and prevent code-base bloat.

This is not only true for a single project, but for reuse across multiple projects. That’s where Stencil comes into the picture!

> **What’s Stencil?**
>
> Good question! This is an important topic that deserves a whole section of it’s own, so we’ll get to that later in the workshop.


## That’s All Great, But What Does it Look Like in Practice?

As a very simple example, the below show’s what it might look like if you were to use a component in an Adaptive.js project if we were to add a Select component to a PDP template:

```html
<!-- pdp.dust -->
<div class=“t-pdp__product-options”>

    <!-- this is what a component might look like! -->
    {@c-select id=“quantity” name=“quantity”}
        <option value=“1”>1</option>
        <option value=“2”>2</option>
        <option value=“3”>3</option>
    {/c-select}

</div>
```

Of course, there are many different ways that a component might look, but we’ll look at all the ways components work in depth later.


## Done! Onward!

Now, follow this link to the directions in the set up branch [README](https://github.com/mobify/workshop--adaptivejs-components/blob/step-1/README.md).
