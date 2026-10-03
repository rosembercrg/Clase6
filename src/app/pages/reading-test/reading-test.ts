import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';

type Question = {
  question: string;
  options: string[];
  answer: string;
};

type Reading = {
  title: string;
  text: string;
  questions: Question[];
};

const levelData: Record<string, { label: string; title: string; readings: Reading[] }> = {
  a1: {
    label: 'A1',
    title: 'Nivel A1 - Beginner',
    readings: [
      {
        title: 'Reading 1: My daily routine',
        text: 'Hi, my name is Lucia. I wake up at 7:00 a.m. every day. I brush my teeth, take a shower and have breakfast with coffee and toast. I usually leave home at 8:00 and go to work by bus. In the afternoon, I finish at 5:30 and I go home to rest. In the evening, I cook dinner and read a book before sleeping.',
        questions: [
          { question: 'What time does Lucia wake up?', options: ['6:30', '7:00', '8:00', '9:00'], answer: '7:00' },
          { question: 'How does she go to work?', options: ['By car', 'By bus', 'By train', 'On foot'], answer: 'By bus' },
          { question: 'What does she do before sleeping?', options: ['She goes to work', 'She reads a book', 'She takes a shower', 'She buys coffee'], answer: 'She reads a book' },
          { question: 'When does she finish work?', options: ['5:30', '6:00', '7:00', '8:00'], answer: '5:30' },
          { question: 'What does she eat for breakfast?', options: ['Rice and soup', 'Coffee and toast', 'Fruit and salad', 'Cake and milk'], answer: 'Coffee and toast' }
        ]
      },
      {
        title: 'Reading 2: Introducing a friend',
        text: 'This is my friend Daniel. He is 22 years old and he lives in Bogotá. He likes music and soccer. He studies engineering at university. On weekends, he plays football with his friends and watches movies at home. He is very kind and always helps people.',
        questions: [
          { question: 'How old is Daniel?', options: ['15', '22', '30', '45'], answer: '22' },
          { question: 'Where does he live?', options: ['Bogotá', 'Cartagena', 'Medellín', 'Cali'], answer: 'Bogotá' },
          { question: 'What does he like?', options: ['Music and soccer', 'Math only', 'Swimming only', 'Reading books only'], answer: 'Music and soccer' },
          { question: 'What does Daniel do on weekends?', options: ['He teaches classes', 'He plays football', 'He works at the airport', 'He visits the hospital'], answer: 'He plays football' },
          { question: 'What is Daniel like?', options: ['Lazy', 'Very kind', 'Shy', 'Angry'], answer: 'Very kind' }
        ]
      }
    ]
  },
  a2: {
    label: 'A2',
    title: 'Nivel A2 - Elementary',
    readings: [
      {
        title: 'Reading 1: A weekend trip',
        text: 'Last Saturday, Marta and her family traveled to a small town near the lake. They arrived early in the morning and visited a local market. Later, they walked around the park and took pictures. In the evening, they ate in a restaurant and returned home tired but happy.',
        questions: [
          { question: 'Where did Marta go?', options: ['To the city', 'To a town near the lake', 'To the beach', 'To the mountains'], answer: 'To a town near the lake' },
          { question: 'What did they do in the morning?', options: ['They slept', 'They visited a market', 'They watched TV', 'They cleaned the house'], answer: 'They visited a market' },
          { question: 'What did they do in the evening?', options: ['They returned home tired', 'They went to school', 'They worked', 'They painted the house'], answer: 'They returned home tired' },
          { question: 'How did they feel at the end?', options: ['Bored', 'Sad', 'Happy', 'Angry'], answer: 'Happy' },
          { question: 'What did they do in the park?', options: ['They studied', 'They walked and took pictures', 'They cooked dinner', 'They bought a car'], answer: 'They walked and took pictures' }
        ]
      },
      {
        title: 'Reading 2: Healthy habits',
        text: 'Many people try to stay healthy by drinking water, eating vegetables and exercising regularly. It is important to sleep well and avoid too much sugar. People who follow healthy routines usually feel stronger and happier. A balanced lifestyle helps both the body and the mind.',
        questions: [
          { question: 'What helps people stay healthy?', options: ['Skipping meals', 'Drinking water and exercising', 'Watching TV all day', 'Sleeping very little'], answer: 'Drinking water and exercising' },
          { question: 'What should people avoid?', options: ['Fresh air', 'Too much sugar', 'Walking', 'Vegetables'], answer: 'Too much sugar' },
          { question: 'Why is sleep important?', options: ['Because it makes people rich', 'Because it helps the body rest', 'Because it changes the weather', 'Because it reduces homework'], answer: 'Because it helps the body rest' },
          { question: 'How do healthy routines affect people?', options: ['They feel stronger and happier', 'They become tired all the time', 'They lose their family', 'They stop working'], answer: 'They feel stronger and happier' },
          { question: 'What does a balanced lifestyle help?', options: ['Only the body', 'Only the mind', 'Both the body and the mind', 'No one'], answer: 'Both the body and the mind' }
        ]
      }
    ]
  },
  b1: {
    label: 'B1',
    title: 'Nivel B1 - Intermediate',
    readings: [
      {
        title: 'Reading 1: A study routine',
        text: 'I used to study in a noisy café, but it was difficult to concentrate. Now I prefer to study at home in the evening because I can organize my time better. I usually review vocabulary, read short articles and practice listening for thirty minutes every day. This routine helps me feel more confident when I speak in class.',
        questions: [
          { question: 'Why did the student stop studying in the café?', options: ['Because it was too quiet', 'Because it was difficult to concentrate', 'Because it was expensive', 'Because he did not like coffee'], answer: 'Because it was difficult to concentrate' },
          { question: 'When does he study now?', options: ['In the morning', 'At home in the evening', 'During lunch', 'At the library every weekend'], answer: 'At home in the evening' },
          { question: 'What does he do every day?', options: ['He watches TV', 'He reads short articles and practices listening', 'He visits friends', 'He travels'], answer: 'He reads short articles and practices listening' },
          { question: 'How long does he practice?', options: ['For two hours', 'For thirty minutes', 'For a whole week', 'Never'], answer: 'For thirty minutes' },
          { question: 'How does the routine make him feel?', options: ['More confident', 'Sleepy', 'Confused', 'Anxious'], answer: 'More confident' }
        ]
      },
      {
        title: 'Reading 2: A work challenge',
        text: 'My manager asked me to prepare a presentation for a new client. At first, I felt nervous because I had never done that before. I spent several evenings researching the company and preparing examples. In the end, the presentation was successful, and the client was impressed by my organization and confidence.',
        questions: [
          { question: 'What did the manager ask the speaker to do?', options: ['Write a report', 'Prepare a presentation', 'Answer emails', 'Travel abroad'], answer: 'Prepare a presentation' },
          { question: 'Why did the speaker feel nervous?', options: ['Because they had never spoken in public', 'Because it was a holiday', 'Because the client was late', 'Because the office was closed'], answer: 'Because they had never spoken in public' },
          { question: 'How did the speaker prepare?', options: ['By taking a break', 'By researching the company and preparing examples', 'By buying a new computer', 'By ignoring the task'], answer: 'By researching the company and preparing examples' },
          { question: 'What was the result?', options: ['The client left', 'The presentation was successful', 'The manager was angry', 'The company closed'], answer: 'The presentation was successful' },
          { question: 'What impressed the client?', options: ['The speaker’s organization and confidence', 'The manager’s schedule', 'The office design', 'The weather'], answer: 'The speaker’s organization and confidence' }
        ]
      }
    ]
  },
  b2: {
    label: 'B2',
    title: 'Nivel B2 - Upper Intermediate',
    readings: [
      {
        title: 'Reading 1: Social media habits',
        text: 'Social media has changed the way people communicate, but it has also created new challenges. Although it helps users stay connected, excessive screen time can reduce attention and affect sleep quality. Experts recommend setting limits, turning off notifications and choosing meaningful online interactions instead of constant scrolling.',
        questions: [
          { question: 'What has social media changed?', options: ['The weather', 'The way people communicate', 'The production of food', 'The price of fuel'], answer: 'The way people communicate' },
          { question: 'What is one negative effect mentioned?', options: ['Reduced attention and sleep problems', 'Fewer cars on the road', 'Higher wages', 'Less internet access'], answer: 'Reduced attention and sleep problems' },
          { question: 'What do experts recommend?', options: ['Using social media all day', 'Setting limits and turning off notifications', 'Buying more devices', 'Deleting all friends'], answer: 'Setting limits and turning off notifications' },
          { question: 'What does the text suggest instead of constant scrolling?', options: ['More notifications', 'Meaningful online interactions', 'Longer work hours', 'Avoiding the internet'], answer: 'Meaningful online interactions' },
          { question: 'What is the overall message?', options: ['Social media is always negative', 'Social media should be completely ignored', 'It can be useful if used wisely', 'People should stop communicating'], answer: 'It can be useful if used wisely' }
        ]
      },
      {
        title: 'Reading 2: Sustainability and habits',
        text: 'Sustainability is no longer a niche topic; it has become a global priority. Many people now choose reusable bags, reduce waste and buy local products to minimize their environmental impact. Even small habitual changes, such as turning off lights or cycling to work, can contribute to a more sustainable future.',
        questions: [
          { question: 'What has sustainability become?', options: ['A private topic', 'A global priority', 'A fashion trend', 'A temporary issue'], answer: 'A global priority' },
          { question: 'What do many people do now?', options: ['Ignore recycling', 'Use reusable bags and reduce waste', 'Buy more plastic', 'Travel more often'], answer: 'Use reusable bags and reduce waste' },
          { question: 'Why do people buy local products?', options: ['To spend more money', 'To minimize environmental impact', 'To move to another country', 'To increase traffic'], answer: 'To minimize environmental impact' },
          { question: 'What is an example of a small habit change?', options: ['Buying more electronics', 'Turning off lights', 'Increasing pollution', 'Taking longer vacations'], answer: 'Turning off lights' },
          { question: 'What is the idea of the text?', options: ['Only governments can solve the problem', 'Small actions can contribute to a sustainable future', 'Sustainability is impossible', 'Local products are useless'], answer: 'Small actions can contribute to a sustainable future' }
        ]
      }
    ]
  },
  c1: {
    label: 'C1',
    title: 'Nivel C1 - Advanced',
    readings: [
      {
        title: 'Reading 1: A business case',
        text: 'The company decided to restructure its international division after several quarters of slow growth and inconsistent market performance. Senior managers argued that a more flexible model would allow teams to respond more quickly to regional demands. Although the decision generated short-term uncertainty, the strategy was intended to strengthen long-term resilience and improve customer satisfaction.',
        questions: [
          { question: 'Why did the company restructure its division?', options: ['Because it wanted to expand to another continent', 'Because of slow growth and inconsistent performance', 'Because all employees resigned', 'Because it wanted to close the company'], answer: 'Because of slow growth and inconsistent performance' },
          { question: 'What was the main goal of the new model?', options: ['Increase the number of branches', 'Respond faster to regional demands', 'Reduce salaries', 'Stop exporting'], answer: 'Respond faster to regional demands' },
          { question: 'What was the short-term effect?', options: ['Immediate profit', 'Uncertainty', 'No changes', 'Better office design'], answer: 'Uncertainty' },
          { question: 'What was the long-term objective?', options: ['To reduce communication', 'To strengthen resilience and customer satisfaction', 'To lower the workforce', 'To close markets'], answer: 'To strengthen resilience and customer satisfaction' },
          { question: 'How is the strategy described?', options: ['Short-sighted and weak', 'Flexible and long-term oriented', 'Unsafe and careless', 'Simple and unnecessary'], answer: 'Flexible and long-term oriented' }
        ]
      },
      {
        title: 'Reading 2: A cultural article',
        text: 'Cultural identity is often shaped through language, ritual and memory. Communities preserve themselves not only by transmitting traditions, but also by revising them in response to new realities. As migration and globalization increase, cultural narratives become more dynamic, creating both tension and opportunity for dialogue between generations.',
        questions: [
          { question: 'What shapes cultural identity?', options: ['Only technology', 'Language, ritual and memory', 'Only education', 'Only holidays'], answer: 'Language, ritual and memory' },
          { question: 'How do communities preserve themselves?', options: ['Only by rejecting change', 'By transmitting and revising traditions', 'By reading fewer books', 'By reducing language use'], answer: 'By transmitting and revising traditions' },
          { question: 'What changes as migration and globalization increase?', options: ['The weather', 'Cultural narratives', 'The number of countries', 'Academic grades'], answer: 'Cultural narratives' },
          { question: 'What does this create?', options: ['Only conflict', 'Tension and opportunity for dialogue', 'No change at all', 'A new language everywhere'], answer: 'Tension and opportunity for dialogue' },
          { question: 'What is the main idea?', options: ['Culture stays static forever', 'Culture is dynamic and evolves over time', 'Traditions should never change', 'Only older generations matter'], answer: 'Culture is dynamic and evolves over time' }
        ]
      }
    ]
  }
};

@Component({
  selector: 'app-reading-test',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './reading-test.html',
  styleUrl: './reading-test.css'
})
export class ReadingTest {
  levelKey: string;
  level: { label: string; title: string; readings: Reading[] };

  constructor(private route: ActivatedRoute) {
    this.levelKey = this.route.snapshot.paramMap.get('level') ?? 'a1';
    this.level = levelData[this.levelKey] ?? levelData['a1'];
  }

  getReadingQuestions(reading: Reading): string[] {
    return reading.questions.map((question) => question.question);
  }
}
