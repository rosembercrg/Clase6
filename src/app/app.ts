import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Navbar } from './shared/navbar/navbar';

declare const DD_RUM: any;

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Navbar],
  templateUrl: './app.html',
  styleUrls: ['./app.css']
})

export class App {
  protected readonly title = signal('ProyectoClase6R');

  constructor() { }

  logInfo(message: string) {
    if (typeof DD_RUM !== 'undefined') {
      DD_RUM.addAction(MessageChannel, { level: 'info', module: 'AppComponent' });
    } else {
      console.warn('DD_RUM no está definido', message);
    }
  }

  logError(message: string, error: any) {
    if (typeof DD_RUM !== 'undefined') {
      DD_RUM.addError(message, { error, module: 'AppComponent' });
    } else {
      console.warn('DD_RUM no está definido', message, error);
    }
  }

  nfAfterViewInit() {
    setTimeout(() => {
      if (typeof DD_RUM !== 'undefined') {
        DD_RUM.addAction('App Anugalar iniciada correctamente');
      }
    }, 1000);
  }

  simulateError() {
    try {
      throw new Error('Error simulado en el componente App');
    } catch (e) {
      this.logError('Se ha producido un error simulado', e);
    }
  }
}