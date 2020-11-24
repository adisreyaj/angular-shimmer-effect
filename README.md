<h1 align="center">NG Shimmer - Content Placeholder</h1>
<p align="center">
    <img src="https://img.shields.io/badge/Angular-11-red?style=for-the-badge&logo=angular" alt="angular">
  <a href="https://github.com/adisreyaj/angular-shimmer-effect/blob/master/LICENSE.md">
    <img alt="License: Apache License 2.0" src="https://img.shields.io/badge/License-Apache License 2.0-yellow.svg?style=for-the-badge&logo=apache" target="_blank" />
  </a>
  <a href="https://twitter.com/AdiSreyaj">
    <img alt="Twitter: Adithya Sreyaj" src="https://img.shields.io/twitter/follow/AdiSreyaj.svg?style=for-the-badge&logo=twitter" target="_blank" />
  </a>
</p>

> Shimmer Animation for Angular Applications

![Angular Remix Icon](https://raw.githubusercontent.com/adisreyaj/angular-shimmer-effect/master/assets/ng-shimmer.png)

Simple and easy to user Shimmer Animation placeholder for your Angular applications. An application should be having a good User Experience inorder to succeed. Smaller things like adding a shimmer animation to let the users know that something is being loaded is a great way to improve the application's UX.

![User Ratings Card](https://raw.githubusercontent.com/adisreyaj/angular-shimmer-effect/master/assets/ss-1.gif)

![Profile Card](https://raw.githubusercontent.com/adisreyaj/angular-shimmer-effect/master/assets/ss-2.gif)

### Features

- Simple and Easy to Setup
- Ease to use
- CSS based super light
- Zero Dependencies
- Customizable

## How to Use the Component

#### Install the package using the command:

```
npm i @sreyaj/ng-shimmer
```

#### Import the StarRatingModule into your module

```ts
import { ShimmerModule } from '@sreyaj/ng-shimmer';
@NgModule({
  ...
  imports: [ShimmerModule],
  ...
})
export class AppModule {}
```

#### Now you can use the component inside your application

```html
<shimmer></shimmer>
```

#### You can now customize it with the following attributes

Eg with few options:

```html
<shimmer [width]="'100px'" [type]="'circle'"></shimmer>
```

## Customizations

| Feature               | Description                                                         | Attribute | Type                           | Default |
| --------------------- | ------------------------------------------------------------------- | --------- | ------------------------------ | ------- |
| Type Of Shimmer       | You can change the appearance of the shimmer                        | type      | 'line' or 'circle' or 'square' | 'line   |
| Width of the Shimmer  | Shimmer width can be customized according to your need              | width     | string                         | '80%'   |
| Height of the Shimmer | Shimmer height can be customized according to your need             | height    | string                         | '12px'  |
| Animation Duration    | Shimmer animation duration can be customized according to your need | duration  | string                         | '1s'    |
| Rounded               | Shimmer corners can be rounded of for 'line' or 'square' type       | rounded   | boolean                        | false   |

Feel free to open Issues and Pull Requests
