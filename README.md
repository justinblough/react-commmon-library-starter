# common-library
A common library of styles and components for the frontend clients

## Todos
- Importable stylesheet of all styles available
- Cleanup distribution files/namin and structure
- Make each component versionable
- Add testing capabilities

## Usage

**React Components**
```
import components from 'common-library'
// OR
import {SomeComponent} from 'common-library/components'
```
**Common Sass**
Contains common styling, used by components for sass mixins and variables, and storybook.

Intended to be imported into a client sass and extended as the base.
```
@import "~common-library/dist/styles/common.sass"
```


## Getting Started

 **StoryBook** [website](https://storybook.js.org/)

 ```
 yarn run storybook
 ```
 http://localhost:9001

 Add `*.story.js` with the component and you can use the story to develop the component in an isolated environment.


 **Running A Build**

 ```
 yarn run dist
 ```

### Reference Links
- [Making of a component library for React](https://hackernoon.com/making-of-a-component-library-for-react-e6421ea4e6c7)
- [material-ui](https://github.com/mui-org/material-ui/blob/master/packages/material-ui/scripts/rollup.config.js)
- [reactstrap](https://github.com/reactstrap/reactstrap/blob/master/rollup.config.js)
- [How I set-up a React component library with Rollup](https://medium.com/tech-grandata-com/how-i-set-up-a-react-component-library-with-rollup-be6ccb700333)
