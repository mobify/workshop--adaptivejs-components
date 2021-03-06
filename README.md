# Adaptive.js Component Workshop

This workshop will guide you through several topics:
- Introduction to Adaptive Components
- How to install Components
- How to customize a Component
- How to create a Component from scratch.

Follow the installation steps in the **Workshop Pre-requisites** section below to get your computer ready for the workshop. Once you're done, follow the directions in the **Ready to Start** section.


## Workshop Pre-Requisites

1. [Install Git](http://git-scm.com/downloads), which we use to move through each topic in the workshop. Make sure to look through some of [the documentation](http://git-scm.com/documentation) if you're not already familiar with how Git works.

2. If you haven't already, [Install the Adaptive.js SDK](http://adaptivejs.mobify.com/docs/1-install-the-adaptivejs-sdk) onto your computer.

## Installing the Workshop

1. Launch your Terminal app.
2. In your terminal window, change directories to your development folder with the command:

    ```
    cd path/to/my/target/folder
    ```

3. Run the following command to clone this workshop repository to your computer:

    ```
    git clone https://github.com/mobify/workshop--adaptivejs-components.git
    ```

4. Change directories to the newly created folder for the workshop site:

    ```
    cd workshop--adaptivejs-components/
    ```

5. Install node dependencies with the following command:
    
    ```
    npm install
    ```


## Ready to Start

Once you install the workshop, you're ready to move on to the next step.

1. Enter following command on the command line in Terminal:

    ```
    git reset --hard HEAD && git clean -df
    ```

    This command resets the branch so that you can start fresh at the next step of the workshop.

2. In the `workshop--adaptivejs-components` directory, run the following command in your terminal to checkout to the first step of the workshop:

    ```
    git checkout intro-1-adaptive-components
    ```

3. Proceed to [Introduction to Adaptive Components](https://github.com/mobify/workshop--adaptivejs-components/blob/intro-1-adaptive-components/README.md), the first topic in the workshop.
