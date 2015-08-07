# Introduction To Adaptive Components

In this step, we'll learn what an Adaptive component is, and how it relates to an Adaptive.js project.

## What’s a Component?

Components can be thought of as a single reusable user interface pattern. These UI patterns range from something as simple as a button, icon or breadcrumb, to complex patterns such as accordions, carousels or tab bars. The important thing to understand is that any one component should contain all the necessary pieces (*which may include HTML, CSS and Javascript*) for that pattern to work as a stand-alone unit.

## What's an Adaptive Component?

An *Adaptive* Component is a component built for the Adaptive.js framework. They are created with a certain set  of conventions that allow them to work in an Adaptive.js project. Adaptive Components are composed of the following files:

* Dust.js template – defines the component’s markup
* Sass stylesheet – defines the component’s appearance
* UI Javascript (optional) – defines the component’s behaviour


## Why are Components Important?

Building your site or app with components in mind has many benefits, including (but not limited to) separation of concerns, maintainability and reusability.

### Separation of Concerns

Use components as a way of categorizing the design of your user interface. Each component becomes responsible for providing an optimized interface element for a particular type of information display or interaction. Pages can be assembled quickly and consistently from these building blocks.

### Maintainability

By organizing your front-end code base into components, it becomes easier to isolate problems as they arise, as well as reduce overall complexity. Maintaining components is much easier in the long run than having redundant code spread throughout any number of files and folders.

### Reusability

With a library of components, you are ensuring that all of your design patterns are easy to access at any time. Reuse these patterns to reduce redundancy and prevent code bloat.

This is not only true for a single project, but for reuse across multiple projects. That’s where Stencil comes into the picture!

> **What’s Stencil?**
>
> Good question! This is an important topic that deserves a whole section of it’s own, so we’ll get to that later in the workshop.


## That’s All Great, But What Does it Look Like in Practice?

As a very simple example, the code below shows what it might look like if you were to add a Select component to a PDP template in an Adaptive.js project:

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

Of course, there are many different ways that a component might be structured, we’ll look at all the ways components work in-depth later.


## Done! Onward!

1. In the `workshop--adaptivejs-components` directory, run the following command to proceed to the next topic in the workshop:

    ```
    git checkout intro-2-stencil
    ```

2. Proceed to [Intro to Stencil](https://github.com/mobify/workshop--adaptivejs-components/blob/intro-2-stencil/README.md), the second topic in the workshop!
