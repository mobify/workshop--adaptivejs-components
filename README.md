# Part 3: Customize the Card Component Style

Now that we've customized our Card component's markup using component bodies, we're ready to move on to the next step: __customizing the component style__.

By default, Stencil components come pre-baked with some very simple boilerplate CSS that can be overridden at any time in two different ways:

1. Override the Stencil configurable variables
2. Create a Stencil Theme `SCSS` file

We'll go through how to do both in detail below.


## Customize Configurable Variables

In your text editor, open `/app/global/styles/_variables.scss`.

At the bottom, add the following:

```scss
$card__background: $neutral-30;
$card__padding: $unit;
```

These are examples of configuration variables. They can configure a component's colors, box-model dimensions (`height`, `width`, `border`, etc.), font styles and more. The variables that a Stencil uses varies from component to component.

### What are Configurable Variables?

When talking about the styles of Stencil Components, "configurable variables" refer to variables that have been predefined in a Stencil's `scss` file and are intended to be overridable by developers when used on a project.

The reason there are configurable variables is simply because we wanted to provide meaningful styles for our Stencil components so that when used right out of the box, they work right away with no need to add any setup styles. As nice as it is for a component to work straight out of the box, it is reasonable to assume that designers will want a component to take on certain aesthetic qualities to fulfill their role in a design, so we ensure that the simplest and most basic styles can be overwritten as easily as is reasonably possible.


## Create and Import a Component Theme Stylesheet

Open up terminal. At this point in the workshop, you should still be in your pre-generated Adaptive project directory (`/my-project`). From there, change to the `components` directory:

```
cd app/components/
```

Create a new directory named after our Stencil component in the workshop's Adaptive project and navigate to it:

```
mkdir stencil-card && cd stencil-card
```

Next, create a new `SCSS` file for our theme styles:

```
touch _card-theme.scss
```

Open up the newly created `_card-theme.scss` file in your text editor. We'll edit this shortly.

Open the global components `SCSS` file in your text editor, found at `/app/global/styles/_component.scss`. Add the following as a new line:

```scss
@import 'components/stencil-card/card-theme';
```


## Write Custom CSS

Now that we are done setting up all the necessary files, directories and imports we can move on to writing some new styles for our Card component.

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

In `home.dust`, let's add a new card below our current code:

```html
<div class="t-home__section">
    {@c-card class="c--brand" title="My Themed Card"}
        <p>My oh my, aren't I pretty card?</p>
    {/c-card}
</div>
```

Refresh your preview in the browser and observe the new styles!

It is worth noting that we are not limited to writing CSS for just "themes". This is also the place for where you customize the look and feel of the component to make it match the design of your project! This is true for the component itself and any sub-components.

Add the following in `_card-theme.scss`, just before the `.c-card.c--brand` CSS block:

```
.c-card {
    border-radius: 4px;
    box-shadow: 0 3px 10px 2px rgba(0, 0, 0, 0.3);
}

.c-card__footer {
    border-top: $border;
}

.c-card__action {
    border: 0;
    background: none;

    color: $brand-color;
    font-size: 13px;
    font-weight: 600;
    text-transform: uppercase;
    letter-spacing: 0.05em;

    &:active {
        background: transparentize($brand-color, 0.9);
    }
}
```

> _**Remember** there is no need to define the padding or default background color, as we did that with the configurable variables, above._

Once again, refresh your browser to observe how our changes above have effected the cards.


## Done! Onward!

1. Enter following command on the command line in Terminal to reset your branch:

    ```
    git reset --hard HEAD && git clean -df
    ```

2. Now run the following command to proceed to the next topic in the workshop:

    ```
    git checkout part-4-create-new-component
    ```

3. Proceed to [Create a New Component](https://github.com/mobify/workshop--adaptivejs-components/blob/part-4-create-new-component/README.md), the fourth and final topic in the workshop! 
