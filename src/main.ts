import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { App } from './app/app';
import { datadogLogs } from '@datadog/browser-logs';

datadogLogs.init({
  clientToken: 'pube6f0fca683a9a3e82f1b3d15346a4eaf',
  site: 'datadoghq.com',
  service: 'ProyectoClase6R',
  forwardErrorsToLogs: true,
  sampleRate: 100,
});

datadogLogs.logger.info('Aplicación iniciada');

bootstrapApplication(App, appConfig)
  .catch((err) => {
    console.error(err);
    datadogLogs.logger.error('Error al iniciar la aplicación', { error: err });
  });