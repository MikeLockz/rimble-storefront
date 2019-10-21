# Rimble Storefront

Landing page, marketing site, design guidelines, and documentation for rimble-ui and rimble-web3-components.

## 🚀 Quick start

1.  **Clone this repository**
    _Note: the source for the two libraries `rimble-ui` and `rimble-web3-components` are needed as git submodules to generate the props tables. The `--recurse-submodules` flag will download the source for the two libraries as git submodules._

        ```sh
        git clone --recurse-submodules -j8 https://github.com/consensys/rimble-storefront.git
        ```

1.  **Add .env**
    Look through the private Notion docs on how to add environment variables for the Algolia search API

    https://www.notion.so/consensysdesign/Algolia-Secrets-API-Keys-5d45beaa21174d5a869915a4e70a97c7

1.  **Start developing.**

    Navigate into your new site’s directory and start it up.

    ```sh
    cd rimble-storefront/
    gatsby develop
    ```

1.  **Open the source code and start editing!**

    Your site is now running at `http://localhost:8000`!

    _Note: You'll also see a second link: _`http://localhost:8000/___graphql`_. This is a tool you can use to experiment with querying your data. Learn more about using this tool in the [Gatsby tutorial](https://www.gatsbyjs.org/tutorial/part-five/#introducing-graphiql)._

## 💫 Deploy

All commits to any branch will autodeploy via netlify. To deploy to production, merge branches onto the `main` branch.
