import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';

declare const DD_RUM: any;

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: ['./app.css']
})

export class App {
  protected readonly title = signal('ProyectoClase6R');

  constructor() {
  
  // log informativo
  logInfo(message: string) {
  DD_RUM.addAction(MessageChannel, { level: 'info', module: 'AppComponent' });
  }

  // log de error
  logError(message: string, error?: any) {
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
}, 1000); // Espera 1 segundo
  }



  //Simulacion de un error
  simulateError() {
    try {
      throw new Error('Error simulado en el componente App');
    } catch (e) {
      this.logError('Se ha producido un error simulado', e);
    }
  }
