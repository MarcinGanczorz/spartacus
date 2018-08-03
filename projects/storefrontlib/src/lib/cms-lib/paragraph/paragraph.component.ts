import { Component, ChangeDetectionStrategy } from '@angular/core';
import { AbstractCmsComponent } from '../../cms/components/abstract-cms-component';

@Component({
  selector: 'y-paragraph',
  templateUrl: './paragraph.component.html',
  styleUrls: ['./paragraph.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ParagraphComponent extends AbstractCmsComponent {
  static componentName = 'ParagraphComponent';
  paragraphData: string;

  protected fetchData() {
    if (this.component && this.component.content) {
      this.paragraphData = this.component.content;
    }
    super.fetchData();
  }
}
