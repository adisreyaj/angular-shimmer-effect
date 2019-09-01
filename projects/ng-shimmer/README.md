# Shimmer Animation for Angular Applications

Simple and easy to user Shimmer Animation placeholder for your Angular applications. An application should be having a good User Experience inorder to succeed. Smaller things like adding a shimmer animation to let the users know that something is being loaded is a great way to improve the application's UX.

![User Ratings Card](https://raw.githubusercontent.com/adisreyaj/angular-shimmer-effect/master/src/assets/shimmer.gif)

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

| Feature               | Description                                                   | Attribute | Type                           | Default |
| --------------------- | ------------------------------------------------------------- | --------- | ------------------------------ | ------- |
| Type Of Shimmer       | You can change the appearance of the shimmer                  | type      | 'line' or 'circle' or 'square' | 'line   |
| Width of the Shimmer  | Shimmer width can be customized according to your need        | width     | string                         | '80%'   |
| Height of the Shimmer | Shimmer height can be customized according to your need       | height    | string                         | '12px'  |
| Rounded               | Shimmer corners can be rounded of for 'line' or 'square' type | rounded   | boolean                        | false   |

Feel free to open Issues and Pull Requests
