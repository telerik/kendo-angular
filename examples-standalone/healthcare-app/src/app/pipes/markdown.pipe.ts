import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { marked } from 'marked';

@Pipe({
  name: 'markdown',
  standalone: true,
})
export class MarkdownPipe implements PipeTransform {
  constructor(private sanitizer: DomSanitizer) {
    // Configure marked options for better rendering
    marked.setOptions({
      breaks: true, // Convert \n to <br>
      gfm: true, // GitHub Flavored Markdown
    });
  }

  transform(value: string | undefined): SafeHtml {
    if (!value) {
      return '';
    }

    try {
      const html = marked.parse(value);
      return this.sanitizer.sanitize(1, html) || '';
    } catch (error) {
      console.error('Markdown parsing error:', error);
      return value;
    }
  }
}
