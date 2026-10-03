import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-test-hub',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './test-hub.html',
  styleUrl: './test-hub.css'
})
export class TestHub {
  levels = [
    {
      code: 'a1',
      title: 'A1 - Beginner',
      description: 'Habla sobre rutinas, presentaciones y situaciones cotidianas con vocabulario básico y frases útiles.',
      readingOne: 'Daily routine',
      readingTwo: 'Introducing yourself'
    },
    {
      code: 'a2',
      title: 'A2 - Elementary',
      description: 'Mejora la comprensión de textos sencillos sobre viajes, trabajo, salud y actividades del día a día.',
      readingOne: 'Travel plans',
      readingTwo: 'Weekend activities'
    },
    {
      code: 'b1',
      title: 'B1 - Intermediate',
      description: 'Trabaja con textos más completos sobre experiencias, opiniones y situaciones personales con un punto de vista más amplio.',
      readingOne: 'A study routine',
      readingTwo: 'A work challenge'
    },
    {
      code: 'b2',
      title: 'B2 - Upper Intermediate',
      description: 'Desarrolla lectura crítica, comparación de ideas y análisis de textos más complejos y argumentativos.',
      readingOne: 'Social media habits',
      readingTwo: 'Sustainability and habits'
    },
    {
      code: 'c1',
      title: 'C1 - Advanced',
      description: 'Aborda textos académicos, contextos profesionales y escenarios complejos con matices culturales y lingüísticos.',
      readingOne: 'A business case',
      readingTwo: 'A cultural article'
    }
  ];
}
