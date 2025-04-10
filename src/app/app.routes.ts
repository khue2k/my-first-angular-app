import {Routes} from '@angular/router';
import {ProfileEditorComponent} from "./profile-editor/profile-editor.component";
import {LoginPageComponent} from "./login-page/login-page.component";

export const routes: Routes = [
  {path: 'profile-editor', component: ProfileEditorComponent},
  {path: 'login-page', component: LoginPageComponent}
];

