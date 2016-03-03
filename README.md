# Part 4: Create a New Component

So far we've learned about how to install and customize pre-built Stencil components in an Adaptive project. But what about when we want to create a brand new component from scratch? Fortunately, we have just the tool for that!


## The Component Generator

Creating new components is easy to do with Adaptive's Component Generator. Let's give it a try!

In terminal, change to the adaptive project's root directory (`/my-project`). If you've been following along the workshop, then we are still in `/my-project/app/components/stencil-card`. The command to get to the project root from there is:

```
cd ../../..
```

Next, use the Adaptive Component Generator as follows:

```
yo adaptivejs:component
```

Answer the following questions as follows:

1. type "badge" for the component name
2. type this description: "A small, colorful dot containing a number, often used as a counter for events such as notifications."
3. answer `y` (or `yes`) when asked if the component has a UI script

When finished, notice that the following files have been created in `my-project/app/components/badge/`:

* `_badge.scss`

  The `scss` file is the component stylesheet, written in SASS. This is where we add and create all of the visual parts of a component.

* `badge.dust`

  The `dust` file is where we define the structural markup of the component, written in Dust (a [templating language](https://github.com/linkedin/dustjs/wiki/Dust-Tutorial) created by LinkedIn).

* `badge-ui.js`

  The `*-ui.js` file is where we define the component's behavior.

* `badge-schema.js`

  The `*-schema.js` file is where we define the expected data structure of the component. In other words, the schema file describes the structure that the context passed to the component dust file must be in order for the component to work. We use the [JS-Schema](http://molnarg.github.io/js-schema/) library for our schema tool.


## Customize the New Component

Our goal here is to create a badge component, which is a simple UI pattern that you often see on e-commerce sites, representing how many items are in your cart.

In `badge.dust` replace what's there with the following:

```html
<span class="c-badge {class}"
    {?id}id="{id}"{/id}
    {?role}role="{role}"{/role}
    data-value="{value}"
    data-adaptivejs-component="badge"
>
    {value}
</span>
```

In `_badge.scss`, under the `Badge root` heading, add the following:

```scss
// Badge root
// ---

.c-badge {
    display: inline-block;
    min-height: $unit * 2;
    min-width: $unit * 2;
    padding: 0 0.25em;

    background: $brand-color;
    border-radius: $unit;

    color: white;
    line-height: $unit * 2;
}
```

In `badge-ui.js`, replace the boilerplate Javascript with the following:

```js
define([
    '$'
], function($) {

    var Badge = function($el) {
        this.$el = $el;

        this.setValue(this.$el.data('value'));
    };

    Badge.prototype.setValue = function(value) {
        this.$el.data('value', value);

        this.$el.html(value);
    };

    return {
        init: function($el, options) {
            $el.data('component') || $el.data('component', new Badge($el, options));
        }
    };
});
```


## Preview the New Component

Open up `my-project/app/pages/home.dust` in your text editor and replace the `{<contentBlock}` block with the following:

```html
{<contentBlock}
    <p>{@c-badge value="2" /} {@c-badge value="24" /} {@c-badge value="240,000" /}</p>
{/contentBlock}
```

Next, open up your browser and visit the following page: [https://goo.gl/8YnP6J](https://goo.gl/8YnP6J). Once there, click the "Preview" button. You should arrive on a preview page that looks like the following:

<img src="/img/badges.png?raw=true" height="300"/>

Notice our three example badge components!


## Interacting with Components on a Page

Lastly, let's look at how you can interact with the components by setting new values for one of the badge instances. Open up your browser's developer tools or inspector, switch to the Javascript console, and enter the following:

```
$('.c-badge').first().data('component').setValue(38);
```

The first badge on the preview page will update to read "38"!


## Done! Onward!

1. Proceed to the [conclusion](https://github.com/mobify/workshop--adaptivejs-components/blob/conclusion/README.md) of the workshop.
