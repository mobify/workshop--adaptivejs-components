# Part 2: Customize the Card Component Markup

So far we've installed a few components, we've added them to our `home.dust` template and showed how easy they are to use by throwing in some sample content. Now we will go over how to customize the component markup.


## Component Output

Let's take a look at how the Card component that we added last step looks like when it renders on the page.

We added this to `home.dust`:

```html
{@c-card title="My Card Title"}
    <p>Hello world!</p>
{/c-card}
```

Here is the output:

```html
<section class="c-card">
    <header class="c-card__header">
        <h2 class="c-card__title">My Card Title</h2>
    </header>

    <div class="c-card__body">
        <p>Hello world!</p>
    </div>

    <footer class="c-card__footer"></footer>
</section>
```

So, what if we need to use a very specific set of markup for the `header`. What if we want to replace the `h2` with an `h3`? How do we do that? Simple! We make use of _component bodies_.


## Component Bodies

Component bodies are predefined regions in a component that usually have default markup, but can be replaced with custom markup. A single component can have one body, multiple bodies or (sometimes) no bodies at all.

Our Card example has three available bodies: 'header', the default 'body' and a 'footer'.

Let's customize our Card component's header body. Open up `home.dust` and replace the `{@card}` block with the following:

```html
{@c-card}
{:header}
    <h3 class="c-card__title">My Custom Card Title Markup</h3>
{/c-card}
```

Back in your browser, refresh the page and observe the change.

Look at that! The `h2` element is now the `h3` tag that we passed into the header.

But wait, notice anything strange?

That's right, we're now missing content in the `.c-card__body` container. The reason this happened is because in our code above, we did not include content for the default body.


## Multiple Bodies

We are not limited to making changes to just one component body, we can customize multiple component bodies at once.

In our example code, we can remedy our missing content very easily by making this next change in `home.dust`. While we're at in, why don't we also include the footer body?

Replace that `{@c-card}` block with the following:

```html
{@c-card}
{:header}
    <h3 class="c-card__title">My Custom Card Title Markup</h3>
{:body}
    <p>Return of the body!</p>
{:footer}
    {@c-card__action}Ooh, I'm a button!{/c-card__action}
{/c-card}
```

Now open up your browser, refresh and confirm that all of our bodies (header, default and footer) render correctly.

> __Note!__
>
> _Understand that the component will automatically insert into the default body any content between the component's open and close tag when there is no reference to any particular body. For example:_
>
> ```
> {@c-card}
>     <!-- This will insert into the default body -->
>     <p>Return of the body!</p>
> {/c-card}
> ```
>
> _The default body is always named `body`._


## Done! Onward!

1. In the `workshop--adaptivejs-components` directory, run the following command to proceed to the project set up branch:

    ```
    git checkout part-3-customize-style
    ```

2. Now, follow this link to the directions in the next branch's [README](https://github.com/mobify/workshop--adaptivejs-components/blob/part-3-customize-style/README.md).
