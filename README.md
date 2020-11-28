# Ngx-Progress-Overlay

![npm](https://img.shields.io/npm/v/ngx-progress-overlay)
![David](https://img.shields.io/david/monkeyscript/ngx-progress-overlay)
![npm bundle size](https://img.shields.io/bundlephobia/min/ngx-progress-overlay)
![NPM](https://img.shields.io/npm/l/ngx-progress-overlay)

A simple donut progress bar with a full-screen overlay.

Demo : [https://monkeyscript.github.io/ngx-progress-overlay/](https://monkeyscript.github.io/ngx-progress-overlay/)

## Installation

Using npm:

```bash
$ npm install ngx-progress-overlay
```

## Usage

Import `NgxProgressOverlayModule` in the root module (`AppModule`) :
```typescript
import { NgxProgressOverlayModule } from 'ngx-progress-overlay';

@NgModule({
  imports: [
    NgxProgressOverlayModule
  ]
})

export class AppModule { }
```

Add `NgxProgressOverlayService` service in your component : 
```typescript
import { NgxProgressOverlayService } from 'ngx-progress-overlay';

class AppComponent implements OnInit {
  
  constructor(private progressOverlay: NgxProgressOverlayService) { }

  ngOnInit() {

    // Shows progress bar
    this.progressOverlay.show('text','#00e676');

    // Set progress value
    this.progressOverlay.setProgress(50);

    // Hides progress bar
    this.progressOverlay.hide();

  }

}
```

Finally, use `NgxProgressOverlayComponent` in your template
```html
<ngx-progress-overlay></ngx-progress-overlay>
```

## Methods

- **show()** : Toggles on the overlay. Takes in two inputs; the text to be shown and the donut color in HEX(optional).
- **setProgress()** : Sets the progress value. Takes the value(number) as input.
- **hide()** : Hides the overlay.

## Issues & Contributions

For a new feature, create an issue [here](https://github.com/monkeyscript/ngx-progress-overlay/issues). Open to all contributions :)

## License

Apache-2.0. Please see the [license file](https://github.com/monkeyscript/ngx-progress-overlay/blob/master/LICENSE) for more information.

## TODO
Demo
linear progress