import { Component, Input, ChangeDetectionStrategy } from '@angular/core';

import { UserModel } from './../../models/user.model';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class UserComponent {
  @Input() user: UserModel;

  onEditUser() {

  }
}
