# Part 1: Install Components

Now that we understand what Adaptive and Stencil components are, let's get out hands dirty in some code by installing some examples!


## Installing Stencil Components

Open up your Terminal and change to the project directory that we've pre-generated for you.

```
cd my-project
```

Let's install the Card and Tabs Stencil components using the following commands:

```
grunt component:install:card
```

As well as...

```
grunt component:install:tabs
```

> __Note__ The `grunt component` command must be executed from inside an Adaptive.js project

What this command does is install the Stencil component via Bower and "auto-magically" modify the necessary files to ensure that the component can be used right away.


## Add the Stencils to a Template

Now we've installed our two Stencil components, let's go ahead and add them to a template `dust` file.

Open `/my-project/app/pages/home/home.dust` in your editor of choice. In it, add the following:

```html
{@c-card title="My Card Title"}
    <p>Hello world!</p>
{/c-card}

{@c-accordion}
    {@c-accordion__item title="Item 1"}
        <p>Item 1 Content goes here!</p>
    {/c-accordion__item}

    {@c-accordion__item title="Item 2"}
        <p>Item 2 Content goes here!</p>
    {/c-accordion__item}
{/c-accordion}
```


## Preview the Installed Components

In the terminal, run the following command:

```
grunt preview
```

Open up your browser of choice and navigate to [this page](https://preview.mobify.com/?url=http%3A%2F%2Fwww.mobify.com&site_folder=http%3A%2F%2Flocalhost%3A8080%2Fadaptive.js&disabled=0&domain=&scope=1). Click the **"Preview"** button, as per the below screenshot:

{INSERT IMAGE OF PREVIEW PAGE POINTING TO BUTTON}

Once the preview site loads, you should see the Homepage template fully rendered along with the two Stencil components we added above!


## Done! Onward!

Now, follow this link to the directions in the next branch's [README](https://github.com/mobify/workshop--adaptivejs-components/blob/part-2a\/customize-card-component-markup/README.md).
