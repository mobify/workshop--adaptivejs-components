# Part 2b: Customize the Card Component Style

Now that we've customized out Card component's markup using component bodies, we're ready to move on to the next step: __customize the component style__.

By default, Stencil components come pre-baked with some very simple boilerplate CSS. These can be overridden at any time in two different ways:

1. Override the Stencil configurable variables
2. Create a Stencil Theme `SCSS` file

We will go through how to do each of these in detail below.


## Customize Configurable Variables

In your text editor open `/app/global/styles/_variables.scss`.

At the bottom, add the following:

```scss
$card__background: $neutral-30;
$card__padding: $unit;
```

These are examples of configuration variables. They can range from configuring the component's colors, to box-model dimensions (`height`, `width`, `border`, etc.), to font styles and more. Which variables a Stencil component will have varies from component to component.


## Create and Import a Component Theme Stylesheet

Open up terminal. At this point in the workshop your command line terminal should still be at the workshop's pre-generated Adaptive project directory (`/my-project`). From there, change to the `components` directory:

```
cd app/components/
```

Create a new directory named after our Stencil component in the workshop's Adaptive project and change to it:

```
mkdir stencil-card && cd stencil-card
```

Next, create a new `SCSS` file for our theme styles:

```
touch _card-theme.scss
```

Open up the newly created `_card-theme.scss` file in your text editor. We aren't going to edit it just yet, but we will shortly.

Open the global components `SCSS` file in your text editor, found at `/app/global/styles/_component.scss`. Add the following as a new line:

```scss
@import 'components/stencil-card/card-theme';
```


## Write Custom CSS

Now that we are done setting up all the necessary files, directories and imports we can move on the writing some new styles for our Card component.

In your text editor, return to the `_card-theme.scss` file. Add the following:

```scss
// Stencil-Card Theme
// ===

.c-card.c--brand {
    background: $brand-color;
    color: white;
}

.c-card.c--accent {
    background: $accent-color;
    color: white;
}

.c-card.c--warning {
    background: $error-color;
    color: white;

    a,
    .c-button {
        color: $dark-error-color;
    }
}
```

As you can see, we've added some pretty straight forward theme styles to our Stencil component! Now when we use our component in a template, we can include any of the above modifier classes.

In `home.dust`, let's add a new card below what we added in the previous steps:

```html
{@c-card class="c--brand" title="My Themed Card"}
    <p>My oh my, aren't I pretty card?</p>
{/c-card}
```

Now refresh your preview in the browser and observe the new styles!

So, it is worth noting that we are not limited to writing CSS for just "themes" of course. This is also the place for where you customize the look and feel of the component to make it match the design of your project! This is true for the component itself and any sub-components.

Add the following to `_card-theme.scss`:

```
.c-card {
    border-radius: 4px;
    box-shadow: 0 3px 10px 2px rgba(0, 0, 0, 0.3);
}

.c-card__actions {
    text-align: left;

    &:not(:first-child) {
        border-top: 1px dashed rgba(0, 0, 0, 0.25);
    }
}
```

> _**Remember** there is no need to define the padding or default background color, as we did that with the configurable variables, above._

Once again, refresh your preview in the browser to observe that our changes above have effected all of the cards.


## Done! Onward!

Now, follow this link to the directions in the next branch's [README](https://github.com/mobify/workshop--adaptivejs-components/blob/part-1b\/customize-card-component-markup/README.md).
