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

## Upgrading rimble-ui or other rimble source library

We have to use 2 copies of any library on the storefront: one copy is used via npm and is used to generate all the components and styles. The second copy is used specifically by a Gatsby plugin to get the metadata from the original source code that generates the prop tables.

**You will need to update the source for rimble-ui in 2 places:**

1. Open termainl in the root of the repo and `git checkout -b "bump-rimble-ui-0-xx-x"`

### 1. Upgrade npm package

1. In your source editor open up `package.json` from the root of the repo
2. Look for "rimble-ui" under **dependencies**
3. Change the semver number to the desired package number like `"rimble-ui:" 0.xx.x`
4. Save changes to `package.json`

### 2. Upgrade library source

1. Open a new terminal at the root of the repo and then navigate to /src/library/rimble-ui like `cd src/library/rimble-ui`
2. Use git to pull latest from the `master` branch like `git checkout master && git pull`
   **You should get a git change to the sub-module from the `rimble-storefront` repo**

### 3. Commit and push changes

1. Commit the sub-module change and the package.json change and push up like `git commit -am "Bumped rimble-ui to 0.xx.x" && git push`
