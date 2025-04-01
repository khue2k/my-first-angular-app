import {Routes} from '@angular/router';
import {TemplateDrivenFormComponent} from "./template-driven-form/template-driven-form.component";
import {ReactiveFormComponent} from "./reactive-form/reactive-form.component";
import {ProfileEditorComponent} from "./profile-editor/profile-editor.component";

export const routes: Routes = [
  {path:'template-driven-form',component: TemplateDrivenFormComponent},
  {path:'reactive-form',component: ReactiveFormComponent},
  {path:'profile-editor',component: ProfileEditorComponent},
];

